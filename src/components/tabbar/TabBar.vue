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
export default {
  name: "TabBar",
  props: {
    index: {
      type: Number,
      default(){
        return 0
      }
    }
  },
  data() {
    return {
      active: 0
    };
  },
  created(){
    this.active = this.index;
  }
};
</script>

<style scoped>
</style>
