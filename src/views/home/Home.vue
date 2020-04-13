<template>
  <div>
    <!-- 首部导航栏 -->
    <home-nav-bar></home-nav-bar>
    <!-- 正文 -->
    <home-main class="main" :productList="productList" ref="mainDom" @scroll.native="scroll"></home-main>
    <!-- 返回顶部 -->
    <home-back v-show="isShowBack" @click.native="goBack"></home-back>
    <!-- 底部导航栏 -->
    <tab-bar></tab-bar>
  </div>
</template>

<script>
import TabBar from "../../components/tabbar/TabBar";
import HomeNavBar from "./child/HomeNavBar";
import HomeMain from "./child/HomeMain";
import HomeBack from "./child/HomeBack";
export default {
  name: "Home",
  components: { TabBar, HomeNavBar, HomeMain, HomeBack },
  data() {
    return {
      productList: [],
      page: 1,
      isAddPage: false,
      totalPage: 0,
      isShowBack: false
    };
  },
  created() {
    this.getProduct(1);
  },
  methods: {
    //返回顶部
    goBack() {
      let mainDom = this.$refs.mainDom.$el;
      //    mainDom.scrollTop = 0;
      // 实现滚动效果
      const timeTop = setInterval(() => {
        mainDom.scrollTop -= 50;
        if (mainDom.scrollTop <= 0) {
          clearInterval(timeTop);
        }
      }, 10);
    },

    //监听滑动事件
    scroll() {
      let mainDom = this.$refs.mainDom.$el;

      //显示返回顶部按钮
      mainDom.scrollTop > 500
        ? (this.isShowBack = true)
        : (this.isShowBack = false);

      //没有数据了
      if (this.page >= this.totalPage) {
        this.$toast({
          message: "没有更多数据了",
          duration: 1000
          //   forbidClick: true
        });
        return;
      }

      //是否请求下一页的数据
      if (this.isAddPage) {
        return;
      }
      //到底了
      if (
        mainDom.clientHeight + mainDom.scrollTop >=
        mainDom.scrollHeight - 1
      ) {
        this.page++;
        this.getProduct(this.page);
      }
    },
    //获取商品信息
    getProduct(page) {
      this.isAddPage = true;
      this.request({
        url: this.url.product,
        methods: "get",
        params: {
          page: page,
          size: 10
        }
      })
        .then(res => {
          this.totalPage = res.data.data.totalPages;
          this.productList = this.productList.concat(res.data.data.data);
          this.isAddPage = false;
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
