<template>
  <div>
    <van-goods-action>
      <van-goods-action-icon
        :icon="isLike ? 'like' : 'like-o'"
        :color="isLike ? 'red' : ''"
        text="收藏"
        @click="onClickLike"
      />
      <van-goods-action-icon icon="cart-o" text="购物车" />
      <van-goods-action-button type="warning" text="加入购物车" @click='addCart' />
      <van-goods-action-button type="danger" text="立即购买" />
    </van-goods-action>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  name: "ProductBottomBar",
  props: {
    productInfoList: {
      type: Object,
      default(){
        return {}
      }
    }
  },
  data() {
    return {
      productId: null,
      obj: {
            cover: '',
            name: '',
            price: null,
            product_id: null
          }
    };
  },
  created(){
    this.productId = this.$route.query.id;
  },
  methods: {
    //添加到购物车
    addCart(){
      this.request({
        url: this.url.addone,
        method: 'post',
        data: {
          product_id: this.productId
        }
      }).then(res => {
        this.$toast('加入成功')
      }).catch(err => {
        console.log(err);
      })
    },
    //点击收藏按钮
    onClickLike() {
      if(this.isLike){
        //取消收藏
        this.request({
          url: this.url.concelLike,
          method: 'get',
          params: {
            product_id: this.productId
          }
        }).then(res => {
          this.$store.commit('cancelLikeList', this.productId);
        }).catch(err => {
          console.log(err);
        })
      }else{
        //收藏
        this.request({
        url: this.url.like,
        method: "post",
        data: {
          product_id: this.productId
        }
      })
        .then(res => {
          console.log(res);
          this.obj = {
            cover: this.productInfoList.cover,
            name: this.productInfoList.name,
            price: this.productInfoList.price,
            product_id: this.productId
          }
          this.$store.commit('assignLikeList', this.obj)
        })
        .catch(err => {
          console.log(err);
        });
      }
    }
  },
  computed:{
    //判断当前收藏是否为选中状态
    isLike(){
      if(!this.$store.state.user.likeList){
        return;
      }
      this.$store.state.user.likeList.forEach(item => {
        if(item.product_id == this.productId) {
          return true;
        }
      })
      return false;
    }
  }
};
</script>

<style scoped>
</style>
