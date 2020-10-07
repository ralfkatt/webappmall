<template>
  <div :style="myStyle" class="min-vh-100">
    <b-container class="pb-5">
      <h1 class="text-white" align="center">
        Har du kläder som behöver lagas?
      </h1>
      <b-row align-h="center">
        <b-button
          type="button"
          variant="success"
          size="lg"
          @click="$router.push('/howitworks')"
        >
          Kom igång
        </b-button>
      </b-row>
    </b-container>

    <b-container class="my-5">
      <h2 class="text-white" align="center">Kan du sy?</h2>
      <b-row align-h="center">
        <b-button
          type="button"
          variant="success"
          size="lg"
          @click="$router.push('/howitworks')"
        >
          Bli en mender
        </b-button>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  data() {
    return {
      myStyle: {
        backgroundColor: "#ade498",
      },
    };
  },
  name: "Home",
  components: {},
};
</script>
