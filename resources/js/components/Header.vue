<template>

  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container">

    <router-link class="navbar-brand text-light" :to="{name: 'home'}" exact>Site Logo</router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
      <ul class="navbar-nav ">
        <li class="nav-item active">
           <router-link class="nav-link " :to="{ name: 'home' }" exact>Home </router-link>
        </li>
        <li class="nav-item">
                  <router-link class="nav-link " :to="{ name: 'category' }" exact>Product Categories</router-link>
        </li>

        <li class="nav-item">
          <router-link class="nav-link " :to="{ name: 'product' }" exact>Product List</router-link>
</li>
<li class="nav-item" v-if="auth">
  <router-link class="nav-link " :to="{ name: 'dashboard' }" exact>Dashboard</router-link>
</li>
<li class="nav-item" v-if="!auth">
  <router-link class="nav-link " :to="{ name: 'login' }" exact>Login</router-link>
</li>
<li class="nav-item">
  <a class="nav-link " @click.prevent="logout" >Logout</a>
</li>
      </ul>
    </div>
 
    
  </div>
  </nav>



   






</template>

<script>
import axios from "axios";
export default {

methods:{
logout(){
axios.post('/logout').then(response=>{
  this.$toasted.show("Logout successful");
  localStorage.setItem("auth", false);
});
  }
},
computed: {
        auth(){
            return this.$store.getters.getAuthenticated;
        }
    }
}
</script>

<style>

a {
  cursor: default;
}

</style>