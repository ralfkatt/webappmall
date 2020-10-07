-<template>
  <b-navbar type="light" class="text-dark" variant="primary">
    <b-navbar-nav v-if="$api.state.user">
      <b-navbar-brand to="/home">{{ name }}</b-navbar-brand>
    </b-navbar-nav>

    <b-navbar-nav v-else>
      <b-navbar-brand :to="url">{{ name }}</b-navbar-brand>
    </b-navbar-nav>
    <b-navbar-nav class="ml-auto">
      <b-nav-item-dropdown v-if="$api.state.user" right no-caret>
        <!-- Using 'button-content' slot -->
        <template v-slot:button-content>
          <b-icon icon="person-fill"></b-icon>
        </template>
        <b-dropdown-item to="/about">Profil</b-dropdown-item>
        <b-dropdown-item to="home">Mina annonser</b-dropdown-item>
        <b-dropdown-item @click="$api.logout()">Logga ut</b-dropdown-item>
      </b-nav-item-dropdown>
      <b-nav-item-dropdown v-else right no-caret>
        <!-- Using 'button-content' slot -->
        <template v-slot:button-content>
          <b-icon icon="person-fill"></b-icon>
        </template>
        <b-dropdown-item to="/login">Logga in</b-dropdown-item>
        <b-dropdown-item to="signup">Sign up</b-dropdown-item>
      </b-nav-item-dropdown>

      <b-nav-item-dropdown
        v-on:show="hamburgershow = true"
        v-on:shown="hamburgershow = false"
        right
        variant="primary"
        no-caret
      >
        <!-- Using 'button-content' slot -->

        <template v-slot:button-content>
          <b-icon v-if="hamburgershow == true" rotate="90" icon="list"></b-icon>
          <b-icon v-else icon="list"></b-icon>
        </template>
        <b-dropdown-item to="/about">About page</b-dropdown-item>
        <b-dropdown-item href="#">Tjena</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {
  hamburgershow: false,
  name: "Navbar",
  props: ["name", "url", "user"],
};
</script>
