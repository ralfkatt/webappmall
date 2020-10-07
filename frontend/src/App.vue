<template>
  <div id="app">
    <navbar name="Mender" url="/"></navbar>
    <router-view />
  </div>
</template>

<style lang="scss">
// Import custom SASS variable overrides, or alternatively
// define your variable overrides here instead
@import "assets/custom-vars.scss";

// Import Bootstrap and BootstrapVue source SCSS files
@import "~bootstrap/scss/bootstrap.scss";
@import "~bootstrap-vue/src/index.scss";
</style>

<script>
import Navbar from "@/components/Navbar";
export default {
  components: {
    Navbar,
  },
  metaInfo: {
    title: "Start",
  },
};
</script>
