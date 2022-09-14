import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Contact from '../views/Contact.vue'
import About from '../views/AboutView.vue'
import Products from '../views/Products.vue'
import Details from '../views/Details.vue'
import Request from '../views/Request.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/Contact',
    name: 'Contact',
    component: Contact
  },

  {
    path: '/About',
    name: 'About',
    component: About
  },

  {
    path: '/Products',
    name: 'Products',
    component: Products
  },

  {
    path: '/Details',
    name: 'Details',
    component: Details
  },

  {
    path: '/Request',
    name: 'Request',
    component: Request
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
