<template>
    <div class="artist" >
        <div class="title">
            <img src="../assets/image/YonezuKenshi/342.gif" >
            PROFILE
            <img src="../assets/image/YonezuKenshi/342.gif" >
        </div>
        <div class="divider"></div>
        <div class="artist-intro">
            <img :src="artists.profile_image">
            <div class="divider"></div>
            <P>
                <span class="bold">Name: </span> {{ artists.artist_name }}
            </P>
            <P v-if="artists.born">
                <span class="bold">Born: </span> {{ artists.born }}
            </P>
            <p v-if="artists.born">
                <span class="bold">Height: </span> {{ artists.height }}
            </p>
            <p v-html="artists.intro"></p>
        </div>
        <div class="divider"></div>
        <div class="swiper-position" v-if="artists.banner">
            <md-swiper
                :autoplay="5000"
                transition="fade"
                ref="swiper">
                <md-swiper-item v-for="image in artists.banner" :key="image">
                    <img class="banner-item" :src="image">
                </md-swiper-item>
            </md-swiper>
        </div>
        <div class="divider"></div>
        <div class="title">
            <img src="../assets/image/YonezuKenshi/342.gif" >
            PROFILE
            <img src="../assets/image/YonezuKenshi/342.gif" >
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
                        // console.log(this.artists);
                    }
                })
        },
        
        beforeChange(from, to) {
            this.setValue('#valueSwiper0', from)
            this.setValue('#valueSwiper1', to)
        },
        afterChange(from, to) {
            this.setValue('#valueSwiper2', from)
            this.setValue('#valueSwiper3', to)
        },
    },

    watch: {},
}
</script>

<style lang="scss">
    @import "../styles/artist.scss";
</style>