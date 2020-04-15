import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
    cart: []
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
    }
  },
  actions: {
  },
  modules: {
  }
})
