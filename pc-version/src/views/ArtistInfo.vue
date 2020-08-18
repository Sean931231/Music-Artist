<template>
  <div>
    <v-breadcrumbs :items="breadcrumb" large>
      <template v-slot:divider>
        <v-icon>mdi-chevron-right</v-icon>
      </template>
    </v-breadcrumbs>

    <p> {{ this.$route.name }} - artistId : {{ this.$route.query }} </p>

    <p> {{ this.$route.meta }} </p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        breadcrumb: []
      }
    },
    mounted () {
      this.getLink();
    },
    methods: {
      getLink() {
        this.breadcrumb = this.$route.meta.breadcrumb
        console.log(this.$route);
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>
