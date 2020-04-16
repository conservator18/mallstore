<template>
  <div class="order-confirm">
    <!-- 头部导航栏 -->
    <order-confirm-nav-bar></order-confirm-nav-bar>
    <!-- 收货地址 -->
    <order-confirm-address></order-confirm-address>
    <!-- 商品详情 -->
    <order-confirm-main></order-confirm-main>
    <!-- 付款 -->
    <order-confirm-submit></order-confirm-submit>
  </div>
</template>

<script>
import OrderConfirmNavBar from './child/OrderConfirmNavBar'
import OrderConfirmAddress from './child/OrderConfirmAddress'
import OrderConfirmMain from './child/OrderConfirmMain'
import OrderConfirmSubmit from './child/OrderConfirmSubmit'
export default {
  name: "OrderConfirm",
  components: {OrderConfirmNavBar, OrderConfirmAddress, OrderConfirmMain, OrderConfirmSubmit}
};
</script>

<style scoped>
.order-confirm{
  height: calc(100vh - 50px - 46px);
  margin-top: 46px;
  background: #F8F8F8;
}
</style>
