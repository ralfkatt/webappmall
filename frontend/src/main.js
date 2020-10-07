import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import api from "./plugins/api";
import { BootstrapVue } from "bootstrap-vue";

Vue.config.productionTip = false;

Vue.use(api);
Vue.use(BootstrapVue);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
