import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Info from '../views/ArtistInfo.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      breadcrumb: [
        { text: 'Home' }
      ]
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    meta: {
      breadcrumb: [
        { text: 'Home', href: '/' },
        { text: 'About',  disabled: true, }
      ]
    }
  },
  {
    path: '/artist',
    name: 'Artist',
    component: function () {
      return import(/* webpackChunkName: "artist" */ '../views/Artist.vue')
    },
    meta: {
      breadcrumb: [
        { text: 'Home', href: '/' },
        { text: 'Artist',  disabled: true, }
      ]
    },
  },
  {
    path: '/artistinfo',
    name: 'Artist_Info',
    component: Info,
    meta: {
      breadcrumb: [
        { text: 'Home', href: '/' },
        { text: 'Artist', href: '/artist' },
        { text: 'Info', disabled: true, }
      ]
    }
  },
  {
    path: '/discography',
    name: 'Discography',
    component: function () {
      return import(/* webpackChunkName: "discography" */ '../views/Discography.vue')
    },
    meta: {
      breadcrumb: [
        { text: 'Home', href: '/' },
        { text: 'Discography',  disabled: true, }
      ]
    }
  },
]

const router = new VueRouter({
  routes
})

/*
* 修改首页面路由重复点击报错
*/
const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}

export default router
