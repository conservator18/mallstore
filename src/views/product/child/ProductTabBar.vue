<template>
  <div class="product-tab-bar">
    <van-tabs v-model="active" sticky offset-top='46'>
      <van-tab class="detail" title="详情">
        <img v-for="item in productInfoList.detailImgList" :key="item.id" :src="item.path" alt />
      </van-tab>
      <van-tab title="参数" class="params">
        <van-row v-for='item in productInfoList.properties' :key='item.id' class="text">
          <van-col span="10">{{item.name}}</van-col>
          <van-col span="14">{{item.detail}}</van-col>
        </van-row>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  name: "ProductTabBar",
  data() {
    return {
      active: 0
    };
  },
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
.product-tab-bar{
    border-top: 1px solid rgba(100, 100, 100, .1);
}
.detail img {
  width: 100%;
}
.text{
    font-size: 12px;
    padding: 10px 15px;
}
</style>
