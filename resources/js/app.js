/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
import Vue from 'vue';
import Vuex from 'vuex';
import routes from './router/index.js';
import Toasted from 'vue-toasted';
import storeData from "./store/index";

require('./bootstrap');

//window.Vue = require('vue').default;



/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('app-header', require('./components/Header.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.use(Vuex);
const store = new Vuex.Store(
  storeData
)
Vue.use(Toasted, {
  position: 'top-right',
  duration: 3000 // set the duration of the notification
});

let auth = localStorage.getItem("auth");


function isLoggedIn() {
  return store.getters.getAuthenticated;
}



routes.beforeEach((to, from, next) => {
  console.log(store.getters.getAuthenticated);

  if (to.matched.some(record => record.meta.requiresAuth)) {
    console.log("hii from requiresAuth");
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!isLoggedIn()) {
      console.log("not logged in");
      next({
        name: 'login',
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresVisitor)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.

    console.log("hii from requiresVisitor");
    if (isLoggedIn()) {
      next({
        name: 'dashboard',
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})





if (auth === 'true') {
  //console.log(auth);
  store.dispatch('authUser').then(response => {
    const app = new Vue({
      el: '#app',
      router: routes,
      store
    });



  });
}

else {
  const app = new Vue({
    el: '#app',
    router: routes,
    store
  });

}



