<template>
  <div class="container my-2">
    <div class="row d-flex justify-content-center">
      <div class="col-6">
        <div class="card">
          <div
            class="card-header d-flex justify-content-between align-items-center"
          >
            <h5>Create Product</h5>
            
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-6">
                
                <form @submit.prevent="updateProduct" enctype="multipart/form-data">
                  <div class="form-group">
                    <label for="">Product Title</label>
                    <input
                      class="form-control"
                      v-model="form.title"
                      type="text"
                      name="title"
                      placeholder="title"
                    />
                    <div
                      v-if="form.errors.has('title')"
                      v-html="form.errors.get('title')"
                    />
                  </div>
                  <div class="form-group">
                    <label for="">Product Price</label>
                    <input
                      class="form-control"
                      v-model="form.price"
                      type="text"
                      name="price"
                      placeholder="price"
                    />
                    <div
                      v-if="form.errors.has('price')"
                      v-html="form.errors.get('price')"
                    />
                  </div>

                  <div class="row">
                    <div class="col-8">
                        <div class="form-group">
                          <label for="">Product Image</label>
                          <input
                            class="form-control-file"
                            type="file"
                            name="image"
                            placeholder="image"
                            @change="loadImageFromFile"
      
                           
                          />
                        </div>
                    </div>
                    <div class="col-4">
                        <div style="width: 100%; max-height: 150px; overflow:hidden">
                            <img :src="image" alt="" class="img-fluid">
                        </div>
                    </div>
                </div>
                
                  <div class="form-group">
                    <label for="">Product Description</label>

                    <textarea
                      class="form-control"
                      v-model="form.description"
                      type="text"
                      name="description"
                      placeholder="description"
                    ></textarea>
                    <div
                      v-if="form.errors.has('description')"
                      v-html="form.errors.get('description')"
                    />
                  </div>

                  <div class="form-group">
                    <button type="submit" class="btn btn-success mt-1">
                      Create Product
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
import Form from "vform";
export default {
  data() {
    return {
      form: new Form({
                title: '',
                price: '',
                image: '',
                description: '',
                _method: 'put',
        
       
      }),
      image:'',
      
    };
  },

  methods: {
    loadProduct() {
      let id = this.$route.params.id;
    
      axios.get(`/api/products/${id}/edit`).then(response => {
        let product = response.data;

                this.form.title = product.title;
                this.form.price = product.price;
                this.form.description = product.description;
                this.image = product.image;

                

      })



    },

    loadImageFromFile(ev) {
     
      const file = ev.target.files[0];
      const reader = new FileReader();

      reader.onload = e => {
        this.image = e.target.result;
        this.form.image =e.target.result;
        
        
      };
      reader.readAsDataURL(file);

    },
    updateProduct() {
      let id = this.$route.params.id;
      this.form.post(`/api/products/${id}`).then(response => {

        this.$toasted.show('Product Updated Successfully');
      });



    }
   



    
  },
  mounted(){
      this.loadProduct();
    }
};
</script>
  
  <style>
</style>