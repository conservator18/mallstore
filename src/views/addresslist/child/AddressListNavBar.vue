<template>
  <div>
    <van-nav-bar
      :title="title"
      left-text="返回"
      left-arrow
      @click-left="$router.back()"
    />
  </div>
</template>

<script>
export default {
  name: "AddressListNavBar",
  data(){
    return {
      title: ''
    }
  },
  created(){
    this.$route.query.from == 'order' ? this.title = '请选择收货地址' : this.title = '我的收获地址';
  }
};
</script>

<style scoped>
</style>
