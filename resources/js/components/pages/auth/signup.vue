<template>
  <div class="container">
    <h2>Signup</h2>
    <form @submit.prevent="signup">
      <div class="form-group">
        <label for="name">Name:</label>
        <input
          type="text"
          class="form-control"
          id="name"
          placeholder="Enter your name"
          v-model="signupForm.name"
          name="name"
        />
        <div
          v-if="signupForm.errors.has('email')"
          v-html="signupForm.errors.get('email')"
        />
      </div>
      <div class="form-group">
        <label for="username">Email:</label>
        <input
          type="email"
          class="form-control"
          id="email"
          placeholder="Enter your email"
          v-model="signupForm.email"
          name="email"
        />
        <div
          v-if="signupForm.errors.has('email')"
          v-html="signupForm.errors.get('email')"
        />
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input
          type="password"
          class="form-control"
          id="password"
          name="password"
          v-model="signupForm.password"
          placeholder="Enter your password"
        />
        <div
          v-if="signupForm.errors.has('password')"
          v-html="signupForm.errors.get('password')"
        />
      </div>

      <div class="form-group">
        <label for="password">Password:</label>
        <input
          type="password"
          class="form-control"
          id="confirm_password"
          name="password_confirmation"
          v-model="signupForm.password_confirmation"
          placeholder="Confirm your password"
        />
        <div
          v-if="signupForm.errors.has('password_confirmation')"
          v-html="signupForm.errors.get('password_confirmation')"
        />
      </div>
      <button type="submit" class="btn btn-primary">Signup</button>
    </form>
  </div>
</template>
  
  <script>
import axios from "axios";
import Form from "vform";

export default {
  data() {
    return {
      signupForm: new Form({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
      }),
    };
  },
  methods: {
    async signup() {
      await axios.get("/sanctum/csrf-cookie");
      await this.signupForm.post("/register");
      await this.$store.dispatch("fetchUser");
      this.$router.push({ name: "dashboard" });
    },
  },
};
</script>
  
  <style>
</style>