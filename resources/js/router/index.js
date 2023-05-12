import Vue from 'vue';

import Home from '../components/Home.vue';

import CategoryList from '../components/pages/category/index.vue';
import CreateCategory from '../components/pages/category/create.vue';
import EditCategory from '../components/pages/category/edit.vue';
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
        
        path: '/category/create',
        component: CreateCategory,
        name: 'create-category',
      }
      ,
      {
        
        path: '/Category/edit/:id',
        component: EditCategory,
        name: 'edit-category',
      }
    ]
  })

 export default routes;