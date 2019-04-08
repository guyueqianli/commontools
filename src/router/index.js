import Vue from 'vue'
import Router from 'vue-router'
import Unixtime from '../menus/Unixtime'
import Urlcode from '../menus/Urlcode'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/unixtime',
      name: 'unixtime',
      component: Unixtime
    },
    {
      path: '/urlcode',
      name: 'urlcode',
      component: Urlcode
    },
    {
      path: '/jsonformat',
      name: 'jsonformat',
      component: () => import('../menus/Jsonformat')
    }
  ]
})
