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
        this.getData();
    },
    methods: {
        init() {
            
        },

        getData() {
            // console.log(this.ename);
            axios.get("/json/demo.json", {
                }).then(response => {
                    if(response.status) {
                        this.results = response.data.data;
                        this.artists = this.results.find(result => result.artist_name == this.ename);
                        console.log(this.artists);
                    }
                })
        },

        fetchData() {
            axios.get("/static/test.json")
                .then(response => {

                })
        }
    }
}
</script>

<style lang="scss">

</style>