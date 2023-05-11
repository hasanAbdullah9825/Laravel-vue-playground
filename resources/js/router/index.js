import Vue from 'vue';

import Home from '../components/Home.vue';
import CategoryList from '../components/pages/category/index.vue';
import CreateCategory from '../components/pages/category/create.vue';
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const  routes = new VueRouter({
  mode: 'history',
    routes: [
      // dynamic segments start with a colon
      
      {
        path:'/',
        component:Home,
        name:'home'
      },
      {
        path:'/category',
        component:CategoryList,
        name:'category',
        
        
      },

      {
        
        path: '/createCategory',
        component: CreateCategory,
        name: 'create-category',
      }
    ]
  })

 export default routes;