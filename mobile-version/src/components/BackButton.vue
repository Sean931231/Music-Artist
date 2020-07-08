<template>
    <div class="back-button">
        <div class="button-position" @click="$router.go(-1)">
            <md-icon
                name="arrow-left"
                size="lg"
                class="back-icon"
            ></md-icon>
            <p>Back</p>
        </div>
    </div>
</template>

<script>
    import {Icon} from 'mand-mobile'
    export default {
        name: 'back-button',
        components: {
            [Icon.name]: Icon,
        },
        data() {
            return {
                
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../styles/back.scss";
</style>