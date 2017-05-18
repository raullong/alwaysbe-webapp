import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  {
    path: '/home',
    component: resolve => require(['views/home/View'], resolve),
    beforeEnter (to, from, next) { to.query._hackRoute ? next(to.query._hackRoute) : next() }
  },
  {path: '*', redirect: '/home'}
]

export default new Router({
  mode: 'history',
  base: '/view',
  scrollBehavior () { return {y: 0} },
  routes
})
