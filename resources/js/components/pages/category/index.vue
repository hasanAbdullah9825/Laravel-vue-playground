<template>
    <div class="container ">
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
    <tr v-for="category in getallCategory" :key="category.id">
      <th scope="row">{{ category.id}}</th>
      <td>{{ category.name }}</td>
      <td>{{category.slug }}</td>
      <td><router-link :to="{name:'edit-category',params:{id:category.id}}">Edit</router-link> <a href=""  @click.prevent="deleteCategory(category.id)">Delete</a></td>
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
      deleteCategory(id){
axios.delete(`/api/categories/${id}`).then(response=>{

  this.$toasted.show('Category Deleted Successfully');
  this.$store.dispatch("fetchAllCategory");
});
      }
    },
        mounted() {


            this.$store.dispatch("fetchAllCategory");
        },
        computed:{
          getallCategory(){
            return this.$store.getters.AllCategory;
           }
        }
    }
</script>
