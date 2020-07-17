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
            <md-cell-item :title="artist.ename" :brief="artist.cname" addon="Profile" arrow @click="next(artist)">
              <img :src="artist.img" class="holder" slot="left">
            </md-cell-item>
        </md-skeleton>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import {Skeleton, CellItem, Button} from 'mand-mobile';
import DarkTitle from '@/components/DarkTitle.vue';

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
      axios.get("/json/artist.json", {
        }).then(response => {
          if(response.status) {
            this.artists = response.data.artist;
          }
        })
    },

    next(artist) {
      this.$router.push({
        name: 'Artist',
        query: {
          id: artist.id,
        }
      });
    },
  },

};
</script>

<style lang="scss">
  @import "../styles/home.scss";
</style>
