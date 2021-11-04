<template>
  <div class="resume">
    <mdb-card class="mt-3">
      <mdb-card-body class="p-0">
        <div class="iframe_wrapper shadow">
          <iframe
            src="https://drive.google.com/file/d/1SnfmDmprQQHFUoLMgspcm8p5xYOZEq5I/preview"
            width="100%"
            height="100%"
            allow="autoplay"
            allowtransparency="true"
            frameborder="0"
          ></iframe>
        </div>
      </mdb-card-body>
    </mdb-card>
  </div>
</template>

<script>
import { mdbCard, mdbCardBody } from "mdbvue";
export default {
  name: "Resume",
  components: {
    mdbCard,
    mdbCardBody,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.iframe_wrapper {
  position: relative;
  width: 100%;
  padding-bottom: #{"min(1060px, 129.411765%)"};
  margin: 0px;
}

iframe {
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
