<template>
  <div>
    <van-swipe class="my-swipe" :autoplay="1500" indicator-color="#1989FA">
      <van-swipe-item v-for='item in imgList' :key="item.id">
          <img :src="item.path" alt="">
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: "ProductSwiper",
  props: {
      imgList: {
          type: Array,
          default(){
              return []
          }
      }
  }
};
</script>

<style scoped>
.my-swipe img{
    width: 100%;
}
</style>
