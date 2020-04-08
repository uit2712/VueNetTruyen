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
                        { title: 'Tất cả', highlight: true, description: 'Tất cả thể loại truyện tranh' },
                        { title: 'Action', description: '' },
                        { title: 'Adult', description: '' },
                        { title: 'Adventure', description: '' },
                        { title: 'Anime', description: '' },
                        { title: 'Chuyển sinh', description: '' },
                        { title: 'Comedy', description: '' },
                        { title: 'Comic', description: '' },
                        { title: 'Cooking', description: '' },
                        { title: 'Cổ đại', highlight: true, description: '' },
                        { title: 'Doujinshi', description: '' },
                        { title: 'Drama', description: '' },
                        { title: 'Đam mỹ', highlight: true, description: '' },
                        { title: 'Ecchi', description: '' },
                        { title: 'Fantasy', description: '' },
                        { title: 'Gender Bender', description: '' },
                        { title: 'Harem', description: '' },
                        { title: 'Historical', description: '' },
                        { title: 'Horror', description: '' },
                        { title: 'Josei', description: '' },
                        { title: 'Live action', description: '' },
                        { title: 'Manga', description: '' },
                        { title: 'Manhua', highlight: true, description: '' },
                        { title: 'Manhwa', description: '' },
                        { title: 'Martial Arts', description: '' },
                        { title: 'Mature', description: '' },
                        { title: 'Mecha', description: '' },
                        { title: 'Mystery', description: '' },
                        { title: 'Ngôn tình', highlight: true, description: '' },
                        { title: 'One shot', description: '' },
                        { title: 'Psychological', description: '' },
                        { title: 'Romance', highlight: true, description: '' },
                        { title: 'School Life', description: '' },
                        { title: 'Sci-fi', description: '' },
                        { title: 'Seinen', description: '' },
                        { title: 'Shoujo', description: '' },
                        { title: 'Shoujo Ai', description: '' },
                        { title: 'Shounen', description: '' },
                        { title: 'Shounen Ai', description: '' },
                        { title: 'Slice of Life', description: '' },
                        { title: 'Smut', description: '' },
                        { title: 'Soft Yaoi', description: '' },
                        { title: 'Soft Yuri', description: '' },
                        { title: 'Sports', description: '' },
                        { title: 'Supernatural', description: '' },
                        { title: 'Thiếu Nhi', description: '' },
                        { title: 'Tragedy', description: '' },
                        { title: 'Trinh thám', description: '' },
                        { title: 'Truyện scan', description: '' },
                        { title: 'Truyện màu', description: '' },
                        { title: 'Webtoon', description: '' },
                        { title: 'Xuyên Không', highlight: true, description: '' },
                    ],
                    columns: 4,
                },
                {                    
                    title: 'Xếp hạng',
                    active: false,
                    subMenu: [
                        { title: 'Top all', icon: '', description: '' },
                        { title: 'Top tháng', icon: '', description: '' },
                        { title: 'Top tuần', icon: '', description: '' },
                        { title: 'Top ngày', icon: '', description: '' },
                        { title: 'Truyện full', icon: '', highlight: true, description: '' },
                        { title: 'Yêu thích', icon: '', description: '' },
                        { title: 'Mới cập nhật', icon: '', description: '' },
                        { title: 'Truyện mới', icon: '', description: '' },
                    ],
                    columns: 2,             
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

.dropdown:hover .dropdown-menu {
    display: block;
}
</style>