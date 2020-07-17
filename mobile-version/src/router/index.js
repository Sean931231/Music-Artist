import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/artist',
    name: 'Artist',
    component: () => import(/* webpackChunkName: "artist" */ '../views/Artist.vue')
  },
  {
    path: '/discography',
    name: 'Discography',
    component: () => import(/* webpackChunkName: "discography" */'../views/Discography.vue'),
    props: true
  },
  {
    path: '/prop',
    name: 'Prop',
    component: () => import(/* webpackChunkName: "Prop" */'../views/Props.vue'),
    props: true
  }
]

const router = new VueRouter({
  routes
})

export default router
