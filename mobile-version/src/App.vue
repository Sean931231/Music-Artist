<template>
  <div id="app">
    <div class="content">
      <router-view/>
    </div>
    <Footer/>
  </div>
</template>

<script>
  import Footer from "@/components/Footer.vue";

  export default {
    components: {
      Footer
    }
  }
</script>

<style scoped lang="scss">
#app {
  position: relative;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
  /* color: #1E1E1E; */

  .content {
    padding-bottom: 20vw;
    letter-spacing: 0.1vw;
  }
}
</style>
