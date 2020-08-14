<template>
  <div>
    <p> {{ this.$route.name }} - artistId : {{ this.$route.query }} </p>

    <p> {{ this.$route.meta }} </p>
  </div>
</template>

<script>
  export default {
    mounted () {
      this.getLink();
    },
    methods: {
      getLink() {
        console.log(this.$route);
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>
