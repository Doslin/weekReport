import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import echarts from 'echarts'
import axios from 'axios'
import h5 from './assets/index'
import 'lib-flexible'
// import Swiper from 'swiper'
import './rem.js'
// import $ from 'jquery'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
Vue.prototype.$http = axios

Vue.use(h5)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
