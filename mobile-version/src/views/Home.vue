<template>
  <div class="home">
    <div class="title-position">
      <Title />
    </div>

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
  </div>
</template>

<script>
import Title from "@/components/Title.vue";
import {Swiper, SwiperItem} from 'mand-mobile';

export default {
  name: "home",
  components: {
    Title,
    [Swiper.name]: Swiper,
    [SwiperItem.name]: SwiperItem,
  },
  data() {
    return {
      images: [
        { 
          img: require('../assets/image/Yonezu Kenshi/bootleg_slyder.jpg'),
          alt: 'artist',
          url: "/about"
        },
        { 
          img: require('../assets/image/Yonezu Kenshi/HaiiroToAo_Slyder.jpg'),
          alt: 'artist',
          url: "/artist"
        },
        { 
          img: require('../assets/image/Yonezu Kenshi/Lemon_Slyder2.jpg'),
          alt: 'artist'
        }
      ]
    }
  },
  
  mounted() {
    // console.log(this.images.url);
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
  @import "../styles/home.scss";
</style>