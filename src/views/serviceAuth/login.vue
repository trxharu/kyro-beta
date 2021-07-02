<template>
  <div id="forms">
    <div class="head">
      <img src="../../assets/logo.svg" />
      <h2>Login Account</h2>
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
    </div>
    <div class="sub-btn">
      <button v-on:click="loginUser">Login</button>
      <p>or use</p>
      <ul>
        <!-- <li v-for="provider in auths" v-bind:key="provider.id">{{provider.name}}</li> -->
      </ul>
    </div>
    <p style="font-size: 0.9em;">
      Don't have account,
      <router-link to="/serviceAuth/create" style="color:blue;">Create one here</router-link>
    </p>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "Login",
  data() {
    return {
      auths: [{ name: "Google", id: 0 }],
      error: { msg: "", status: false },
      userdata: { email: "", password: "" }
    };
  },
  methods: {
    loginUser() {
      if (
        this.userdata.email.length === 0 ||
        this.userdata.password.length === 0
      ) {
        this.error.status = true;
        this.error.msg = "Please enter the required Fields";
      } else {
        firebase
          .auth()
          .signInWithEmailAndPassword(
            this.userdata.email,
            this.userdata.password
          )
          .then(
            function(user) {
              if (user)
                this.$router.push('/home');
            }.bind(this))
            .catch(function(err) {
              if (err) {
                this.error.msg = "Username & Password is Incorrect";
                this.error.status = true;
              }
            }.bind(this));
      }
    }
  }
};
</script>


<style lang="scss">
#forms {
  a {
    display: inline;
  }
}
</style>