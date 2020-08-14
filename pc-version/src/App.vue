<template>
  <v-app>
    <Header />
    <v-main>
      <v-container>
        <v-row
          justify="center"
          align="center"
          >
          <router-view />
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Header from './components/Header.vue'

export default {
    name: 'App',
    components: {
      Header,
    },
  }
</script>
