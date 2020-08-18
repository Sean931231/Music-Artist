<template>
  <div>
    {{ this.$route.name }}
    <v-breadcrumbs :items="breadcrumb" large>
      <template v-slot:divider>
        <v-icon>mdi-chevron-right</v-icon>
      </template>
    </v-breadcrumbs>
  </div>
</template>

<script>
  export default {
    name: 'Discography',
    data() {
      return {
        breadcrumb: []
      }
    },
    mounted () {
      this.getPath();
    },
    methods: {
      getPath() {
        this.breadcrumb = this.$route.meta.breadcrumb

        console.log(this.$route.meta);
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>
