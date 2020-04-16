<template>
  <div>
      <!-- 头部导航 -->
      <address-edit-nav-bar ></address-edit-nav-bar>
      <!-- 内容 -->
      <address-edit-main></address-edit-main>
  </div>
</template>

<script>
import AddressEditNavBar from './child/AddressEditNavBar'
import AddressEditMain from './child/AddressEditMain'
export default {
  name: "AddressEdit",
  components: {AddressEditNavBar, AddressEditMain},
  created(){
  }
};
</script>

<style scoped>
</style>
