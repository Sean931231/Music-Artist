<template>
  <div class="discography">
    <div class="discography-title">
      <p>{{ this.$route.name }} </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Discography',
    data() {
      return {

      }
    },
    mounted () {
      this.checkProp();
    },
    methods: {
      checkProp() {

      }
    },

  }
</script>

<style lang="scss">

</style>
