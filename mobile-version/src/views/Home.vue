<template>
  <div class="home">
    <div class="title-position">
      <Title />
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
import Title from "@/components/Title.vue";
import {Skeleton, Field, CellItem} from 'mand-mobile'

export default {
  name: "home",

  components: {
    Title,
    [Skeleton.name]: Skeleton,
    [Field.name]: Field,
    [CellItem.name]: CellItem,
  },

  data() {
    return {
      loading: true,

      artists: [
        { 
          id: 1,
          img: require('../assets/image/YonezuKenshi/Kenshi.jpg'),
          ename: 'Yonezu Kenshi',
          cname: '米津玄師'
        },
        { 
          id: 2,
          img: require('../assets/image/Sirup/avatar.jpg'),
          ename: 'Sirup',
          cname: ''
        }
      ],
    }
  },
  
  mounted() {
    window.startLoading = this.startLoading
    this.startLoading()
  },

  methods: {
    startLoading() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false
      }, 100)
    },

    next(artist) {
      this.$router.push({
        name: 'Artist',
        params: {
          ename: artist.ename
        },
        query: {
          id: artist.id,
        }
      });
    }
  },
  
};
</script>

<style lang="scss">
  @import "../styles/home.scss";
</style>