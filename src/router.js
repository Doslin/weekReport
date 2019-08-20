import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './components/index.vue'),
      children: [
        {
          path: '/home',
          name: 'home',
          component: () => import(/* webpackChunkName: "about" */ './components/home.vue')
        },
        {
          path: '/totalProgress',
          name: 'totalProgress',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "about" */ './components/totalProgress.vue')
        }
      ]
    }
  ]
})
