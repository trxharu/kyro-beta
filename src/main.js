import Vue from "vue";
import firebase from "firebase";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

const config = {
  apiKey: "AIzaSyBSqn-cAjC1tZ8jmYlxs9axgpFu6t-PQjg",
  authDomain: "kyro-f3c7f.firebaseapp.com",
  databaseURL: "https://kyro-f3c7f.firebaseio.com",
  projectId: "kyro-f3c7f",
  storageBucket: "kyro-f3c7f.appspot.com",
  messagingSenderId: "1102882325",
  appId: "1:1102882325:web:a40fe5bb98384d36ec901c"
};

let app = "";
firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount("#app");
  }
});
