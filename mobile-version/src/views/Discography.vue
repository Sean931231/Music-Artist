<template>
  <div class="discography">
    <Back />
    <div class="discography-title">
      <p>{{ this.$route.name }} </p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Back from '@/components/BackButton.vue'

export default {
  name: 'Discography',
  data() {
    return {
    }
  },
  components: {
    Back,

  },
  mounted () {
  },
  methods: {

  },

}
</script>

<style lang="scss">
 @import '../styles/discography.scss';
</style>
