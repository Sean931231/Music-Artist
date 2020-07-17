<template>
  <div class="discography">
    <Back />
    <div class="discography-title">
      <p>{{ this.$route.name }} </p>
    </div>
  </div>
</template>

<script>
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
