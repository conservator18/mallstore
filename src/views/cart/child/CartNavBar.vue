<template>
  <div class='carNavBar'>
    <van-nav-bar
      title="购物车"
      left-text="返回"
      left-arrow
      @click-left="$router.back()"
    />
  </div>
</template>

<script>
export default {
  name: "CartNavBar"
};
</script>

<style scoped>
.carNavBar{
  border-bottom: 1px solid rgba(100, 100, 100, .1)
}
</style>
