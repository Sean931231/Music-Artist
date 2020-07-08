<template>
    <div class="artist" >
        <Back />
        <div class="title">
            <!-- <img src="../assets/image/YonezuKenshi/342.gif" > -->
                PROFILE
            <!-- <img src="../assets/image/YonezuKenshi/342.gif" > -->
        </div>
        <div class="divider">
        </div>

        <img class="artist-avatar" :src="artists.profile_image">
        <div class="divider">
        </div>

        <div class="artist-info" v-for="(info, name) in artists.info" :key="info.key">
            <md-detail-item :title="name" :content="info" />
        </div>
        <div class="divider">
        </div>

        <div class="swiper-position" v-if="artists.banner">
            <md-swiper
                :autoplay="3000"
                transition="fade"
                ref="swiper">
                <md-swiper-item v-for="image in artists.banner" :key="image">
                    <img class="banner-item" :src="image">
                </md-swiper-item>
            </md-swiper>
        </div>
        <div class="divider">
        </div>

        <p class="artist-intro" v-html="artists.intro"></p>
        <div class="divider">
        </div>

        <div class="artist-social">
            <!-- <md-detail-item :title="name" v-for="(social, name) in artists.social" :key="social.key">
                <img src="../assets/image/social/youtube.png" class="holder" slot="left">
                <a :href="social" style="color:#5878B4; text-decoration:none;"> {{ name }} </a>
            </md-detail-item> -->

            <div class="grid-container" v-for="social in artists.social" :key="social.key">
                    <a href="google.com">
                        <img src="../assets/image/social/youtube.png" >
                    </a>
                <!-- <div class="grid-item">
                    <img src="../assets/image/social/twitter.png" >
                </div>
                <div class="grid-item">
                    <img src="../assets/image/social/instagram.png" >
                </div> -->
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import {Swiper, SwiperItem, DetailItem} from 'mand-mobile';
import Back from "@/components/BackButton.vue";

export default {
    name: 'artist',
    components: {
        Back,
        [Swiper.name]: Swiper,
        [SwiperItem.name]: SwiperItem,
        [DetailItem.name]: DetailItem
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
            axios.get("/json/artist_info.json", {
                }).then(response => {
                    if(response.status) {
                        this.artists = response.data.data.find(result => result.id == id);
                        // console.log(this.artists);
                        console.log(this.artists.social.youtube);
                    }
                })
        },        
    },

    watch: {},
}
</script>

<style lang="scss">
    @import "../styles/artist.scss";
</style>