<template>
  <div class="about">
    <HelloWorld msg="Welcome to Your Mand Mobile"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
export default {
  name: "about",
  components: {
    HelloWorld
  }
};
</script>

<style lang="scss">
  @import "../styles/about.scss";
</style>
