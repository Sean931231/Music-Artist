<template>
  <div class="home">
    <DarkTitle />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import DarkTitle from '@/components/Title.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    DarkTitle
  }
}
</script>
