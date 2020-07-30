<template>
  <div class="discography">
    <div class="discography-title">
      <p>{{ this.$route.name }} </p>
    </div>

    <div class="navbar-position">
      <md-tab-bar
        v-model="current"
        :items="items"
        @change="onTabChange"
        class="nav-bar"
      ></md-tab-bar>

      <md-swiper
        ref="swiper"
        :autoplay="0"
        :is-prevent="false"
        :is-loop="false"
        :has-dots="false"
        @before-change="onSwiperChange"
        class="swiper-part"
      >
        <md-swiper-item  v-for="item in items" :key="item.key">
          <transition name="slide">
            <div class="empty-content" v-if="albums == null">
              <p> - Not Yet Ready - </p>
            </div>

            <div class="album-list" v-else>
              <!-- <p> {{ albums.artist_name }}</p> -->
              <div class="album-info" v-for="info in albums.album" :key="info.key">
                <div class="album-image" @click="toggle">
                  <img :src="info.album_image" v-if="info.album_image"/>
                  <img src="../assets/image/common/empty.jpg" v-else/>
                </div>

                <div class="album-release">
                  <p v-if="info.release_date"> {{ info.release_date }} </p>
                  <p v-else> Date Unknown </p>
                </div>

                <div class="album-brief" v-if="info.playlist">
                  <ol>
                    <li v-for="(list, index) in info.playlist" :key="index">
                      <p> {{list.brief}} </p>
                      <a :href="list.url" v-if="list.url">
                        <img src="../assets/image/social/icon_sns_black.png" >
                      </a>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </transition>
        </md-swiper-item>
      </md-swiper>

    </div>
  </div>
</template>

<script>
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
      currentName: "Yonezu Kenshi",
      artistData: [],
      items: [],
      albums: [],
      isShow: false
    }
  },

  mounted () {
    this.artistInit();
    this.tablist(this.currentAlbum, this.currentName);
  },

  methods: {
    artistInit() {
      this.$api
          .get("/json/artist.json", {})
          .then(response => {
            if(response.status) {
              this.items = response.data.artist;
            }
          })
          .catch(error => console.log(error))
    },

    tablist(index, ename) {
      this.$api
          .get("/json/album.json", {})
          .then(response => {
            if(response.status) {
              this.albums = response.data.album_result.find(element => element.id == index);
              if (this.albums == null ) {
                Toast({
                  icon: "fail",
                  content: 'Not Yet Ready',
                  duration: 900
                });
              }
            }
          })
    },

    toggle() {
        this.isShow = !this.isShow
    },

    onTabChange(item, index) {
      this.$refs.swiper.goto(index);
      this.tablist((index+1), item.ename);
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
