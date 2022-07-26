import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/login'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login/Login.vue')
  },{
    path: '/schedule',
    name: 'Schedule',
    component: () => import('@/views/Schedule/Schedule.vue')
  },
  {
    path: '/ipa',
    name: 'Ipa',
    component: () => import('@/views/Schedule/Ipa.vue')
  },
  {
    path: '/my',
    name: 'My',
    component: () => import('@/views/Login/My.vue')
  },{
    path: '/personnel',
    name: 'Personnel',
    component: () => import('@/views/Personnel/Personnel.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
