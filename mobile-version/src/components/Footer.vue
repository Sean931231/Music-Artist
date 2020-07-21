<template>
    <div id="nav">
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->

      <md-tab-bar
        v-model="current"
        :items="items"
        :hasInk="false"
        @change="onChange"
      >
        <template slot="item" slot-scope="{ item }">
            <div class="custom-item">
            <div class="icon">
                <md-icon :name="item.icon" />
            </div>
            <div class="text">
                <span v-text="item.label"></span>
            </div>
            </div>
        </template>
      </md-tab-bar>
  </div>
</template>
<script>
import {TabBar, Icon} from 'mand-mobile'

export default {
    name: "Header",
    components: {
        [TabBar.name]: TabBar,
        [Icon.name]: Icon,
    },
    data() {
    return {
        current: "Home",
        items: [
        {
            name: 'Home',
            label: 'HOME',
            icon: 'home',
            path: '/'
        },
        {
            name: 'Discography',
            label: 'ALBUM',
            icon: 'rectangle',
            path: '/discography'
        },
        {
            name: 'About',
            label: 'ABOUT',
            icon: 'setting',
            path: '/about'
        }
        ],
        arrs: [1, 3, 5, 7, 9],
    }
    },
    created() {
        this.init();
        this.findArray();
    },
    methods: {
        init() {
            let findPath = this.items.find(item => item.path == this.$route.path);
            if (findPath) {
                this.current = findPath.name
            }
        },

        findArray() {
            let findarr = this.arrs.find(arr => arr > 5);
            console.log(findarr);
        },

        onChange(tab) {
            this.$router.push(tab.path);
        },
    },
    watch: {
        $route() {
            this.init();
        },

        // 监督值的变化
        // current:function($val) {
        //   console.log($val);
        // },

        findArray:function($val) {
            console.log($val);
        }
    }
}
</script>

<style lang="scss">
    @import "../styles/footer.scss";
</style>
