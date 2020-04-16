import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
    cart: [],
    areaList: {}
  },
  mutations: {
    assignUser(state, data){
      state.user = data;
    },
    //添加到收藏
    assignLikeList(state, obj){
      if(obj.likeList){
        state.user.likeList.push(obj)
      }
    },
    //取消收藏
    cancelLikeList(state, productId){
      state.user.likeList.forEach((item, index) => {
        if(item.product_id == productId) {
          state.user.likeList.splice(index, 1);
        }
      })
    },
    //添加购物车信息
    addCart(state, data){
      state.cart = data;
    },
    //删除购物车信息
    deleteCart(state, productId){
      state.cart.forEach((item, index) => {
        if(item.product_id == productId) {
          state.cart.splice(index, 1);
        }
      })
    },
    //获取地区列表
    getAreaList(state, array){
      state.areaList = array;
    },
    //修改地址信息
    updateAddress(state, addr) {
      console.log(addr);
      state.user.addressList.forEach(item => {
        if(item.id == addr.id) {
          item.name=addr.name
          item.province = addr.province
          item.city = addr.city
          item.country = addr.country
          item.detail = addr.detail
          item.mobile = addr.mobile
          item.code = addr.code
          item.default = addr.default
        }
      })
    },
    //添加地址信息
    addAddr(state, addr){
      state.user.addressList.push(addr)
    },
    //删除地址信息
    deleteAddr(state, addrId){
      state.user.addressList.forEach((item, index) => {
        if(item.id == addrId) {
          state.user.addressList.splice(index, 1);
        }
      })
    }
  },
  actions: {
  },
  modules: {
  }
})
