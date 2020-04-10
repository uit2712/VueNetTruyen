<template>
    <div class="recommend-comic mx-auto">
        <p class="title">TRUYỆN ĐỀ CỬ</p>
        <vueper-slides
            fixed-height="500px"
            3d
            :bullets="false"
            autoplay
            class="mx-auto"
        >
            <vueper-slide
                v-for="(slide, i) in slides"
                :key="i"
                :image="slide.image"
            >
                <template v-slot:content>
                    <div class="comic-description fixed-bottom">
                        <h4>{{ slide.comicName }}</h4>
                        <div class="row justify-content-between">
                            <p class="float-left">
                                <i class="fa fa-book"></i>
                                <strong>{{ slide.chapter }}</strong>
                            </p>
                            <p class="float-right">
                                <i class="fa fa-clock-o"></i>
                                <strong>{{ slide.uploadTime | timeDescription }}</strong>
                            </p>
                        </div>
                    </div>
                </template>
            </vueper-slide>
        </vueper-slides>
    </div>
</template>
<script lang="ts">
import Vue from 'vue';
import { VueperSlides, VueperSlide } from 'vueperslides'
import _ from 'lodash';
import moment from 'moment';

export default Vue.extend({
    name: 'recommend-comic',
    components: {
        VueperSlides,
        VueperSlide,
    },
    data: function () {
        return {
            slides: [
                {
                    comicName: 'Doraemon',
                    chapter: 'Chapter 500',
                    image: 'https://japantoday-asset.scdn3.secure.raxcdn.com/img/store/8b/1a/0dec131d7ba72a32e76bb15cb53467a71196/d22901-523-947647-0.jpg',
                    uploadTime: new Date(2020, 4, 10, 3, 0, 0, 0),
                },
                {
                    comicName: 'Nezuko Makado',
                    chapter: 'Chapter 999',
                    image: 'https://pbs.twimg.com/profile_images/1170480893334564864/T2yWCnxy_400x400.jpg',
                    uploadTime: new Date(2020, 4, 10, 9, 30, 0, 0),
                },
                {
                    comicName: 'Shinobu Kocho',
                    chapter: 'Chapter 999',
                    image: 'https://images.wallpapersden.com/image/download/shinobu-kocho-anime-art_68349_1280x1024.jpg',
                    uploadTime: new Date(2020, 3, 2, 10, 0, 0, 0),
                }
            ]
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
        }
    }
})
</script>
<style scoped>
.title {
    font-size: 20px;
    font-weight: bold;
}

i {
    margin-right: 5px;
}

.vueperslides {
    width: 500px;
}

.comic-description {
    width: 100%;
    background-color: black;
    color: white;
    float: inline-end;
    padding-left: 15px;
    padding-right: 15px;
}

.comic-description div {
    padding-left: 15px;
    padding-right: 15px;
}

.recommend-comic {
    max-width: 500px;
}
</style>