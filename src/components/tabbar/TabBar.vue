<template>
  <div>
    <van-tabbar v-model="active" class="home-tab-bar-border">
      <van-tabbar-item icon="star-o" to='/home'>精选</van-tabbar-item>
      <van-tabbar-item icon="cart-o" to='/cart'>购物车</van-tabbar-item>
      <van-tabbar-item icon="contact" to='/user'>我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
const obj = {
      active: 0
    }
export default {
  name: "TabBar",
  data() {
    return obj;
  }
};
</script>

<style scoped>
</style>
