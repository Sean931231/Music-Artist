import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import "mand-mobile/components/_style/global.styl";
import "normalize.css";

Vue.config.productionTip = false
Vue.prototype.$api = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
