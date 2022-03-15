<template>
  <div class="life-story">
    <div class="custom-control custom-switch sticky-top elegant-color p-2 mb-3">
      <input
        type="checkbox"
        class="custom-control-input"
        id="customSwitches"
        v-model="checked"
      />
      <label class="custom-control-label text-white" for="customSwitches"
        >Professional Only</label
      >
    </div>
    <LifeStoryEvent
      year="2008"
      title="MySpace Layouts"
      desc="Created myspace layouts for friends and family"
      note="HTML & CSS"
    />
    <LifeStoryEvent
      year="2009"
      title="First Website"
      desc="I launch my first website that hosted my portfolio of MySpace layouts called fusionlayouts.com"
      note="HTML & CSS"
    />

    <LifeStoryEvent
      year="2012"
      title="Roblox games"
      desc="Created games on Roblox gaming platform and earned 250,000+ visits"
      note="Lua"
    />

    <LifeStoryEvent
      year="2013 & 2014"
      title="Robotics"
      desc="Member of high-school robotics team and in charge of programming the robot"
      note="LabView"
    />

    <LifeStoryEvent
      year="2013"
      title="First Job"
      desc="Worked full time as summer janitorial help at local factory"
      note=""
    />

    <LifeStoryEvent
      year="2013 - 2016"
      title="Local Restaruant"
      desc="Was a dishwasher, then host, and then a cook at a local restaurant"
      note=""
    />

    <LifeStoryEvent
      year="2014"
      title="Track & Field MVP"
      desc="Long jump, high jump, 4x100 relay"
      note=""
      v-bind:hidePersonal="checked"
    />

    <LifeStoryEvent
      year="2014"
      title="Graduated High School"
      desc="Johannesburg-Lewiston High School"
      note=""
    />

    <LifeStoryEvent
      year="2014 - 2018"
      title="Undergrad"
      desc="Enrolled at Central Michigan Univeristy"
      note="Java, SQL, JavaScript, Android, Python, C#, Ruby, C++, HTML, CSS, ASPT.NET"
    />

    <LifeStoryEvent
      year="2015 & 2016"
      title="Robotics Mentor"
      desc="Taught high-school kids how to program and wire the robot"
      note="Java"
    />

    <LifeStoryEvent
      year="2016"
      title="Europe Trip"
      desc="Travelled to Austria, Czech Republic, and Poland"
      note=""
      v-bind:hidePersonal="checked"
    />

    <LifeStoryEvent
      year="2017"
      title="Internship"
      desc="Software development internship at Gordon Food Service"
      note="Java, SpringBoot, JavaScript, Angular.JS, Bootstrap, HTML, CSS, Android"
    />

    <LifeStoryEvent
      year="2018"
      title="New Puppy Titus"
      desc="A cute fluffball joined"
      note=""
      v-bind:hidePersonal="checked"
    />

    <LifeStoryEvent
      year="2018"
      title="Graduated College"
      desc="Bachelors of Science in Computer Science"
      note="Minors in Information Technology & Mathematics"
    />

    <LifeStoryEvent
      year="2018"
      title="Ford College Graduate"
      desc="Started a college graduate rotational program at Ford as an entry level software engineer"
      note="Java, SpringBoot, JavaScript, React, GitHub, Jenkins, PCF"
    />

    <LifeStoryEvent
      year="2018"
      title="First House"
      desc="Bought a house near my job"
      note=""
      v-bind:hidePersonal="checked"
    />

    <LifeStoryEvent
      year="2018"
      title="Engaged in Italy"
      desc=""
      note=""
      v-bind:hidePersonal="checked"
    />

    <LifeStoryEvent
      year="2019 - 2021"
      title="Grad school"
      desc="Enrolled at University of Michigan - Dearborn"
      note=""
    />

    <LifeStoryEvent
      year="2019"
      title="Promoted"
      desc="Exited the rotational Ford program early and stayed on as a Software Engineer on my team."
      note=""
    />

    <LifeStoryEvent
      year="2020"
      title="Promoted"
      desc="Became the Anchor Software Engineer for my team"
      note=""
    />

    <LifeStoryEvent
      year="2020 - now"
      title="Started Company"
      desc="Started a small software company with co-worker to help local businesses"
      note="TypeScript, React, Node.js, AWS, DynamoDB, S3, AWS Lambda"
    />

    <LifeStoryEvent
      year="2020"
      title="Married in Washington State"
      desc="Married in Mt Rainier National Park"
      note=""
      v-bind:hidePersonal="checked"
    />

    <LifeStoryEvent
      year="2021"
      title="Finished Grad School"
      desc="Master's of Science in Software Engineering"
      note=""
    />

    <LifeStoryEvent year="2021" title="Promoted" desc="" note="" />

    <LifeStoryEvent
      year="2021"
      title="New House"
      desc="Moved into a new house in Michigan to settle down into"
      note=""
      v-bind:hidePersonal="checked"
    />

    <LifeStoryEvent
      year="2021"
      title="Loki"
      desc="Titus got a fluffy twin brother"
      note=""
      v-bind:hidePersonal="checked"
    />

    <LifeStoryEvent
      year="2021 - 2022"
      title="Indeed"
      desc="Started as a Software Engineer - II at Indeed.com"
      note="JavaScript, React, Java, Spring"
    />

    <LifeStoryEvent
      year="2022 - now"
      title="Shopify"
      desc="Started as a Software Developer at Shopify"
      note="JavaScript, React, Java, Spring"
    />
  </div>
</template>

<script>
import { animateOnScroll } from "mdbvue";
import LifeStoryEvent from "./LifeStoryEvent.vue";

export default {
  name: "Resume",
  components: { LifeStoryEvent },
  data: () => {
    return { checked: true };
  },
  directives: {
    animateOnScroll,
  },
  watch: {
    checked: function() {
      setTimeout(() => {
        window.dispatchEvent(new Event("scoll"));
      }, 10);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped></style>
