import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import { setTitle } from '../lib/util'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    alias: '/home_page',
    component: Home,
    props: route => ({
      food: route.query.food
    }),
    beforeEnter: (to, from, next) => {
      if (from.name === 'about') {
        console.log('这里是从about页面来的')
      } else {
        next()
      }
      next()
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    props: {
      food: 'banana'
    },
    meta: {
      title: '关于'
    }
  },
  {
    path: '/argu/:name',
    component: () => import('../views/argu.vue'),
    props: true
  },
  {
    path: '/parent',
    component: () => import('../views/parent.vue'),
    children: [
      {
        path: 'child',
        component: () => import('../views/child.vue')
      }
    ]
  },
  {
    path: '/named_view',
    components: {
      default: () => import('../views/child.vue'),
      email: () => import('../views/email.vue'),
      tel: () => import('../views/tel.vue')
    }
  },
  {
    path: '/main',
    redirect: {
      name: 'home'
    }
  },
  {
    path: '/store',
    component: () => import('../views/store.vue')
  }
]

const router = new VueRouter({
  routes
})

const HAS_LOGINED = true
router.beforeEach((to, form, next) => {
  to.meta && setTitle(to.meta.title)
  if (to.name !== 'login') {
    if (HAS_LOGINED) {
      next()
    } else {
      next({ name: 'login' })
    }
  } else {
    if (HAS_LOGINED) {
      next({ name: 'home' })
    } else {
      next()
    }
  }
})

router.afterEach((to, form) => {})

export default router
