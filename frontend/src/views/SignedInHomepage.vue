<template>
  <div>
    <b-container class="my-4">
      <!-- Dev login -->
      <b-container>
        <h1 align="center">Välkommen {{ username }}</h1>
        <b-row align-h="center">
          <b-button
            type="button"
            variant="success"
            size="lg"
            @click="$router.push('/listing')"
          >
            Skapa en annons ;-)
          </b-button>
        </b-row>
      </b-container>
      <b-col aligh-h="center">
        <div v-for="listing in mendListing" :key="listing._id">
          <b-card :title="listing.title" class="my-4">
            <b-card-text>
              {{ listing.desc }}
            </b-card-text>

            <b-button href="#" variant="primary">Go somewhere</b-button>
          </b-card>
        </div>
      </b-col>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  created: async function() {
    var user = this.$api.state.user.name;
    var mendListing = await this.$api.request("GET", "/listing");
    console.log("---");
    console.log(user);
    console.log("---");
    console.log(mendListing);
    this.username = user;
    this.mendListing = mendListing;
  },
  data: function() {
    return {
      username: null,
      mendListing: null,
      selected: 0,
    };
  },
};
</script>
