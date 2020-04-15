<template>
  <div class='middle-bar'>
    <van-cell title='全部订单' icon='records' is-link to="index" />
    <van-cell title='我的收藏' icon='like-o' is-link to="index" />
    <van-cell title='我的收货地址' icon='description' is-link to="index" />
    <van-cell title='用户设置' icon='setting-o' is-link to="index" />
  </div>
</template>

<script>
export default {
  name: "UserMiddleBar",
  data(){
      return {
          
      }
  }
};
</script>

<style scoped>
.middle-bar{
    border-top: 1px solid rgba(100, 100, 100, .1);
    border-bottom: 1px solid rgba(100, 100, 100, .1);
}
</style>
