<template>

  <nav class="navbar navbar-expand-lg navbar-light bg-primary">
    <div class="container">

    <router-link class="navbar-brand text-light" :to="{name: 'home'}">Site Logo</router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
      <ul class="navbar-nav ">
        <li class="nav-item active">
           <router-link class="nav-link text-light" :to="{ name: 'home' }">Home </router-link>
        </li>
        <li class="nav-item">
                  <router-link class="nav-link text-light" :to="{ name: 'category' }">Product Categories</router-link>
        </li>

        <li class="nav-item">
          <router-link class="nav-link text-light" :to="{ name: 'product' }">Product List</router-link>
</li>
      </ul>
    </div>
 
    
  </div>
  </nav>



   






</template>

<script>
export default {

}
</script>

<style>

</style>