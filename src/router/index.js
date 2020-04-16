import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import('../views/home/Home')
const Cart = () => import('../views/cart/Cart')
const User = () => import('../views/user/User')
const Product = () => import('../views/product/Product')
const Login = () => import('../views/login/Login')
const OrderConfirm = () => import('../views/orderconfirm/OrderConfirm')
const AddressList = () => import('../views/addresslist/AddressList')
const AddressEdit = () => import('../views/addressedit/AddressEdit')


const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/addressedit',
      component: AddressEdit,
      name: 'AddressEdit'
    },
    {
      path: '/addresslist',
      component: AddressList,
      name: 'AddressList'
    },
    {
      path: '/orderconfirm',
      component: OrderConfirm,
      name: 'OrderConfirm'
    },
    {
      path: '/login',
      component: Login,
      name: 'Login'
    },
    {
      path: '/product',
      component: Product,
      name: 'Product'
    },
    {
      path: '/home',
      component: Home,
      name: 'Home'
    },
    {
      path: '/cart',
      component: Cart,
      name: 'Cart',
      meta: {
        auth: true
      }
    },
    {
      path: '/user',
      component: User,
      name: 'User'
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.auth) {
    if (sessionStorage.getItem('token')) {
      next();
    } else {
      next({
        path: '/login'
      })
    }
  } else {
    next()
  }
})

export default router
