import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  {
    path: '/home',
    component: resolve => require(['views/home/View'], resolve),
    beforeEnter (to, from, next) { to.query._hackRoute ? next(to.query._hackRoute) : next() }
  },
  { path: '/vegetables', component: resolve => require(['views/vegetables/View'], resolve) },
  { path: '/search', component: resolve => require(['views/search/View'], resolve) },
  { path: '/info', component: resolve => require(['views/info/View'], resolve) },
  { path: '*', redirect: '/home' }
]

export default new Router({
  mode: 'history',
  base: '/view',
  scrollBehavior () { return {y: 0} },
  routes
})
