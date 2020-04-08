<template>
    <div class="top-menu">
        <nav class="navbar navbar-expand-lg navbar navbar-dark bg-primary">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <TopMenuItem
                        v-for="(item, index) in menu"
                        v-on:click.native="selectMenuItem(index)"
                        :key="index"
                        :item="item"
                    />
                </ul>
            </div>
        </nav>
    </div>
</template>
<script lang="ts">
import Vue from 'vue';
import _ from 'lodash';
import TopMenuItem from './TopMenuItem.vue';

export default Vue.extend({
    name: 'top-menu',
    components: {
        TopMenuItem,
    },
    data: function () {
        return {
            menu: [
                { icon: 'home', active: true },
                { title: 'Hot', active: false },
                { title: 'Theo dõi', active: false },
                { title: 'Lịch sử', active: false },
                {   
                    title: 'Thể loại',
                    active: false,
                    subMenu: [
                        { title: 'Tất cả', highlight: true },
                        { title: 'Action' },
                        { title: 'Adult' },
                        { title: 'Adventure' },
                        { title: 'Anime' },
                        { title: 'Chuyển sinh' },
                        { title: 'Comedy' },
                        { title: 'Comic' },
                        { title: 'Cooking' },
                        { title: 'Cổ đại', highlight: true },
                        { title: 'Doujinshi' },
                        { title: 'Drama' },
                        { title: 'Đam mỹ', highlight: true },
                        { title: 'Ecchi' },
                        { title: 'Fantasy' },
                        { title: 'Gender Bender' },
                        { title: 'Harem' },
                        { title: 'Historical' },
                        { title: 'Horror' },
                        { title: 'Josei' },
                        { title: 'Live action' },
                        { title: 'Manga' },
                        { title: 'Manhua', highlight: true },
                        { title: 'Manhwa' },
                        { title: 'Martial Arts' },
                        { title: 'Mature' },
                        { title: 'Mecha' },
                        { title: 'Mystery' },
                        { title: 'Ngôn tình', highlight: true },
                        { title: 'One shot' },
                        { title: 'Psychological' },
                        { title: 'Romance', highlight: true },
                        { title: 'School Life' },
                        { title: 'Sci-fi' },
                        { title: 'Seinen' },
                        { title: 'Shoujo' },
                        { title: 'Shoujo Ai' },
                        { title: 'Shounen' },
                        { title: 'Shounen Ai' },
                        { title: 'Slice of Life' },
                        { title: 'Smut' },
                        { title: 'Soft Yaoi' },
                        { title: 'Soft Yuri' },
                        { title: 'Sports' },
                        { title: 'Supernatural' },
                        { title: 'Thiếu Nhi' },
                        { title: 'Tragedy' },
                        { title: 'Trinh thám' },
                        { title: 'Truyện scan' },
                        { title: 'Truyện màu' },
                        { title: 'Webtoon' },
                        { title: 'Xuyên Không', highlight: true },
                    ]
                },
                {                    
                    title: 'Xếp hạng',
                    active: false,
                    subMenu: [
                        { title: 'Top all', icon: '' },
                        { title: 'Top tháng', icon: '' },
                        { title: 'Top tuần', icon: '' },
                        { title: 'Top ngày', icon: '' },
                        { title: 'Truyện full', icon: '', highlight: true },
                        { title: 'Yêu thích', icon: '' },
                        { title: 'Mới cập nhật', icon: '' },
                        { title: 'Truyện mới', icon: '' },
                    ]                
                },
                { title: 'Tìm truyện', active: false },
                { title: 'Con gái', active: false },
                { title: 'Con trai', active: false },
                { title: 'Group', active: false },
                { title: 'Góp ý', active: false },
            ],
        }
    },
    methods: {
        selectMenuItem: function (index) {
            this.menu.forEach((item, i) => {
                if (i === index) {
                    item.active = true;
                } else {
                    if (item.active) {
                        item.active = false;
                    }
                }
            });
        },
        isMenuItemContainSubMenu: function(item) {
            return !_.isNil(item) && !_.isNil(item.subMenu) && item.subMenu.length > 0;
        }
    },
    filters: {
        upperCase: function (value) {
            if (!value) return '';

            value = value.toString();
            return value.toUpperCase();
        }
    }
})
</script>
<style scoped>
.navbar-nav {
    margin: 0 auto;
    font-size: 20px;
}
</style>