<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
      >
      <v-list dense>
        <v-list-item-group color="primary">
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :to="item.url"
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>

      </v-list>

      <v-list dense>
        <v-subheader class="grey--text text--darken-1">ARTIST</v-subheader>
        <v-list>
          <v-list-item
            v-for="artist in artistList"
            :key="artist.key"
            link
            @click="next(artist.id)"
          >
            <v-list-item-avatar>
              <img
                :src="artist.img"
                alt=""
              >
            </v-list-item-avatar>
            <v-list-item-title v-text="artist.ename"></v-list-item-title>
          </v-list-item>
        </v-list>
        <v-list-item
          class="mt-4"
          link
          @click="darkMode()"
          >
          <v-list-item-action>
            <v-icon v-if="this.$vuetify.theme.dark" color="grey darken-1">mdi-brightness-5</v-icon>
            <v-icon v-else color="grey darken-1">mdi-brightness-4</v-icon>
          </v-list-item-action>
          <v-list-item-title class="grey--text text--darken-1" v-if="this.$vuetify.theme.dark">Light</v-list-item-title>
          <v-list-item-title class="grey--text text--darken-1" v-else>Dark</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      clipped-left
      color="#1565C0"
      dense
      >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-icon
        class="mx-4"
        large
      >
        mdi-arrow-right-drop-circle
      </v-icon>
      <v-toolbar-title class="mr-12 align-center">
        <span class="title">Page</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-row
        align="center"
        style="max-width: 650px"
      >
        <v-text-field
          :append-icon-cb="() => {}"
          placeholder="Search..."
          single-line
          append-icon="mdi-magnify"
          color="white"
          hide-details
        ></v-text-field>
      </v-row>
    </v-app-bar>
  </div>
</template>

<script>
  export default {
    data: () => ({
      drawer: null,
      items: [
        { icon: 'mdi-home', text: 'Home', url: '/' },
        { icon: 'mdi-account-multiple', text: 'Artist', url: '/artist'},
        { icon: 'mdi-playlist-play', text: 'Playlists', url: '/discography' },
      ],
      artistList: [],
    }),

    mounted () {
      this.init();
    },

    methods: {
      init() {
        this.$http
            .get("https://my-json-server.typicode.com/Sean931231/artistlist/artist")
            .then((response) => {
              this.artistList = response.data;
            })
      },

      next(id) {
        this.$router.push({
          path: 'artistinfo',
          query: {
            id: id
          }
        })
      },

      darkMode() {
        this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      }
    },

    watch: {},
  }
</script>

<style lang="scss">

</style>
