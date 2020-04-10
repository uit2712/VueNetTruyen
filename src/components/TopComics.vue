<template>
    <b-tab :active="active">
        <template v-slot:title>
            <b-spinner
                v-if="active"
                type="grow"
                small
                variant="light"
            ></b-spinner>
            <strong> <span :class="[active ? 'text-light' : '']">{{ tab.title }}</span></strong>
        </template>
        <div class="top-comic-container">
            <div
                v-for="(comic, i) in tab.comics"
                :key="i"
                :class="['row', i < tab.comics.length - 1 ? 'border-bottom' : '']"
            >
                <div class="col-3">
                    <span :class="['numeric', `${numericColor(i+1)}`]">{{ i+1 }}</span>
                    <img :src="comic.image"/>
                </div>
                <div class="col-9">
                    <span>{{ comic.comic_name }}</span>
                    <div class="d-table" style="width:200px!important">
                        <span class="d-table-cell text-left">{{ comic.last_chapter }}</span>
                        <span class="d-table-cell text-right">{{ comic.total_views | formatNumber }}</span>
                    </div>
                </div>
            </div>
        </div>
    </b-tab>
</template>
<script lang="ts">
import Vue from 'vue'
import _ from 'lodash';

export default Vue.extend({
    name: 'top-comics',
    props: {
        tab: {
            type: Object,
            required: true,
        },
        active: {
            type: Boolean,
            required: false,
            default: false,
        }
    },
    methods: {
        numericColor: function(numeric) {
            if (_.isNil(numeric) || !_.isNumber(numeric))
                return '';

            switch(numeric) {
                case 1: return 'text-primary';
                case 2: return 'text-success';
                case 3: return 'text-danger';
                default: return '';
            }
        }
    },
    filters: {
        formatNumber: function(num) {
            if (_.isNil(num) || !_.isNumber(num))
                return '';

            return num.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
        }
    }
})
</script>
<style scoped>
img {
    width: 60px;
    height: 60px;
    object-fit: cover;
    border-radius: 100%;
}

.numeric {
    font-size: 20px;
    margin-right: 5px;
}

.top-comic-container > .row {
    margin-left: 0px!important;
    margin-right: 0px!important;
    margin-bottom: 5px!important;
    padding: 5px;
}

.top-comic-container > .row:hover {
    cursor: pointer;
}
</style>