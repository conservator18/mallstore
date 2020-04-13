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


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
