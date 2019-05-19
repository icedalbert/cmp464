import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import 'materialize-css'
import 'materialize-css/dist/css/materialize.css'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
