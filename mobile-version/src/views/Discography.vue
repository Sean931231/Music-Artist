<template>
  <div class="discography">
    <div class="discography-title">
      <p>{{ this.$route.name }} </p>
    </div>

    <div class="navbar-position">
      <md-tab-bar
        v-model="current"
        :items="items"
        :maxLength="5"
        @change="onTabChange"
      ></md-tab-bar>
      <md-swiper
        ref="swiper"
        :autoplay="0"
        :is-prevent="false"
        :is-loop="false"
        :has-dots="false"
        @before-change="onSwiperChange"
      >
        <md-swiper-item v-for="album in albums" :key="album.key">
          <p>{{ album.label }} </p>
        </md-swiper-item>
      </md-swiper>

    </div>
    <div class="album-list-position">

    </div>
  </div>
</template>

<script>
import axios from 'axios';
import {TabBar, Swiper, SwiperItem} from 'mand-mobile'

export default {
  name: 'Discography',
  components: {
    [TabBar.name]: TabBar,
    [Swiper.name]: Swiper,
    [SwiperItem.name]: SwiperItem
  },

  data() {
    return {
      current: 0,
      artistData: [],
      items: [],
      albums: [],
    }
  },

  mounted () {
    this.artistInit();
    this.tablist();
  },

  methods: {
    artistInit() {
      axios.get("/json/artist.json", {
      }).then(response => {
        if(response.status) {
          console.log(response.data.artist)
          this.items = response.data.artist;
          this.albums = this.items;
        }
      })
    },

    tablist() {
      axios.get("/json/album.json", {
      }).then(response => {
        if(response.status) {

        }
      })
    },

    onSwiperChange(from, to) {
      this.current = to;
    },

    onTabChange(item, index) {
      this.$refs.swiper.goto(index);
    },
  },
}
</script>

<style lang="scss">
 @import '../styles/discography.scss';
</style>
