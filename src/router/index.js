import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import AndroidPrivacy from '../components/AndroidPrivacy'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/post/:num',
      name: 'Post',
      component: Home
    },
    {
      path: '/android-privacy-policy',
      name: 'AndroidPrivacy',
      component: AndroidPrivacy
    }
  ]
})
