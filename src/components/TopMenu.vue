<template>
    <div class="top-menu">
        <nav class="navbar navbar-expand-lg navbar navbar-dark bg-primary">
            <div class="collapse navbar-collapse">
                <div class="navbar-nav">
                    <li
                        v-for="(item, index) in menu"
                        :key="index"
                        :class="['nav-item', item.active ? 'active' : '', isMenuItemContainSubMenu(item.subMenu) ? 'dropdown': '']"
                        v-on:click="selectMenuItem(index)"
                    >
                        <a
                            href="#"
                            :class="['nav-link', isMenuItemContainSubMenu(item) ? 'dropdown-toggle': '']"
                            :id="'navbarDropdown-' + index"
                            :role="isMenuItemContainSubMenu(item) ? 'button' : null"
                            :data-toggle="isMenuItemContainSubMenu(item) ? 'dropdown' : null"
                            :aria-haspopup="isMenuItemContainSubMenu(item) ? true : null"
                            :aria-expanded="isMenuItemContainSubMenu(item) ? false : null"
                        >
                            <i v-if="item.icon" :class="['fa', `fa-${item.icon}`]"></i>
                            {{ item.title | upperCase }}
                        </a>
                        <div
                            v-if="isMenuItemContainSubMenu(item)"
                            class="dropdown-menu"
                            :aria-labelledby="'navbarDropdown-' + index"
                        >
                            <a
                                v-for="(subItem, subIndex) in item.subMenu"
                                :key="subIndex"
                                class="dropdown-item"
                            >
                                {{ subItem.title }}
                            </a>
                        </div>
                    </li>
                </div>
            </div>
        </nav>
    </div>
</template>
<script lang="ts">
import Vue from 'vue';
import _ from 'lodash'

export default Vue.extend({
    name: 'top-menu',
    data: function () {
        return {
            menu: [
                { icon: 'home', active: true },
                { title: 'Hot' },
                { title: 'Theo dõi' },
                { title: 'Lịch sử' },
                {                    title: 'Thể loại', subMenu: [
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
                    ]                },
                {                    title: 'Xếp hạng', subMenu: [
                        { title: 'Top all', icon: '' },
                        { title: 'Top tháng', icon: '' },
                        { title: 'Top tuần', icon: '' },
                        { title: 'Top ngày', icon: '' },
                        { title: 'Truyện full', icon: '', highlight: true },
                        { title: 'Yêu thích', icon: '' },
                        { title: 'Mới cập nhật', icon: '' },
                        { title: 'Truyện mới', icon: '' },
                    ]                },
                { title: 'Tìm truyện' },
                { title: 'Con gái' },
                { title: 'Con trai' },
                { title: 'Group' },
                { title: 'Góp ý' },
            ],
            selectedMenuItem: null,
        }
    },
    mounted: function () {
        if (this.menu.length > 0) {
            this.selectedMenuItem = this.menu[0];
        }
    },
    methods: {
        selectMenuItem: function (index) {
            this.menu.forEach((item, i) => {
                if (i === index) {
                    item.active = true;
                } else {
                    if (item.active)
                        item.active = false;
                }
            })
            this.$forceUpdate();
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