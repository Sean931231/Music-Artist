<template>
    <div>
        <h3> {{results.title}} </h3>
        <div>
            <p>
                name :{{ results.author }}
                time: {{ results.date }}
            </p>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'artist',
    data() {
        return {
            baseUrl: process.env.VUE_APP_BASE_url,
            results: []
        }
    },
    mounted() {
        // this.fetchData();
        this.getData();
    },
    methods: {
        fetchData() {
            // axios.get(this.baseUrl + '/static/test.json')
            axios.get("/static/test.json")
                .then(response => {
                    console.log(response.data)
                })
        },

        getData() {
            axios.get("/json/demo.json")
                .then(response => {
                    this.results = response.data;
                    console.log(this.results);
                })
        }
    }
}
</script>

<style lang="scss">

</style>