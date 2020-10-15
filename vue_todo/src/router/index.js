import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import UserInfo from '@/components/UserInfo'
import Release from '@/components/Release'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Release',
      component: Release
    }
  ]
})
