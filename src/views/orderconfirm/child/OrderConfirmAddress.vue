<template>
  <div class="address">
      <van-cell title="请选择收货地址" is-link :to="{path: '/addresslist', query: {from: 'order'}}" />
  </div>
</template>

<script>
export default {
  name: "OrderConfirmAddress"
};
</script>

<style scoped>
</style>
