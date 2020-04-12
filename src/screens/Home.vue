<template>
    <div class="home">
        <top-header></top-header>
        <top-menu></top-menu>
        <div class="mx-auto col-xs-10 col-lg-10 col-md-10 col-sm-12 col-xs-12 col-12">
            <recommend-comic></recommend-comic>
            <div class="row col-12">
                <updated-comics></updated-comics>
                <right-side-bar></right-side-bar>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import TopHeader from '../components/TopHeader.vue';
import TopMenu from '../components/TopMenu.vue';
import RecommendComic from '../components/RecommendComic.vue';
import UpdatedComics from '../components/UpdatedComics.vue';
import RightSideBar from '../components/RightSideBar.vue'

export default Vue.extend({
    name: 'home',
    components: {
        TopHeader,
        TopMenu,
        RecommendComic,
        UpdatedComics,
        RightSideBar,
    },
})
</script>
<style scoped>
.main-content {
    width: 75%;
}
</style>