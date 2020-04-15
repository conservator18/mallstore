<template>
  <div>
    <!-- 顶部导航 -->
    <product-nav-bar></product-nav-bar>
    <!-- 滑动部分 -->
    <div class="product-main">
      <!-- 轮播图 -->
      <product-swiper :imgList="productInfoList.imgList"></product-swiper>
      <!-- 标题部分 -->
      <product-title :productInfoList="productInfoList"></product-title>
      <!-- 详情图片 -->
      <product-tab-bar :productInfoList="productInfoList"></product-tab-bar>
    </div>
    <!-- 商品导航 -->
    <product-bottom-bar :productInfoList="productInfoList"></product-bottom-bar>
  </div>
</template>

<script>
import ProductNavBar from "./child/ProductNavBar";
import ProductSwiper from "./child/ProductSwiper";
import ProductTitle from "./child/ProductTitle";
import ProductTabBar from "./child/ProductTabBar";
import ProductBottomBar from "./child/ProductBottomBar";
export default {
  name: "Product",
  components: {
    ProductNavBar,
    ProductSwiper,
    ProductTitle,
    ProductTabBar,
    ProductBottomBar
  },
  data() {
    return {
      productId: "",
      productInfoList: {} //商品详情
    };
  },
  created() {
    this.productId = this.$route.query.id;
    this.getProduct();
  },
  methods: {
    getProduct() {
      this.request({
        url: this.url.productInfo,
        methods: "get",
        params: {
          id: this.productId
        }
      })
        .then(res => {
          this.productInfoList = res.data.data;
          //   console.log(this.productInfoList);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style scoped>
.product-main{
    margin-top:46px;
    height: calc(100vh - 46px - 50px);
    overflow: scroll;
    -webkit-overflow-scrolling: touch;
}
</style>
