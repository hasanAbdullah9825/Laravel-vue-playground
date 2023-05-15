<template>
    <div class="container ">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header d-flex justify-content-between">
                    
                    <div>
                    Product List
                    </div>
                       <div>
                       <router-link :to="{name:'create-product'}" class=" btn btn-primary">  Create product </router-link>
                  
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
    <tr v-for="product in getallproduct" :key="product.id">
      <th scope="row">{{ product.id}}</th>
      <td>{{ product.name }}</td>
      <td>{{product.slug }}</td>
      <td><router-link :to="{name:'edit-product',params:{id:product.id}}">Edit</router-link> <a href=""  @click.prevent="deleteproduct(product.id)">Delete</a></td>
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
      products:[],
  
  }
    },

    methods:{
      deleteProduct(id){
// axios.delete(`/api/products/${id}`).then(response=>{

//   this.$toasted.show('Product Deleted Successfully');
//   this.$store.dispatch("fetchAllProduct");
// });
      }
    },
        mounted() {


            //this.$store.dispatch("fetchAllProduct");
        },
        computed:{
          getallProduct(){
            //return this.$store.getters.AllProduct;
           }
        }
    }
</script>
