<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-header d-flex justify-content-between align-items-center">
            <h5>Edit Category</h5>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-6 offset-3">
                <form @submit.prevent="updateCategory">
                  <div class="form-group">
                    <label for="">Category name</label>

                    <input class="form-control" v-model="form.categoryName" type="text" name="categoryName"
                      placeholder="categoryName" />
                    <div v-if="form.errors.has('categoryName')" v-html="form.errors.get('categoryName')" />
                  </div>
                  <div class="form-group">
                    <button type="submit" class="btn btn-success">
                      Edit Category
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
        categoryName: "",
      }),

    };
  },

  methods: {
    loadCategory() {
      let id = this.$route.params.id;
      axios.get(`/api/categories/${id}/edit`).then(response => {
        this.form.categoryName = response.data.name;

      })



    },

    updateCategory() {
      let id = this.$route.params.id;
      this.form.put(`/api/categories/${id}`).then(response => {

        this.$toasted.show('Category Updated Successfully');
      });



    }
  },

  mounted() {
    this.loadCategory();
  }
};
</script>
  
<style></style>