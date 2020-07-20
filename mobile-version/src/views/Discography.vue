<template>
  <div class="discography">
    <div class="discography-title">
      <p>{{ this.$route.name }} </p>
    </div>

    <div class="navbar-position">
      <md-tab-bar
        v-model="current"
        :items="items"
        :hasInk="false"
        :maxLength="5"
      />
    </div>
    <div class="album-list-position">

    </div>
  </div>
</template>

<script>
import axios from 'axios';
import {TabBar} from 'mand-mobile'

export default {
  name: 'Discography',
  data() {
    return {
      current: 1,
      items: [
        {
          name: 1,
          label: 'Yonezu Kenshi'
        },
        {
          name: 2,
          label: 'Sirup'
        },
        {
          name: 3,
          label: 'Suchmos'
        },
        {
          name: 4,
          label: 'King Gnu'
        }
      ],
    }
  },
  components: {
    [TabBar.name]: TabBar,
  },
  mounted () {
    this.artistInit();
  },
  methods: {
    artistInit() {
      axios.get("/json/artist.json", {
      }).then(response => {
        if(response.status) {
          console.log(response.data.artist);
        }
      })


    }
  },

}
</script>

<style lang="scss">
 @import '../styles/discography.scss';
</style>
