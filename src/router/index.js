import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/Home/HelloWorld'
import Me from '@/components/Me'
import Find from '@/components/Find'
import Order from '@/components/Order'

Vue.use(Router)

export default new Router({
  linkActiveClass:'active',
  routes: [
    {
      path: '/home',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/me',
      name: 'me',
      component: Me
    },
    {
      path:'/find',
      name:'find',
      component: Find
    },
    {
      path:'/order',
      name:'order',
      component: Order
    }
  ]
})
