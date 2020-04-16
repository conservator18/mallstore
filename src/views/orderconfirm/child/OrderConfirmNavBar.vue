<template>
  <div class="navBar">
      <van-nav-bar
      title="结算"
      left-text="返回"
      left-arrow
      @click-left="$router.back()"
      fixed
    />
  </div>
</template>

<script>
export default {
  name: "OrderConfirmNavBar"
};
</script>

<style scoped>
.navBar{
  border-bottom: 10px solid #F8F8F8;
}
</style>
