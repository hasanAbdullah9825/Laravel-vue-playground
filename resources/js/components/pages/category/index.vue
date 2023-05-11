<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header d-flex justify-content-between">
                    
                    <div>
                    Product Categories
                    </div>
                       <div>
                       <router-link :to="{name:'create-category'}" class=" btn btn-primary">  Create Categories </router-link>
                  
                    </div>
                    
                    </div>
                    
                    

                    <div class="card-body table">
<table class="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Slug</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="category in categories" :key="category.id">
      <th scope="row">{{ category.id}}</th>
      <td>{{ category.name }}</td>
      <td>{{category.slug }}</td>
      <td><a href="">Edit</a> <a href="">Delete</a></td>
    </tr>
    
  </tbody>
</table>
                    </div>
                </div>
            </div>
        </div>


        <router-view></router-view>
    </div>
</template>

<script>
    export default {
      data() {
      return { 
      categories:[],
  
  }
    },

    methods:{
  getAllCategories(){
axios.get('/api/categories').then(response=>{

  this.categories= response.data;
})
  }
    },
        mounted() {
            this.getAllCategories();
        }
    }
</script>
