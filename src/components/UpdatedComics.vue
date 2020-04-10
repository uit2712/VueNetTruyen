<template>
    <div class="updated-comics">
        <div
            class="comic-info"
            v-for="comic in currentComics"
            :key="comic.id"
        >
            <img :src="comic.image"/>
        </div>
        <b-pagination
            v-model="currentPage"
            pills
            :total-rows="rows"
            :per-page="perPage"
        ></b-pagination>
    </div>
</template>
<script lang="ts">
import Vue from 'vue';
import Comics from '../mock-data/Comics.js';

export default Vue.extend({
    name: 'updated-comics',
    data: function() {
        return {
            perPage: 7,
            currentPage: 1,
            comics: [],
        };
    },
    created: function() {
        this.comics = this.fetchComics();
    },
    methods: {
        fetchComics: function() {
            return Comics
                .map(({ id, comic_name, content, image }) => ({
                    id,
                    comic_name,
                    content,
                    image
                }));
        }
    },
    computed: {
        currentComics () {
            return this.comics.slice(
                (this.currentPage - 1) * this.perPage,
                this.currentPage * this.perPage
            )
        },
        rows() {
            return this.comics.length
        }
    }
});
</script>
<style scoped>
</style>