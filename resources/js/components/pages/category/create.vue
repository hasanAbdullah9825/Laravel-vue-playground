<template>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div
              class="card-header d-flex justify-content-between align-items-center"
            >
              <h5>Create Category</h5>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-6 offset-3">
                  <form @submit.prevent="submit">
                    <div class="form-group">
                      <label for="">Category name</label>
                      <!-- <input class="form-control" v-model="form.categoryName" type="text" name="name" placeholder="name">
      <div v-if="form.errors.has('name')" v-html="form.errors.get('name')" /> -->
  
  
      <input class="form-control" v-model="form.categoryName" type="text" name="categoryName" placeholder="categoryName">
      <div v-if="form.errors.has('categoryName')" v-html="form.errors.get('categoryName')" />
                   
  
  
  
                    </div>
                    <div class="form-group">
                      <button type="submit" class="btn btn-success">
                        Create Category
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
   import Form from 'vform';
  export default {
     
    data() {
      return { 
      form: new Form({
          categoryName: '',
        
      })
  
  };
    },
  
    methods: {
     submit() {

  
     this.form.post('/api/categories').then(response=>{

      this.$toasted.show('Category created');
      });
  
    
     
      },
    },
  };
  </script>
  
  <style>
  </style>