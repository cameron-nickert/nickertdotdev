<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <Hero />
    <mdb-container fluid class="elegant-color p-5">
      <div class="pink-text text-center m-auto code w-100">
        <h1 class="mb-5">Who I Am.</h1>
        <mdb-row class="text-center">
          <mdb-col col="sm" class="d-flex">
            <div class="pink-text text-center m-auto code">
              <h1 class="display-1 mb-0">
                <i class="fas fa-globe-americas"></i>
              </h1>
              <p>Travel.</p>
            </div>
          </mdb-col>
          <mdb-col col="sm" class="d-flex">
            <div class="pink-text text-center m-auto code">
              <h1 class="display-1 mb-0">
                <i class="fas fa-tree"></i>
              </h1>
              <p>Hiking.</p>
            </div>
          </mdb-col>
          <mdb-col col="sm" class="d-flex">
            <div class="pink-text text-center m-auto code">
              <h1 class="display-1 mb-0">
                <i class="fas fa-campground"></i>
              </h1>
              <p>Camping.</p>
            </div>
          </mdb-col>
          <mdb-col col="sm" class="d-flex">
            <div class="pink-text text-center m-auto code">
              <h1 class="display-1 mb-0">
                <i class="fas fa-anchor"></i>
              </h1>
              <p>Boating.</p>
            </div>
          </mdb-col>
          <mdb-col col="sm" class="d-flex">
            <div class="pink-text text-center m-auto code">
              <h1 class="display-1 mb-0">
                <i class="fas fa-basketball-ball"></i>
              </h1>
              <p>Sports.</p>
            </div>
          </mdb-col>
        </mdb-row>
      </div>
    </mdb-container>
    <mdb-container fluid class="cloudy-knoxville-gradient pb-3">
      <mdb-row>
        <mdb-col col="sm" class="pt-3">
          <h4 class="mt-3">Resume</h4>
          <Resume />
        </mdb-col>
        <mdb-col lg="5" xl="4">
          <div class="sticky-top py-5">
            <LinkedInBox />
          </div>
        </mdb-col>
      </mdb-row>
    </mdb-container>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import Hero from "@/components/Home/Hero.vue";
import LinkedInBox from "@/components/LinkedInBox/LinkedInBox";
import Footer from "@/components/Footer.vue";
import Resume from "@/components/Home/Resume";
import {
  mdbContainer,
  mdbRow,
  mdbCol,
  //mdbTooltip
} from "mdbvue";

export default {
  name: "home",
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    Hero,
    LinkedInBox,
    Footer,
    Resume,
  },
};
</script>

<style scoped lang="scss">
.home {
  height: 100%;
}
</style>
