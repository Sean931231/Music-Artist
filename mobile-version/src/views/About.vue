<template>
  <div class="about">
    <div class="swiper-position">
      <md-swiper
        :autoplay="5000"
        transition="fade"
        ref="swiper">
        <md-swiper-item :key="index" v-for="(item, index) in images">
            <img :src="item.img" class="banner-item">
        </md-swiper-item>
      </md-swiper>
    </div>

    <HelloWorld msg="Welcome to Your Mand Mobile"/>
  </div>
</template>

<script>
import {Swiper, SwiperItem} from 'mand-mobile';

// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "about",
  components: {
    HelloWorld,
    [Swiper.name]: Swiper,
    [SwiperItem.name]: SwiperItem
  },
  data() {
    return {
      images: [
        { 
          img: require('../assets/image/YonezuKenshi/bootleg_slyder.jpg'),
          alt: 'artist',
          url: "/about"
        },
        { 
          img: require('../assets/image/YonezuKenshi/HaiiroToAo_Slyder.jpg'),
          alt: 'artist',
          url: "/artist"
        },
        { 
          img: require('../assets/image/YonezuKenshi/Lemon_Slyder2.jpg'),
          alt: 'artist'
        }
      ]
    }
  },

  methods: {
    beforeChange(from, to) {
      this.setValue('#valueSwiper0', from)
      this.setValue('#valueSwiper1', to)
    },
    afterChange(from, to) {
      this.setValue('#valueSwiper2', from)
      this.setValue('#valueSwiper3', to)
    },
  },
};
</script>

<style lang="scss">
  @import "../styles/about.scss";
</style>
