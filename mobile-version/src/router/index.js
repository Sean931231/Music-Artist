import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/artist',
    name: 'Artist',
    component: () => import(/* webpackChunkName: "artist" */ '../views/Artist.vue'),
    props: true
  },
  {
    path: '/discography',
    name: 'Discography',
    component: () => import(/* webpackChunkName: "discography" */'../views/Discography.vue'),
  }
]

const router = new VueRouter({
  routes
})

export default router
