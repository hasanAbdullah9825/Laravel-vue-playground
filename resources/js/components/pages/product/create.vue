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
                <form @submit.prevent="submit">
                  <div class="form-group">
                    <label for="">Product Title</label>
                    <input
                      class="form-control"
                      v-model="form.productTitle"
                      type="text"
                      name="productTitle"
                      placeholder="productTitle"
                    />
                    <div
                      v-if="form.errors.has('productTitle')"
                      v-html="form.errors.get('productTitle')"
                    />
                  </div>
                  <div class="form-group">
                    <label for="">Product Price</label>
                    <input
                      class="form-control"
                      v-model="form.productPrice"
                      type="text"
                      name="productPrice"
                      placeholder="productPrice"
                    />
                    <div
                      v-if="form.errors.has('productPrice')"
                      v-html="form.errors.get('productPrice')"
                    />
                  </div>
                  <div class="form-group">
                    <label for="">Product Image</label>
                    <input
                      class="form-control-file"
                      type="file"
                      name="productImage"
                      placeholder="productImage"
                    />
                    <div
                      v-if="form.errors.has('productImage')"
                      v-html="form.errors.get('productImage')"
                    />
                  </div>
                  <div class="form-group">
                    <label for="">Product Description</label>

                    <textarea
                      class="form-control"
                      v-model="form.productDescription"
                      type="text"
                      name="productDescription"
                      placeholder="productDescription"
                    ></textarea>
                    <div
                      v-if="form.errors.has('productDescription')"
                      v-html="form.errors.get('productDescription')"
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
        productTitle: "",
        productPrice: "",
        productDescription: "",
        productImage: "",
      }),
    };
  },

  methods: {
    submit() {
       this.form.post('/api/products').then(response=>{
        this.$toasted.show('product created');
        });
    },
  },
};
</script>
  
  <style>
</style>