<template>
  <v-container>
    <div class="artist">
      <div class="page-title">
        <v-row>
          <v-col
            cols="12">
            <p class="text-left text-size-10"> {{ this.$route.name }} </p>
          </v-col>
        </v-row>
      </div>

      <div class="artist-list">
        <v-row>
          <v-col
            v-for="list in artistslist" :key="list.key"
            cols="12"
            md="3"
            lg="4"
            sm="6"
            >
            <v-card
              max-width="400"
            >
              <v-img
                class="white--text align-end"
                height="200px"
                :src="list.img"
              >
                <v-card-title> {{ list.ename }} </v-card-title>
              </v-img>

              <v-card-subtitle class="pb-0">Number 10</v-card-subtitle>

              <v-card-text class="text--primary">
                <div>Whitehaven Beach</div>

                <div>Whitsunday Island, Whitsunday Islands</div>
              </v-card-text>

              <v-card-actions>
                <v-btn
                  color="orange"
                  text
                  @click="artistinfo(list.id)"
                >
                  Explore
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </div>
  </v-container>
</template>

<script>
  export default {
    data() {
      return {
        artistslist: [],
        artistsinfo: [],
      }
    },
    mounted () {
      this.getArtistInfo();
      this.getArtistList();
    },

    methods: {
      getArtistList() {
        this.$http
            .get("/json/artist.json")
            .then(response => {
              this.artistslist = response.data.artist
            })
      },

      getArtistInfo() {
        let pageid = this.$route.query.id;
        this.$http
            .get("/json/artist_info.json")
            .then((response) => {
              this.artistsinfo = response.data.artist_info.find(element => element.id == pageid);
            })
      },

      artistinfo(id) {
        this.$router.push({
          name: 'Artist_Info',
          query: {
            id: id
          }
        })
      }
    },
  }
</script>

<style lang="scss">
  @import '../styles/artist.scss';
</style>
