<template>
  <div class="home">
    <DarkTitle v-if="this.$vuetify.theme.dark"/>
    <Title v-else />
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
