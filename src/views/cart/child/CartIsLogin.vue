<template>
  <div class="isLogin" :class="{none: Login}">登录后体验更好</div>
</template>

<script>
export default {
  name: "CartIsLogin",
  data() {
    return {
      Login: false
    };
  },
  created() {
    sessionStorage.getItem("token")
      ? (this.Login = true)
      : (this.Login = false);
  }
};
</script>

<style scoped>
.isLogin {
  width: 100vw;
  height: 50px;
  background: #07c160;
  color: #fff;
  text-align: center;
  line-height: 50px;
}
.none {
  display: none;
}
</style>
