<template>
  <div class="container">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="username">Email:</label>
        <input
          type="email"
          class="form-control"
          id="email"
          placeholder="Enter your email"
          v-model="loginForm.email"
          name="email"
        />
        <div
                      v-if="loginForm.errors.has('email')"
                      v-html="loginForm.errors.get('email')"
                    />
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input
          type="password"
          class="form-control"
          id="password"
          name="password"
          v-model="loginForm.password"
          placeholder="Enter your password"
        />
        <div
                      v-if="loginForm.errors.has('password')"
                      v-html="loginForm.errors.get('password')"
                    />
      </div>
      <button type="submit" class="btn btn-primary">Login</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import Form from "vform";

export default {
    data(){
        return{
loginForm: new Form({

    email:'',
    password:'',
})
    

        }
    },
    methods:{
      async login() {
      
       await this.loginForm.post("/login");
       await this.$store.dispatch("fetchUser");
       this.$router.push({name:'dashboard'});
            

   },
    }
  
  
  }


</script>

<style>
</style>