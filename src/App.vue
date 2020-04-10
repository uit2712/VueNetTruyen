<template>
    <div id="app">
        <Header />
        <TopMenu />
        <div class="main-content mx-auto">
            <RecommendComic/>
            <UpdatedComics/>
        </div>
    </div>
</template>

<script>
import Header from "./components/Header.vue";
import TopMenu from "./components/TopMenu.vue";
import RecommendComic from "./components/RecommendComic.vue";
import UpdatedComics from "./components/UpdatedComics.vue";
import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

export default {
    name: "App",
    components: {
        Header,
        TopMenu,
        RecommendComic,
        UpdatedComics,
    }
};
</script>

<style scoped>
.main-content {
    width: 75%;
}
</style>
