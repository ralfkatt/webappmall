<template>
  <div>
    <b-container class="my-4">
      <!-- Dev login -->
      <b-row align-h="center">
        <b-col lg="6">
          <b-form @submit.prevent="login" class="py-4">
            <h1>Login</h1>
            <b-form-group label="email">
              <b-form-input type="text" v-model="form.email" required />
            </b-form-group>
            <b-form-group label="password">
              <b-form-input type="text" v-model="form.password" required />
            </b-form-group>
            <b-button block variant="primary" type="submit">Logga in</b-button>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Home",
  data: function() {
    return {
      form: {
        email: null,
        password: null,
      },
    };
  },
  methods: {
    login: async function() {
      await this.$api.login(this.form);
      var redirect = window.sessionStorage.getItem("user");
      if (!redirect) redirect = "/login";
      this.$router.replace("/home");
    },
  },
};
</script>
