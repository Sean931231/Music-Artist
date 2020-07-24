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
        <md-swiper-item  v-for="item in items" :key="item.key">
          <div class="album-content">

          </div>
        </md-swiper-item>
      </md-swiper>

    </div>
    <div class="album-list-position">

    </div>
  </div>
</template>

<script>
import axios from 'axios';
import {TabBar, Swiper, SwiperItem, Toast} from 'mand-mobile'

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
      currentAlbum: 1,
      artistData: [],
      items: [],
      albums: [],
    }
  },

  mounted () {
    this.artistInit();
    this.tablist(this.currentAlbum);
  },

  methods: {
    artistInit() {
      axios.get("/json/artist.json", {
      }).then(response => {
        if(response.status) {
          this.items = response.data.artist;
        }
      })
    },

    tablist(index) {
      // console.log("api:"+index);
      axios.get("/json/album.json", {
        }).then(response => {
          if(response.status) {
            this.albums = response.data.album_result.find(element => element.id == index);
            if (this.albums == null ) {
              Toast.failed('Not Yet Ready')
            }
            console.log(this.albums);
        }
      })
    },

    onTabChange(item, index) {
      this.$refs.swiper.goto(index);
      this.tablist(index+1);
    },

    onSwiperChange(from, to) {
      this.current = to;
      this.tablist(to+1);
    },
  },
}
</script>

<style lang="scss">
 @import '../styles/discography.scss';
</style>
