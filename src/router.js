import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'
import Page403 from '@/views/Page403'

const Applications = () => import(/* webpackChunkName: "applications"*/ '@/views/Applications')
const Raspberries = () => import(/* webpackChunkName: "raspberries"*/ '@/views/Raspberries')

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/application',
      name: 'Applications',
      component: Applications,
      beforeResolve: (to, from, next) => {
        if (!store.getters['CommonStore/isAdminApplication']) {
          next('Raspberrypi')
        } else {
          next()
        }
      }
    },
    {
      path: '/raspberrypi',
      name: 'Raspberry',
      component: Raspberries,
      beforeResolve: (to, from, next) => {
        if (!store.getters['CommonStore/isAdminRaspberry']) {
          next('Raspberrypi')
        } else {
          next()
        }
      }
    },
    {
      path: '/Page403',
      name: 'Page403',
      component: Page403
    },
    {
      path: '*',
      redirect: '/raspberrypi'
    }
  ]
})

export default router
