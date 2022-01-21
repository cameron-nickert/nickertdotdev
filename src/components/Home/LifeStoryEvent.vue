<template>
  <div class="row d-flex my-0 py-0" v-if="!hidePersonal">
    <div
      class="col-md-2 animated ml-auto border-right border-light d-flex my-0 py-0"
      v-animateOnScroll="{ animation: 'fadeInDown', delay: 100, position: 12 }"
    >
      <h2 class="h3 m-auto">{{ year }}</h2>
    </div>
    <div
      class="col-md-4 animated mr-auto my-0 py-0"
      v-animateOnScroll="{ animation: 'fadeInRight', delay: 100, position: 12 }"
    >
      <h3 class="h5 pink-text">{{ title }}</h3>
      <p class="text-white">
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
    hidePersonal: Boolean,
  },
  components: {},
  directives: {
    animateOnScroll,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
p {
  font-family: "Roboto", Helvetica, Arial, sans-serif;
  em {
    font-family: "Courier Prime Code";
  }
}

.row {
  overflow: hidden;
}
</style>
