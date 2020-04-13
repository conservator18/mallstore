<template>
  <div class="title">
    <div>{{productInfoList.name}}</div>
    <div class="price">￥{{productInfoList.price}}</div>

    <van-row class="bottom-text">
      <van-col span="10">免运费</van-col>
      <van-col span="14">剩余：{{productInfoList.stock}}件</van-col>
    </van-row>
    <van-row class="bottom-text">
      <van-col span="10">销量：{{productInfoList.sales}}</van-col>
      <van-col span="14">收藏数：{{productInfoList.likes}}</van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  name: "ProductTitle",
  props: {
    productInfoList: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style scoped>
.title{
    padding: 15px;
}
.price{
    color: #FF4444;
    font-size: 14px;
    margin: 10px 0;
}
.bottom-text{
    padding: 10px 0;
    font-size: 12px;
    border-top: 1px solid rgba(100, 100, 100, .1);
}
</style>
