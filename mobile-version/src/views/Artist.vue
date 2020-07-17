<template>
  <div class="artist" >
    <Back />
    <div class="artist-swiper">
      <div class="swiper-position" v-if="artists.banner">
        <md-swiper
          :autoplay="5000"
          transition="fade"
          ref="swiper">
          <md-swiper-item v-for="image in artists.banner" :key="image">
            <img class="banner-item" :src="image">
          </md-swiper-item>
        </md-swiper>
      </div>
    </div>

    <img class="artist-avatar" :src="artists.profile_image">

    <div class="info-position">
      <div class="artist-info" v-for="(info, name) in artists.info" :key="info.key">
        <md-detail-item :title="name" :content="info" />
      </div>
    </div>
    <div class="divider">
    </div>
    <p class="artist-intro" v-html="artists.intro"></p>
    <!-- <hr class="divider-line"> -->
    <div class="divider">
    </div>
    <div class="artist-social">
      <div class="social-container" v-for="social in social" :key="social.key">
        <a :href="social.link">
          <img :src="social.img">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import {Swiper, SwiperItem, DetailItem} from 'mand-mobile';
import Back from "@/components/BackButton.vue";

export default {
  name: 'artist',
  components: {
    Back,
    [Swiper.name]: Swiper,
    [SwiperItem.name]: SwiperItem,
    [DetailItem.name]: DetailItem
  },
  data() {
    return {
      results: '',
      artists: [],
      social: [],
    }
  },

  props: {
    cname: {
        type: String,
    },
  },

  mounted() {
      this.init();
  },

  methods: {
    init() {
      let pageid = this.$route.query.id;
      this.getData(pageid);
    },

    getData(id) {
      axios.get("/json/artist_info.json", {
        }).then(response => {
          if(response.status) {
            this.artists = response.data.artist_info.find(result => result.id == id);
            this.social = this.artists.social;
            console.log(response.data);
          }
        })
    },
  },

  watch: {},
}
</script>

<style lang="scss">
  @import "../styles/artist.scss";
</style>
