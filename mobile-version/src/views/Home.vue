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
          v-for="artist in artists"
          :key="artist">
          <md-cell-item :title="artist.ename" :brief="artist.cname" addon="Profile" arrow>
            <img :src="artist.img" class="holder" slot="left" >
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
          img: require('../assets/image/YonezuKenshi/PROFILE_orion2.jpg'),
          ename: 'Yonezu Kenshi',
          cname: '米津玄師'
        },
        {
          img: require('../assets/image/Sirup/sirup.jpg'),
          ename: 'Sirup',
          cname: ''
        }
      ]
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
      }, 3000)

    }
  },

  
};
</script>

<style lang="scss">
  @import "../styles/home.scss";
</style>