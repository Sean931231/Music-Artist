<template>
  <div>
    {{ this.$route.name }}
  </div>
</template>

<script>
  export default {
    mounted () {
      this.getPath();
    },
    methods: {
      getPath() {
        console.log(this.$route.meta);
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>
