<template>
  <div class="props">
    <Back />
    <h3>
      {{ obj }}
    </h3>
  </div>
</template>

<script>
import Back from "@/components/BackButton.vue";

  export default {
    name: 'prop',
    components: {
      Back,
    },
    props: ['obj']

  }
</script>

<style lang="scss" scoped>
.props {
  position: relative;
  padding-top: 10vw;

  h3 {
    position: relative;
    margin: 0 auto;
    // top: 50vw;
    // bottom: 50vw;
  }
}
</style>
