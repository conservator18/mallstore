<template>
  <div>
    <van-nav-bar title="详情" left-text="返回" left-arrow fixed @click-left="onClickLeft"/>
  </div>
</template>

<script>
export default {
  name: "ProductNavBar",
  methods: {
    onClickLeft() {
      this.$router.back();
    }
  }
};
</script>

<style scoped>
</style>
