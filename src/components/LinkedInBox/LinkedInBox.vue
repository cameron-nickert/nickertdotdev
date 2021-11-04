<template>
  <div class="iframe_wrapper py-4">
    <div
      class="badge-base LI-profile-badge"
      data-locale="en_US"
      data-size="large"
      data-theme="light"
      data-type="HORIZONTAL"
      data-vanity="cameron-nickert"
      data-version="v1"
    ></div>
  </div>
</template>

<script>
//import "./Profile.js";

export default {
  name: "LinkedInBox",
  props: {
    msg: String,
  },
  created: function() {
    setTimeout(() => {
      this.injectScript();
    }, 1000);
  },
  methods: {
    injectScript: () => {
      let script = window.document.createElement("script");
      script.type = "text/javascript";
      script.async = true;
      script.defer = true;
      script.onload = function() {
        // remote script has loaded
      };
      script.src = "https://platform.linkedin.com/badges/js/profile.js";
      window.document.getElementsByTagName("body")[0].appendChild(script);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.iframe_wrapper {
  display: flex;
  justify-content: center;
  text-align: center;
}
</style>
