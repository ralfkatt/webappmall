<template>
  <div>
    <b-container class="my-4">
      <!-- Dev login -->
      <b-row align-h="center">
        <b-col lg="6">
          <b-form @submit.prevent="createListing" class="py-4">
            <h1>Skapa ett konto :)</h1>
            <b-form-group label="title">
              <b-form-input type="text" v-model="form.title" required />
            </b-form-group>
            <b-form-group label="desc">
              <b-form-input type="text" v-model="form.desc" required />
            </b-form-group>

            <b-button block variant="primary" type="submit"
              >Skapa annons</b-button
            >
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
        title: "Ge din annons en bra titel :)",
        desc: "Närmare beskrivning",
      },
    };
  },
  methods: {
    createListing: async function() {
      await this.$api.createMendListing(this.form);
      var redirect = window.sessionStorage.getItem("user");
      if (!redirect) redirect = "/login";
      this.$router.replace("/home");
    },
  },
};
</script>
