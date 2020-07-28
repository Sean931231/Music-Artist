<template>
  <div class="about">
    <div class="horizon-image">
      <img src="../assets/image/horizonline/Monster_scroll_L1.png" class="layer3">
      <img src="../assets/image/horizonline/Monster_scroll_L2.png" class="layer4">
    </div>

    <div class="logo-position">
      <DarkTitle />
    </div>

    <div class="horizon-image">
      <img src="../assets/image/horizonline/Monster_scroll_L1.png" class="layer1">
      <img src="../assets/image/horizonline/Monster_scroll_L2.png" class="layer2">
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

    <HelloWorld msg="Welcome to Your Mand Mobile"/>


    <div class="test-props" v-for="(artist, index) in artists" :key="index">
      <md-button type="primary" @click="toProp(artist.cname)"> {{ artist.ename }} </md-button>
    </div>
  </div>
</template>

<script>
import {Swiper, SwiperItem, Button} from 'mand-mobile';

// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import DarkTitle from '@/components/Title.vue';

export default {
  name: "about",
  components: {
    DarkTitle,
    HelloWorld,
    [Swiper.name]: Swiper,
    [SwiperItem.name]: SwiperItem,
    "md-button": Button
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
      ],

      artists: []
    }
  },

  mounted () {
    this.init();
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

    init() {
      this.$api.get("/json/artist.json", {
        }).then(response => {
          if(response.status) {
            this.artists = response.data.artist;
          }
        })
    },

    toProp(cname) {
      this.$router.push({
        name: 'Prop',
        params: {
          obj: cname
        }
      })
    }

  },
};
</script>

<style lang="scss">
  @import "../styles/about.scss";
</style>
