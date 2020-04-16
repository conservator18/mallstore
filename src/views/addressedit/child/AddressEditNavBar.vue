<template>
  <div>
    <van-nav-bar
      :title="$route.query.id == 0 ? '新增地址' : '编辑地址'"
      left-text="返回"
      left-arrow
      @click-left="$router.back()"
    />
  </div>
</template>

<script>
export default {
  name: "AddressEditNavBar"
};
</script>

<style scoped>
</style>
