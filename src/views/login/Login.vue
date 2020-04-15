<template>
  <div>
    <van-nav-bar title="登录/注册" @click-left="onClickLeft">
      <template #left>
        <van-icon name="cross" size="18" />
      </template>
    </van-nav-bar>

    <van-field v-model.trim="username" label="用户名" placeholder="请输入用户名" :error-message="userErr" />
    <van-field
      v-model="password"
      type="password"
      label="密码"
      placeholder="请输入密码"
      :error-message="pwdErr"
    />

    <van-button type="primary" size="large" @click="loginClick">登录/注册</van-button>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
      userErr: "",
      pwdErr: ""
    };
  },
  methods: {
    //返回上一页
    onClickLeft() {
      this.$router.back();
    },

    //判断登录条件是否成立
    judge() {
      if (!this.username) {
        this.userErr = "账号不能为空";
        return;
      } else {
        this.userErr = "";
      }
      if (!this.password) {
        this.pwdErr = "密码不能为空";
        return;
      } else {
        this.pwdErr = "";
      }
      if (this.password.length < 5) {
        this.pwdErr = "密码长度不能小于五位数";
        return;
      } else {
        this.pwdErr = "";
      }
      return true;
    },

    //登录
    loginClick() {
      //登录条件成立时往下执行
      if (!this.judge()) {
        return;
      }

      //请求登录数据
      this.request({
        url: this.url.login,
        method: "post",
        data: {
          name: this.username,
          password: this.password
        }
      })
        .then(res => {
          //将请求到的数据存放到state里面
          this.$store.commit("assignUser", res.data.data);
          //将请求到的token存放到sessiong里面
          sessionStorage.setItem("token", res.data.data.token);
          this.$router.back()
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style scoped>
</style>
