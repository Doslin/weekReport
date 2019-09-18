import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import VueRouter from 'vue-router'
import store from './store/index'
import echarts from 'echarts'
import axios from 'axios'
import 'lib-flexible'
import 'swiper/dist/css/swiper.min.css'
import './rem.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Navigation from 'vue-navigation'
import { Progress } from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

Vue.use(ElementUI)
Vue.use(Navigation, { router, store })
Vue.use(Progress)
Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
Vue.prototype.$http = axios

const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return routerPush.call(this, location).catch(error => error)
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
