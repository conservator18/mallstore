import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {request} from './network/request'
import Vant from 'vant';
import 'vant/lib/index.css';
import url from './network/url';

Vue.use(Vant);

Vue.config.productionTip = false
Vue.prototype.request = request
Vue.prototype.url = url;

if(sessionStorage.getItem('token')){
  request({
    url: url.userInfo,
    method: 'get'
  }).then(res => {
    //将当前登录对象存放到store里面的user中
    store.commit('assignUser', res.data.data)
  }).catch(err => {
    console.log(err);
  })
}


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
