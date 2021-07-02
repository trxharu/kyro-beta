<template>
  <div id="forms">
    <div class="head">
      <img src="../../assets/logo.svg" />
      <h2>Create Account</h2>
    </div>
    <transition>
      <span v-if="error.status" class="error">{{error.msg}}</span>
    </transition>
    <div class="form-inputs">
      <label>Email:</label>
      <input
        type="email"
        id="email"
        v-model="userdata.email"
        placeholder="Enter your email..."
        required
      />
      <label>Password:</label>
      <input
        type="password"
        id="password"
        v-model="userdata.password"
        placeholder="Enter your Password..."
        required
      />
      <label>Retype Password:</label>
      <input
        type="password"
        id="confirm_pass"
        v-model="userdata.pass_again"
        placeholder="Confirm your Password..."
        required
      />
    </div>
    <div class="sub-btn">
      <button v-on:click="createUser">Create</button>
      <p>or use</p>
      <ul>
        <!-- <li v-for="provider in auths" v-bind:key="provider.id">{{provider.name}}</li> -->
      </ul>
    </div>
    <p style="font-size: 0.9em;">
      Already have account,
      <router-link to="/serviceAuth/login" style="color:blue; ">Login here</router-link>
    </p>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "Create",
  created() {
    document.title = "Create a new Account";
  },
  data() {
    return {
      auths: [{ name: "Google", id: 0 }],
      error: { msg: "", status: false },
      userdata: { password: "", pass_again: "", email: "" }
    };
  },
  methods: {
    createUser() {
     if (this.userdata.email.length === 0) {
        this.error.msg = "Email must not be empty";
        this.error.status = true;
      } else if (this.userdata.password !== this.userdata.pass_again) {
        this.error.msg = "Passwords do not match";
        this.error.status = true;
      } else {
        this.error.status = false;
        firebase.auth().createUserWithEmailAndPassword(this.userdata.email, this.userdata.password).then(function(user){
          if (user) 
            this.$router.push('/home');
        }.bind(this))
        .catch(function(err) {
          this.error.msg = err.message;
          this.error.status = true;
        }.bind(this));
      }
    }
  }
};
</script>


<style lang="scss">
@import "../../stylesheets/form.scss";
</style>