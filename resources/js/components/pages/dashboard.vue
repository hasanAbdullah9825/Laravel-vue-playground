<template>
  <div class="container mt-5">
      <div class="row">
          <div class="col-4">
            <div class="list-group">
                <router-link :to="{ name: 'dashboard' }" class="list-group-item list-group-item-action">Dashboard</router-link>
                
                <a href="#" class="list-group-item list-group-item-action" @click.prevent="logout">Logout</a>
            </div>
          </div>
          <div class="col-8">
              <div class="card">
                    <div class="card-header">
                        Dashboard
                    </div>
                    <div class="card-body">
                        Welcome, {{  }}
                    </div>
                </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
methods:{
  logout(){
axios.post('/logout').then(response=>{
  this.$toasted.show("Logout successful");
});
  }
}
}
</script>

<style>

</style>