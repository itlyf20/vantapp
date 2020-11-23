import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: () =>import('../views/Home.vue'),
	meta: {TabbarShow: true}
  },
  {
    path: '/mine',
    name: 'Mine',
    component: () => import('../views/Mine.vue'),
	meta: {TabbarShow: true}
  },
  {
    path: '/shop',
    name: 'Shop',
    component: () => import('../views/Shop.vue'),
	meta: {TabbarShow: true}
  },
  {
    path: '/shopbuy',
    name: 'ShopBuy',
    component: () => import('../components/ShopBuy.vue'),
	meta: {TabbarShow: false}
  },
  {
    path: '/logistics',
    name: 'Logistics',
    component: () => import('../components/Logistics.vue'),
	meta: {TabbarShow: false}
  },
  {
    path: '/video',
    name: 'Video',
    component: () => import('../components/Video.vue'),
	meta: {TabbarShow: false}
  },
  {
    path: '/image',
    name: 'Image',
    component: () => import('../components/Image.vue'),
	meta: {TabbarShow: false}
  },
  {
    path: '/feeback',
    name: 'Feeback',
    component: () => import('../components/Feeback.vue'),
	meta: {TabbarShow: false}
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../components/Contact.vue'),
	meta: {TabbarShow: false}
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
  	meta: {TabbarShow: false}
  },
  {
    path: '/',
    redirect:'/login'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
