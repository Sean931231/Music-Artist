<template>
    <div class="artist">
        <div class="artist-start">
            <h6> {{ artists.artist_name }} </h6>

            <div class="image-location" v-for="image in artists.banner" :key="image">
                <img :src="image">
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import {Swiper, SwiperItem} from 'mand-mobile';

export default {
    name: 'artist',
    components: {
        [Swiper.name]: Swiper,
        [SwiperItem.name]: SwiperItem
    },
    data() {
        return {
            results: '',
            artists: [],
        }
    },

    props: [
        'ename'
    ],

    mounted() {
        this.init();
    },
    methods: {
        init() {
            let pageid = this.$route.query.id;
            this.getData(pageid);
        },

        getData(id) {
            axios.get("/json/demo.json", {
                }).then(response => {
                    if(response.status) {
                        this.artists = response.data.data.find(result => result.id == id);
                        console.log(this.artists);
                    }
                })
        },

        fetchData() {
            axios.get("/static/test.json")
                .then(response => {

                })
        }
    },

    watch: {
        $route() {
            this.init();
        }
    },
}
</script>

<style lang="scss">

</style>