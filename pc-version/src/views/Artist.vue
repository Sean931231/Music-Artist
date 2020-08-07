<template>
  <div class="artist">
    <div class="page-title">
      <p> {{ this.$route.name }} </p>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        artists: [],
      }
    },
    mounted () {
      this.getArtistInfo();
    },

    methods: {
      getArtistList() {
        this.$http
            .get
      },

      getArtistInfo() {
        let pageid = this.$route.query.id;
        this.$http
            .get("/json/artist_info.json")
            .then((response) => {
              this.artists = response.data.artist_info.find(element => element.id == pageid);
              console.log(this.artists);
            })
      }
    },
  }
</script>

<style lang="scss">
  @import '../styles/artist.scss';
</style>
