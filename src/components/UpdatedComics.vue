<template>
    <div class="updated-comics col-xl-8 col-lg-8 col-md-6 col-sm-12 col-12">
        <p class="title">TRUYỆN MỚI CẬP NHẬT</p>
        <div class="row mx-auto">
            <div
                class="comic-info mx-auto"
                v-for="comic in currentComics"
                :key="comic.id"
            >
                <div class="image-container">
                    <img
                        v-if="isImageExists(comic.image)"
                        class="comic-img"
                        :src="comic.image"
                    />
                    <img
                        v-if="!isImageExists(comic.image)"
                        class="comic-img"
                        src="../assets/logo-nettruyen.png"
                    />
                    <span class="bottom-left">{{ comic.comic_name }}</span>
                    <div class="overlay">
                        <div class="comic-description">
                            {{ comic.content | short(400) }}<br/>
                            <a href="#">Xem thêm...</a>
                        </div>
                    </div>
                </div>
                <div
                    class="chapter-info"
                    v-for="(chapter, chapterIndex) in getRecent3Chapters(comic.id)"
                    :key="chapterIndex"
                >
                    <span class="text-left d-table-cell">{{ chapter.chapter_name }}</span>
                    <span class="text-right d-table-cell"><em>{{ new Date(chapter.upload_date) | timeDescription }}</em></span>
                </div>
            </div>
        </div>
        <div class="d-flex">
            <b-pagination
                v-model="currentPage"
                pills
                :total-rows="rows"
                :per-page="perPage"
                 class="mx-auto justify-content-center"
            ></b-pagination>
        </div>
        
    </div>
</template>
<script lang="ts">
import Vue from 'vue';
import Comics from '../mock-data/Comics.js';
import _ from 'lodash';
import moment from 'moment';

export default Vue.extend({
    name: 'updated-comics',
    data: function() {
        return {
            perPage: 18,
            currentPage: 1,
        };
    },
    methods: {
        getRecent3Chapters: function(id) {
            if (_.isNil(id))
                return [];

            let comic = this.comics.find(c => c.id === id);
            if (_.isNil(comic))
                return [];
                
            let sortedComics = comic.chapters.sort((a, b) => {
                let dateA = new Date(a.upload_date);
                let dateB = new Date(b.upload_date);
                return dateA.getTime() - dateB.getTime();
            });
            return sortedComics.slice(0, 3);
        },
        isImageExists: function(image_url) {
            var http = new XMLHttpRequest();

            http.open('HEAD', image_url, false);
            http.send();

            return http.status != 404;
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
        },
        comics() {
            return Comics
        }
    },
    filters: {
        timeDescription: function(date) {
            if (!_.isDate(date))
                return '';

            let now = moment(new Date());
            let uploadTime = moment(date);
            let days = now.date() - uploadTime.date();
            if (days > 7) {
                return moment(date).format('DD/MM/YYYY');
            }

            if (days > 0) {
                return `${days} ngày trước`;
            }

            let hours = now.hour() - uploadTime.hour();
            if (hours > 0)
                return `${hours} giờ trước`;

            let minutes = (now.hour()*60 + now.minute()) - (uploadTime.hour()*60 + uploadTime.minute());
            if (minutes > 0)
                return `${minutes} phút trước`;

            return 'vừa mới đây';
        },
        short: function(text, numCharacters) {
            if (_.isNil(text) || !_.isString(text)
            || _.isNil(numCharacters) || !_.isNumber(numCharacters)
            || numCharacters <= 0)
                return '';

            if (text.length <= numCharacters)
                return text;

            return text.substr(0, numCharacters) + '...';
        }
    }
});
</script>
<style scoped>
.comic-info, .comic-info div {
    margin-right: 10px;
    overflow-wrap: break-word;
    width: 255px;
}

.comic-img {
    height: 360px;
    width: inherit;
    display: block;
}

.chapter-info {
    margin-left: 0px!important;
    width: inherit;
    display: table;
    max-height: 425px;
    margin-bottom: 10px;
}

.chapter-info > *, .comic-description {
    font-size: 13px!important;
}

.comic-description {
    padding: 10px;
    overflow-wrap: break-word;
}

.updated-comics > .row{
    width: inherit;
}

/* .updated-comics {
    max-width: 740px;
} */

.bottom-left {
    position: absolute;
    bottom: 0px;
    left: 0px;
    background-color: black;
    width: inherit;
}

.image-container {
    position: relative;
    text-align: center;
    color: white;
}

.overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color:  rgba(0, 0, 0, 0.7);
    overflow: hidden;
    width: 100%;
    height: 0;
    transition: .5s ease;
    cursor: pointer;
}

.image-container:hover .overlay {
    height: 100%;
}

.comic-description {
    color: white;
    font-size: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;
    text-align: justify;
}

.title {
    font-size: 20px;
    font-weight: bold;
}
</style>