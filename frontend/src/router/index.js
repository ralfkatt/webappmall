import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Login from "../views/Login.vue";
import Signup from "../views/Signup.vue";
import SignedIn from "../views/SignedInHomepage.vue";
import MendListing from "../views/MendListing.vue";
import HowItWorks from "../views/HowItWorks.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/home",
    name: "SingedInHome",
    component: SignedIn,
  },
  {
    path: "/listing",
    name: "MendListing",
    component: MendListing,
  },
  {
    path: "/howitworks",
    name: "HowItWorks",
    component: HowItWorks,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
