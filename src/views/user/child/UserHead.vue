<template>
  <div>
    <div class="head" v-if="!$store.state.user.name">
      <img src='~assets/img/profile.png' alt />
      <span @click='loginClick'>登录</span>
    </div>
    <div class="head" v-else>
      <img v-if='!$store.state.user.avatar' src='~assets/img/profile.png' alt />
      <img v-else :src='`http://192.168.3.250:8360${$store.state.user.avatar}`' alt />
      <span>{{$store.state.user.nickname}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserHead",
  props: {
    userList: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    loginClick(){
      this.$router.push('/login')
    }
  }
};
</script>

<style scoped>
.head {
  background: #ff4444;
  padding: 16px;
}
.head img{
    width: 64px;
    height: 64px;
    vertical-align: middle;
}
.head span{
    color: #FFDAB9;
    margin-left: 5px;
}
</style>
