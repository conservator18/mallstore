<template>
  <div>
    <van-submit-bar :price="totalPrice" button-text="付款">
      <template #default>
        共{{totalCount}}件
      </template>
    </van-submit-bar>
  </div>
</template>

<script>
export default {
  name: "OrderConfirmSubmit",
  data() {
    return {
      buyList: []
    };
  },
  created() {
    this.buyList = JSON.parse(sessionStorage.getItem("buyList"));
  },
  computed: {
    totalPrice() {
      let price = 0;
      this.buyList.forEach(item => {
        price += item.price * item.count;
      });
      return price * 100;
    },
    totalCount() {
        let count = 0;
        this.buyList.forEach(item => {
            count += item.count;
        })
      return count;
    }
  }
};
</script>

<style scoped>
</style>
