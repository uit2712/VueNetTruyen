<template>
    <div id="app">
        <top-header></top-header>
        <top-menu></top-menu>
        <div class="mx-auto col-xs-9 col-lg-9 col-md-9 col-sm-12 col-xs-12 col-12">
            <recommend-comic></recommend-comic>
            <div class="row col-12">
                <updated-comics></updated-comics>
                <right-side-bar></right-side-bar>
            </div>
        </div>
    </div>
</template>

<script>
import TopHeader from "./components/TopHeader.vue";
import TopMenu from "./components/TopMenu.vue";
import RecommendComic from "./components/RecommendComic.vue";
import UpdatedComics from "./components/UpdatedComics.vue";
import Vue from 'vue'
import { BootstrapVue, IconsPlugin, TabsPlugin } from 'bootstrap-vue'
import RightSideBar from './components/RightSideBar.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(TabsPlugin);

export default {
    name: "App",
    components: {
        TopHeader,
        TopMenu,
        RecommendComic,
        UpdatedComics,
        RightSideBar,
    }
};
</script>

<style scoped>
.main-content {
    width: 75%;
}
</style>
