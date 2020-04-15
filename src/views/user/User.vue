<template>
  <div>
    <!-- 头像昵称 -->
    <user-head :userList='userList'></user-head>
    <!-- 上面的菜单 -->
    <user-top-bar></user-top-bar>
    <!-- 中间的菜单 -->
    <user-middle-bar></user-middle-bar>
    <tab-bar :index="2"></tab-bar>
  </div>
</template>

<script>
import TabBar from "../../components/tabbar/TabBar";
import UserHead from "./child/UserHead";
import UserTopBar from './child/UserTopBar'
import UserMiddleBar from './child/UserMiddleBar'
export default {
  name: "User",
  components: { TabBar, UserHead, UserTopBar, UserMiddleBar },
  data(){
    return {
      userList: {}
    }
  },
  created(){
  }
};
</script>

<style scoped>
</style>
