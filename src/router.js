import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Login from "./views/serviceAuth/login.vue";
import Create from "./views/serviceAuth/createaccount.vue";
import HomePage from "./views/homepage.vue";
import firebase from "firebase";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "*",
      redirect: "/"
    },
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/home",
      name: "homepage",
      component: HomePage,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/serviceAuth/login",
      name: "login",
      component: Login
    },
    {
      path: "/serviceAuth/create",
      name: "create",
      component: Create
    }
  ]
});

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if (requiresAuth && !currentUser) {
    next("/serviceAuth/login");
  } else if (!requiresAuth && currentUser) {
    next("home");
  } else {
    next();
  }
});

export default router;
