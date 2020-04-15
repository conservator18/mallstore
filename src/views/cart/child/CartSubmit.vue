<template>
  <div>
    <van-submit-bar :price="totalPrice" button-text="结算">
      <template #default>共{{totalCount}}件</template>
    </van-submit-bar>
  </div>
</template>

<script>
export default {
  name: "CartSubmit",
  props: {
    cartList: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {};
  },
  computed: {
    //总数量
    totalCount() {
      let count = 0;
      this.cartList.forEach(item => {
        if(item.checked) {
          count += item.count;
        }
      })
      return count;
    },
    //总价
    totalPrice() {
      let toPrice = 0;
      for (let i = 0; i < this.cartList.length; i++) {
        if (this.cartList[i].checked) {
          toPrice += this.cartList[i].count * this.cartList[i].price;
        }
      }
      return toPrice * 100;
    }
  }
};
</script>

<style scoped>
</style>
