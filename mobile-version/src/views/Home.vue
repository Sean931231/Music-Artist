<template>
  <div class="home">
    <div class="title-position">
      <DarkTitle />
    </div>

    <div class="horizon-image">
      <img src="../assets/image/horizonline/Monster_scroll_L1.png" class="layer1">
      <img src="../assets/image/horizonline/Monster_scroll_L2.png" class="layer2">
    </div>

    <div class="content-position">
      <div class="loading-content">
        <md-skeleton avatar title :loading="loading">
        </md-skeleton>
      </div>
      <div class="real-content">
        <md-skeleton
          :loading="loading"
          :row="2"
          class="skeleton-item"
          v-for="(artist, index) in artists"
          :key="index">
            <md-cell-item :title="artist.ename" :brief="artist.cname" addon="Profile" arrow @click="next(artist.id)">
              <img :src="artist.img" class="holder" slot="left">
            </md-cell-item>
        </md-skeleton>
      </div>
    </div>
  </div>
</template>

<script>
import {Skeleton, CellItem, Button, Toast} from 'mand-mobile';
import DarkTitle from '@/components/Title.vue';

export default {
  name: "home",

  components: {
    DarkTitle,
    [Skeleton.name]: Skeleton,
    [CellItem.name]: CellItem,
    "md-button": Button,
  },

  data() {
    return {
      loading: true,
      artists: [],
      artistArray: []
    }
  },

  mounted() {
    window.startLoading = this.startLoading
    this.startLoading();
    this.init();
  },

  methods: {
    startLoading() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false
      }, 100)
    },

    init() {
      // this.$api
      //     .get("/json/artist.json", {})
      //     .then(response => {
      //       if(response.status) {
      //         this.artists = response.data.artist;
      //       }
      //   })
      this.$api
          .get("https://my-json-server.typicode.com/Sean931231/artistlist/artist", {})
          .then(response => {
            if(response.status) {
              this.artists = response.data;
            }
        })
    },

    next(id) {
      this.$api
          .get("/json/artist_info.json", {})
          .then(response => {
            if(response.status) {
              let artistId = response.data.artist_info;
              let findId = artistId.find(element => element.id == id);

              if( findId ) {
                this.$router.push({
                  name: 'Artist',
                  query: {
                    id: id,
                  }
                });
              } else {
                Toast({
                  icon: "fail",
                  content: 'Not Yet Ready',
                  duration: 900
                });
              }
            }
      })
    },
  },

};
</script>

<style lang="scss">
  @import "../styles/home.scss";
</style>
