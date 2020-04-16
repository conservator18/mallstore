<template>
  <div>
    <van-address-edit
      :area-list="areaList"
      :show-delete="$route.query.id == 0 ? false : true"
      show-set-default
      :address-info="AddressInfo"
      @save="save"
      @delete="del"
    />
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  name: "AddressEditMain",
  data() {
    return {
      areaList: {},
      searchResult: [],
      addressId: null
    };
  },
  created() {
    this.areaList = this.$store.state.areaList;
    this.addressId = this.$route.query.id;
  },
  methods: {
    //点击删除
    del(content){
      //在数据库中删除数据
      this.request({
        url: this.url.deleteAddr,
        method: 'get',
        params: {
          id: this.addressId
        }
      }).then(res => {
        if(res.data.errcode == 0){
          this.$store.commit('deleteAddr', content.id)
          this.$router.back();
        }
      }).catch(err => {
        console.log(err);
      })
    },
    //点击保存
    save(content) {
      if (this.addressId != 0) {
        //修改用户信息
        let addr = {
          name: content.name,
          province: content.province,
          city: content.city,
          country: content.country,
          detail: content.addressDetail,
          mobile: content.tel,
          code: content.areaCode,
          default: content.isDefault ? 1 : 0
        };

        //修改数据库内的数据
        this.request({
          url: this.url.updateAddr + "?id=" + this.addressId,
          method: "post",
          data: addr
        })
          .then(res => {
            //修改store里面的数据
            if(res.data.errcode == 0){
              addr.id = this.addressId;
              this.$store.commit('updateAddress', addr);
            }
            this.$router.back()
          })
          .catch(err => {
            console.log(err);
          });
      } else {
        //添加用户信息
        let addr = {
          name: content.name,
          province: content.province,
          city: content.city,
          country: content.country,
          detail: content.addressDetail,
          mobile: content.tel,
          code: content.areaCode,
          default: content.isDefault ? 1 : 0
        }

        //在数据库内添加
        this.request({
          url: this.url.addAddr,
          method: 'post',
          data: addr
        }).then(res => {
          //在store中添加
          if(res.data.errcode == 0){
            this.$store.commit('addAddr', res.data.data)
          }
          this.$router.back();
        }).catch(err => {
          console.log(err);
        })
      }
    }
  },
  computed: {
    AddressInfo() {
      let addr = {};
      this.$store.state.user.addressList.forEach(item => {
        if (item.id == this.$route.query.id) {
          {
            (addr.id = item.id),
              (addr.name = item.name),
              (addr.tel = item.mobile),
              (addr.province = item.province),
              (addr.city = item.city),
              (addr.county = item.country),
              (addr.addressDetail = item.detail),
              (addr.areaCode = item.code),
              (addr.isDefault = item.default ? true : false);
          }
        }
      });
      return addr;
    }
  }
};
</script>

<style scoped>
</style>
