<template>
  <div id="header-home">
    <div class="left-nav">
      <button @click="onSidebar"></button>
    </div>
    <div class="main-logo">
      <img src="../assets/logo_b.svg" />
    </div>
    <div class="search">
      <input type="text" placeholder="Search for Peoples & Places..." />
    </div>
    <div class="right-nav">
      <button class="search-m"></button>
      <img :src="avatar" width="35" height="35" />
      <span class="user-text">
        <h4>{{username}}</h4>
        <button @click="signout">Logout</button>
      </span>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "HeaderHome",
  props: ["username", "avatar"],
  data() {
    return {
      sidebar: true
    };
  },
  methods: {
    signout() {
      firebase
        .auth()
        .signOut()
        .then(
          function() {
            this.$router.push("/serviceAuth/login");
          }.bind(this)
        )
        .catch(function(error) {
          console.log(error);
        });
    },
    onSidebar() {
      this.$emit("clicked");
    }
  }
};
</script>

<style lang="scss">
</style>