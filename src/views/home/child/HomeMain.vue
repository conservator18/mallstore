<template>
  <div class="main">
    <div class="item" v-for="item in productList" :key="item.id" @click='goInfo(item.id)'>
      <img :src="item.cover" />
      <div class="bottom">
        <h3>{{item.name}}</h3>
        <span>￥{{item.price}}起</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeMain",
  props: {
    productList: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    goInfo(id){
      this.$router.push({
        path: '/product',
        query: {
          id
        }
      })
    }
  }
};
</script>

<style scoped>
.main {
  margin-top: 47px;
  height: calc(100vh - 47px - 51px);
  overflow: scroll;
  -webkit-overflow-scrolling: touch; /* 解决手机滑动卡顿的问题 */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.item {
  width: 49%;
  box-shadow: 0 0 2px rgba(100, 100, 100, 0.4);
  padding: 0 5px;
  box-sizing: border-box;
  margin: 5px 0;
  border-radius: 4px;
  position: relative;
}
.main .item img {
  width: 100%;
  margin-bottom: 50px;
}
.main .item .bottom{
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0 5px;
  box-sizing: border-box;
}
.main .item h3 {
  font-size: 14px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow-x: hidden;
}
.main .item span {
  font-size: 12px;
  color: #ea625b;
}
</style>
