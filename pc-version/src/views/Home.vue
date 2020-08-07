<template>
  <div class="home">
    <v-container class="fill-height">
      <v-row
        justify="center"
        align="center"
        >
        <DarkTitle v-if="this.$vuetify.theme.dark"/>
        <Title v-else />
      </v-row>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import DarkTitle from '@/components/DarkTitle.vue'
import Title from '@/components/Title.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    DarkTitle,
    Title
  }
}
</script>

<style lang="scss">
  @import '../styles/home.scss';
</style>
