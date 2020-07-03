<template>
    <div class="artist">
        <div class="artist-content">
            <p style="font-size: 5vw">
                name:{{ results.author }}
            </p>
            <p style="font-size: 5vw">
                time:{{ results.date }}
            </p>
        </div>
        <br>
    </div>
</template>

<script>
import axios from 'axios';
import test from '@/views/Home.vue';

export default {
    name: 'artist',
    components: {
        test,
    },
    data() {
        return {
            baseUrl: process.env.VUE_APP_BASE_url,
            results: []
        }
    },

    props: [
        'ename'
    ],

    mounted() {
        this.getUrl();
    },
    methods: {
        getUrl() {
            // console.log(this.$route.params.ename);
            // getData(this.$route.params);
            this.getData(this.$route.params)
        },

        fetchData() {
            axios.get("/static/test.json")
                .then(response => {

                })
        },

        getData(params) {
            // console.log(params.ename);
            axios.get("/json/demo.json")
                .then(response => {
                    this.results = response.data;
                })
                console.log(this.results);
        }
    }
}
</script>

<style lang="scss">

</style>