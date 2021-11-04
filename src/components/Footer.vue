<template>
  <mdb-footer color="elegant-color" class="font-small pt-4 code" style="margin: 0px !important;">
    <mdb-container style="padding: .5em;">
      <span>You Need Software. I Make Software. Let's Talk!</span>
      <div class="mt-2 mb-2 code">
        <a href="mailto:cameron@nickert.dev" class="pink-text mt-2 ml-2 mr-2 d-inline-flex">
          <i class="fas fa-envelope mr-1"></i>cameron@nickert.dev
        </a>
        <a
          href="https://www.linkedin.com/in/cameron-nickert/"
          target="_blank"
          class="pink-text mt-2 ml-2 mr-2 d-inline-flex"
        >
          <i class="fab fa-linkedin mr-1"></i>cameron-nickert
        </a>
      </div>
    </mdb-container>
    <div class="footer-copyright text-center py-3">
      <mdb-container fluid>&copy; {{getCurrentYear}} Copyright - Cameron Nickert</mdb-container>
    </div>
  </mdb-footer>
</template>

<script>
import { mdbFooter, mdbContainer } from "mdbvue";
export default {
  name: "Footer",
  components: {
    mdbFooter,
    mdbContainer
  },
  computed: {
    getCurrentYear: function() {
      let dt = new Date();
      return dt.getFullYear();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
</style>
