import Vue from 'vue';

import Home from '../components/Home.vue';

import CategoryList from '../components/pages/category/index.vue';
import CreateCategory from '../components/pages/category/create.vue';
import EditCategory from '../components/pages/category/edit.vue';

import ProductList from '../components/pages/product/index.vue';
import CreateProduct from '../components/pages/product/create.vue';
import EditProduct from '../components/pages/product/edit.vue';
import Dashboard from '../components/pages/dashboard.vue';



import Login from '../components/pages/auth/login.vue';
import Signup from '../components/pages/auth/signup.vue';

import EmailVerification from "../components/EmailVerification.vue";

import VueRouter from 'vue-router'
Vue.use(VueRouter)

const  routes = new VueRouter({
  mode: 'history',
  linkExactActiveClass:'active',
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
      ,

      {
        path:'/product',
        component:ProductList,
        name:'product',
        
        
      },

      {
        
        path: '/product/create',
        component: CreateProduct,
        name: 'create-product',
      }
      ,
      {
        
        path: '/product/edit/:id',
        component: EditProduct,
        name: 'edit-product',
      },
      
      {
        path: '/auth/login',
        component: Login,
        name: 'login',
        meta: { requiresVisitor: true }
        
    },
  
    {
      path: '/auth/signup',
      component: Signup,
      name: 'signup',
      meta: { requiresVisitor: true }
      
  },
  {
    path: '/dashboard',
    component: Dashboard,
    name: 'dashboard',
    meta: { requiresAuth: true }
  },

{
  path: '/test/*',
  name: 'email-verification',
  component: EmailVerification,
}
      
    ]
  })

 export default routes;