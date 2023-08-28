import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Open from '../views/Open';
import Login from '../views/Login';
import Home from '../views/HomeView';

const routes = [
  {
    path: '/',
    name: 'Open-user',
    component: Open
  },
  {
    path: '/login',
    name: 'Login-user',
    component: Login,
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
