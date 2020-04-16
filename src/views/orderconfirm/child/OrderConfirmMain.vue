<template>
  <div class="main">
    <van-card
      :price="item.price"
      :title="item.name"
      :thumb="item.cover"
      class="item"
      v-for="item in buyList"
      :key="item.id"
    >
      <template #num>{{item.count}}件</template>
    </van-card>
  </div>
</template>

<script>
export default {
  name: "OrderConfirmMain",
  data() {
    return {
      buyList: []
    };
  },
  created() {
    this.buyList = JSON.parse(sessionStorage.getItem("buyList"));
    console.log(this.buyList);
  }
};
</script>

<style scoped>
.main{
  height: calc(100vh - 50px - 46px - 10px - 44px);
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
}
.item {
  background: #fff;
  margin: 10px 0;
}
</style>
