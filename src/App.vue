<template>
    <div id="app">
        <Header />
        <TopMenu />
        <div class="main-content mx-auto">
            <RecommendComic/>
        </div>
    </div>
</template>

<script>
import Header from "./components/Header.vue";
import TopMenu from "./components/TopMenu.vue";
import RecommendComic from "./components/RecommendComic.vue";

export default {
    name: "App",
    components: {
        Header,
        TopMenu,
        RecommendComic,
    }
};
</script>

<style scoped>
.main-content {
    width: 75%;
}
</style>
