<template>
  <div :style="myStyle" class="min-vh-100">
    <b-container fluid align="center" class="pt-5">
      <b-row>
        <b-col cols="4">
          <b-list-group v-b-scrollspy:listgroup-ex>
            <b-list-group-item variant="black" lass="my-1" href="#list-item-1"
              >Steg 1</b-list-group-item
            >
            <b-list-group-item variant="black" class="my-1" href="#list-item-2"
              >Steg 2</b-list-group-item
            >
            <b-list-group-item variant="black" class="my-1" href="#list-item-3"
              >Steg 3</b-list-group-item
            >
          </b-list-group>
        </b-col>

        <b-col cols="8">
          <div
            id="listgroup-ex"
            style="position:relative; overflow-y:auto; height:300px"
          >
            <h4 class="mb-5" id="list-item-1">
              Välj vilket plagg som ska lagas/sys om
            </h4>
            <p>{{ text }}</p>
            <h4 class="my-5" id="list-item-2">Beskriv felet</h4>
            <p>{{ text }}</p>
            <h4 class="my-5" id="list-item-3">Fotografera plagget</h4>
            <p>{{ text }}</p>
          </div>
        </b-col>
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
      text: "Hallå",
    };
  },
  name: "Home",
  components: {},
};
</script>
