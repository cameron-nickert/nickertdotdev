<template>
  <div class="life-story">
    <div class="custom-control custom-switch sticky-top elegant-color p-2 mb-3">
      <input
        type="checkbox"
        class="custom-control-input"
        id="customSwitches"
        checked
      />
      <label class="custom-control-label" for="customSwitches"
        >Professional Only</label
      >
    </div>
    <LifeStoryEvent
      year="2010"
      title="MySpace Layouts"
      desc="Created myspace layouts for friends and family"
      note="html/css"
    />
    <LifeStoryEvent
      year="2010"
      title="First Website"
      desc="With the help of a tech savy family member, I launch my first website that hosted my portfolio of MySpace layouts."
      note="html/css"
    />

    <LifeStoryEvent
      year="2012"
      title="Robox games"
      desc="Created game on Roblox gaming platform for fun and earned 250,000+ visits"
      note="lua"
    />

    <LifeStoryEvent
      year="2013"
      title="Robotics"
      desc="Joined my highschool robotics team and programed the robot"
      note="java"
    />

        <LifeStoryEvent
      year="2014"
      title="Undergrad"
      desc="Enrolled at Central Michigan Univeristy for B.S. Computer Science. Minors in IT & Mathematics."
      note="java"
    />
  </div>
</template>

<script>
import { animateOnScroll } from "mdbvue";
import LifeStoryEvent from "./LifeStoryEvent.vue";

export default {
  name: "Resume",
  components: { LifeStoryEvent },
  directives: {
    animateOnScroll,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped></style>
