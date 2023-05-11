<template>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">
    <img src="logo.png" width="30" height="30" alt="Logo">
  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
         <router-link class="nav-link" :to="{ name: 'home' }">Home </router-link>
      </li>
      <li class="nav-item">
                <router-link class="nav-link" :to="{ name: 'category' }">Product Categories</router-link>
      </li>
    </ul>
  </div>
</nav>

   






</template>

<script>
export default {

}
</script>

<style>

</style>