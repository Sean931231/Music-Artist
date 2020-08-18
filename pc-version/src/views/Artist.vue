<template>
  <v-container>
    <div class="artist">
      <div class="page-title">
        <v-row>
          <v-col
            cols="12">
            <v-breadcrumbs :items="breadcrumb" large>
              <template v-slot:divider>
                <v-icon>mdi-chevron-right</v-icon>
              </template>
            </v-breadcrumbs>
          </v-col>
        </v-row>
      </div>

      <div class="artist-list">
        <v-row>
          <v-col
            v-for="list in artistslist" :key="list.key"
            cols="12"
            md="4"
            lg="4"
            xl="3"
            sm="6"
            >
            <v-card
              class="mx-auto"
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
        breadcrumb:[]
      }
    },
    mounted () {
      this.getArtistList();
    },

    methods: {
      getArtistList() {
        this.breadcrumb = this.$route.meta.breadcrumb;

        this.$http
            .get("/json/artist.json")
            .then(response => {
              this.artistslist = response.data.artist
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
