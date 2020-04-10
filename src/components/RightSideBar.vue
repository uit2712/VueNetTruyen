<template>
    <div class="right-side-bar">
        <div>
            <b-tabs
                content-class="mt-3"
            >
                <top-comics
                    v-for="(tab, index) in tabs"
                    :key="index"
                    :title="tab.title"
                    :active="tab.active"
                ></top-comics>
            </b-tabs>
        </div>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import TopComics from './TopComics.vue';

export default Vue.extend({
    name: 'right-side-bar',
    components: {
        TopComics,
    },
    data: function() {
        return {
            tabs: [
                { title: 'Top Tháng', active: true, },
                { title: 'Top Tuần', active: false, },
                { title: 'Top Ngày', active: false, },
            ]
        }
    }
})
</script>
<style scoped>
.nav-tabs.nav-link.active {
    border-top: red solid 2px!important;
}
</style>