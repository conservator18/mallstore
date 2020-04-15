<template>
  <div class="main">
    <van-checkbox
      v-model="item.checked"
      class="checked"
      v-for="item in cartList"
      :key="item.product_id"
      @change="changeChecked(item)"
    >
      <div @click.stop class="itemBox">
        <div class="img">
          <img :src="item.cover" alt />
        </div>
        <div class="detail">
          <div class="title">{{item.name}}</div>
          <div class="price">￥{{item.price.toFixed(2)}}</div>
          <van-stepper v-model="item.count" class="step" @plus="changeCount(item)" @minus='changeCount(item)' @blur="changeCount(item)" />
          <button class="del" @click='delet(item)'>删除</button>
        </div>
      </div>
    </van-checkbox>
  </div>
</template>

<script>
export default {
  name: "CartMain",
  props: {
    cartList: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    //删除按钮
    delet(item){
      //在数据库内删除
      this.request({
        url: this.url.delet,
        method: 'get',
        params: {
          product_id: item.product_id
        }
      }).then(res => {
        //在store里面删除
        this.$store.commit('deleteCart', item.product_id);
      }).catch(err => {
      })
    },
    //改变数据库里的checked状态
    changeChecked(item) {
      this.request({
        url: this.url.addone,
        method: "post",
        data: {
          product_id: item.product_id,
          checked: item.checked ? 1 : 0
        }
      })
        .then(res => {})
        .catch(err => {});
    },
    //改变数量
    changeCount(item) {
      //会在dom渲染完成时执行
      this.$nextTick(() => {
        this.request({
          url: this.url.addone,
          method: "post",
          data: {
            product_id: item.product_id,
            count: item.count
          }
        }).then(res => {
          console.log(res);
        }).catch(err => {
          console.log(err);
        })
      });
    }
  }
};
</script>

<style scoped>
.main {
  height: calc(100vh - 46px - 50px);
  background: #f8f8f8;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
}
.checked {
  background: #fafafa;
  padding: 0 10px;
}
.itemBox {
  display: flex;
  padding: 5px 0;
}
.itemBox .img {
  flex: 1;
}
.itemBox .detail {
  flex: 2;
  position: relative;
}
.itemBox .img img {
  width: 100%;
}
.itemBox .title {
  font-size: 12px;
  overflow: hidden; /** 隐藏超出的内容 **/
  text-overflow: ellipsis; /** 多行 **/
  display: -webkit-box; /** 对象作为伸缩盒子模型显示 **/
  -webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
  -webkit-line-clamp: 2; /** 显示的行数 **/
  padding: 0 10px 0 8px;
}
.itemBox .price {
  color: #ff4444;
  position: absolute;
  bottom: 0;
  left: 8px;
}
.itemBox .step {
  position: absolute;
  right: 10px;
  bottom: 25px;
}
.itemBox .del {
  position: absolute;
  bottom: 0;
  right: 10px;
  border: none;
  background: #ee0a24;
  color: #fff;
  font-size: 14px;
  border-radius: 2px;
}
</style>
