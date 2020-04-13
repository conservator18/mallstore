<template>
  <div>
    <van-nav-bar title="精选" :fixed="true">
      <template #right>
        <van-icon name="search" size="18" />
      </template>
      <template #left>
        <van-icon name="location-o" size="18" />深圳市
      </template>
    </van-nav-bar>
  </div>
</template>

<script>
export default {
  name: "HomeNavBar"
};
</script>

<style scoped>
</style>
