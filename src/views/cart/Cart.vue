<template>
  <div>
    <!-- 头部导航 -->
    <cart-nav-bar></cart-nav-bar>
    <!-- 是否登录 -->
    <cart-is-login></cart-is-login>
    <!-- 购物车商品 -->
    <cart-main :cartList="cartList"></cart-main>
    <!-- 提交订单 -->
    <cart-submit :cartList='cartList'></cart-submit>
  </div>
</template>

<script>
import CartNavBar from "./child/CartNavBar";
import CartIsLogin from "./child/CartIsLogin";
import CartMain from "./child/CartMain";
import CartSubmit from "./child/CartSubmit";
export default {
  name: "Cart",
  components: { CartNavBar, CartIsLogin, CartMain, CartSubmit },
  data() {
    return {
      cartList: []
    };
  },
  created() {
    this.getCart();
  },
  methods: {
    //获取购物车数据
    getCart() {
      this.request({
        url: this.url.cart,
        method: "get"
      })
        .then(res => {
          this.cartList = res.data.data;
          this.$store.commit('addCart', this.cartList)
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
