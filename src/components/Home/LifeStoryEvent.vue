<template>
  <div class="row d-flex my-0 py-0">
    <div
      class="col-md-4 animated ml-auto border-right border-light d-flex my-0 py-0"
      v-animateOnScroll="{ animation: 'fadeIn', delay: 0 }"
    >
      <h2 class="m-auto">{{ year }}</h2>
    </div>
    <div
      class="col-md-4 text-white animated mr-auto my-0 py-0"
      v-animateOnScroll="{ animation: 'fadeInRight', delay: 0 }"
    >
      <h3 class="h5">{{ title }}</h3>
      <p>
        {{ desc }}<br /><em>{{ note }}</em>
      </p>
    </div>
  </div>
</template>

<script>
import { animateOnScroll } from "mdbvue";

export default {
  name: "LifeStoryEvent",
  props: {
    year: String,
    title: String,
    desc: String,
    note: String,
    right: Boolean,
  },
  components: {},
  directives: {
    animateOnScroll,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped></style>
