<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
    >
      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.text"
          link
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              {{ item.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-subheader class="mt-4 grey--text text--darken-1">ARTIST</v-subheader>
        <v-list>
          <v-list-item
            v-for="artist in artistList"
            :key="artist.key"
            link
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
        >
          <v-list-item-action>
            <v-icon color="grey darken-1">mdi-plus-circle-outline</v-icon>
          </v-list-item-action>
          <v-list-item-title class="grey--text text--darken-1">Browse Channels</v-list-item-title>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon color="grey darken-1">mdi-cog</v-icon>
          </v-list-item-action>
          <v-list-item-title class="grey--text text--darken-1">Manage Subscriptions</v-list-item-title>
        </v-list-item>
        <v-list-item link @click="darkMode()">
          <v-list-item-action>
            <v-icon color="grey darken-1">mdi-brightness-3</v-icon>
          </v-list-item-action>
          <v-list-item-title class="grey--text text--darken-1">Mode</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      clipped-left
      color="red"
      dense
      >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-icon
        class="mx-4"
        large
      >
        mdi-alpha-b-circle
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
        { icon: 'mdi-trending-up', text: 'Most Popular' },
        { icon: 'mdi-youtube-subscription', text: 'Subscriptions' },
        { icon: 'mdi-history', text: 'History' },
        { icon: 'mdi-playlist-play', text: 'Playlists' },
        { icon: 'mdi-clock', text: 'Watch Later' },
      ],
      artistList: []
    }),

    mounted () {
      this.init();
    },

    methods: {
      init() {
        this.$http
            .get("https://my-json-server.typicode.com/Sean931231/artistlist/artist")
            .then((response) => {
              // console.log(response.data)
              this.artistList = response.data;
              // this.artistList.forEach(element => {
              //   let picture = element.img;
              //   let text = element.ename;
              // });
            })
      },

      darkMode() {
        this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      }
    },
  }
</script>

<style lang="scss">

</style>
