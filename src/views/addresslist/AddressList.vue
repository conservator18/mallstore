<template>
  <div>
      <!-- 头部导航 -->
      <address-list-nav-bar></address-list-nav-bar>
      <!-- 主体部分 -->
      <address-list-main></address-list-main>
  </div>
</template>

<script>
import AddressListNavBar from './child/AddressListNavBar'
import AddressListMain from './child/AddressListMain'
export default {
  name: "AddressList",
  components: {AddressListNavBar,AddressListMain}
};
</script>

<style scoped>
</style>
