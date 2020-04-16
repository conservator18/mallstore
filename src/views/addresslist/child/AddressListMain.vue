<template>
  <div>
    <van-address-list
      v-model="chosenAddressId"
      :switchable="$route.query.from == 'order' ? true : false"
      :list="addresslist"
      @add="onAdd"
      @edit="onEdit"
    />
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  name: "AddressListMain",
  data() {
    return {
      chosenAddressId: "1",
      list: [
        {
          id: "1",
          name: "张三",
          tel: "13000000000",
          address: "浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室"
        }
      ]
    };
  },
  methods: {
    onAdd() {
      this.$router.push({
        path: '/addressedit',
        query: {
          id: 0
        }
      });
    },
    onEdit(item, index) {
      this.$router.push({
        path: '/addressedit',
        query: {
          id: item.id
        }
      });
    }
  },
  computed: {
    addresslist() {
      let list = [];
      this.$store.state.user.addressList.forEach(item => {
        list.push({
          id: item.id,
          name: item.name,
          tel: item.mobile,
          address: `${item.province}${item.city}${item.country}${item.detail}`
        });
      });
      return list;
    }
  }
};
</script>

<style scoped>
</style>
