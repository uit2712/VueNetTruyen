<template>
    <li
        :class="['nav-item', item.active ? 'active' : '', isMenuItemContainSubMenu(item) ? 'dropdown' : '']"
    >
        <a
            v-if="!isMenuItemContainSubMenu(item)"
            class="nav-link"
            href="#"
        >
            <i v-if="item.icon" :class="['fa', `fa-${item.icon}`]"></i>
            {{ item.title }}
        </a>
        <a
            v-if="isMenuItemContainSubMenu(item)"
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
        >
            {{ item.title }}
        </a>
        <ul
            v-if="isMenuItemContainSubMenu(item)"
            class="dropdown-menu multi-column columns-4"
            aria-labelledby="navbarDropdown"
        >
            <div class="row">
                <div
                    v-for="(subItems, subItemsIndex) in subMenuItemColumns"
                    :key="subItemsIndex"
                    :class="[`col-md-${12/item.columns}`]"
                >
                    <ul class="multi-column-dropdown">
                        <li
                            v-for="(subItem, subIndex) in subItems"
                            :key="subIndex"
                            class="dropdown-item"
                            v-on:mouseover="showMenuItemInfo(subItem.description)"
                            v-on:mouseleave="hideMenuItemInfo()"
                        >
                            <a
                                href="#"
                                :class="[subItem.highlight ? 'highlight' : '']"
                            >
                                <i
                                    v-if="!isNullOrEmpty(subItem.icon)"
                                    :class="['fa', `fa-${subItem.icon}`]"
                                >
                                </i>
                                {{ subItem.title }}
                            </a>
                        </li>
                        
                    </ul>
                </div>
            </div>
            <span id="more-info"></span>
        </ul>
    </li>
</template>
<script lang="ts">
import Vue from 'vue';
import _ from 'lodash';

export default Vue.extend({
    name: 'top-menu-item',
    data: function() {
        return {
            subMenuItemColumns: [],
        }
    },
    props: {
        item: {
            type: Object,
            required: true
        }
    },
    methods: {
        isMenuItemContainSubMenu: function(item) {
            return !_.isNil(item) && !_.isNil(item.subMenu) && item.subMenu.length > 0;
        },
        showMenuItemInfo: function(description) {
            let moreInfoEl = document.getElementById('more-info');
            if (!_.isNil(moreInfoEl))
                moreInfoEl.innerHTML = description;
        },
        hideMenuItemInfo: function() {
            let moreInfoEl = document.getElementById('more-info');
            if (!_.isNil(moreInfoEl))
                moreInfoEl.innerHTML = '';
        },
        isNullOrEmpty: function(text) {
            return _.isNil(text) || text.trim() === '';
        },
    },
    created: function() {
        if (!_.isNil(this.item.subMenu)
        && _.isArray(this.item.subMenu)
        && !_.isNil(this.item.columns)
        && this.item.columns > 0) {
            let totalPerColumns
                = this.item.subMenu.length / this.item.columns;
            this.subMenuItemColumns
                = _.chunk(this.item.subMenu, totalPerColumns);
        }
    }
})
</script>
<style scoped>
.highlight {
    color: red!important;
    font-weight: bold!important;
}

.dropdown-item {
    padding: unset!important;
}

#more-info {
    margin-left: 15px;
    margin-right: 15px;
    box-decoration-break: clone;
}

.dropdown-menu {
	min-width: 200px;
}
.dropdown-menu.columns-2 {
	min-width: 400px;
}
.dropdown-menu.columns-3 {
	min-width: 600px;
}
.dropdown-menu.columns-4 {
	min-width: 800px;
}
.dropdown-menu li a {
	padding: 5px 15px;
	font-weight: 300;
}
.multi-column-dropdown {
	list-style: none;
    margin: 0px;
    padding: 0px;
}
.multi-column-dropdown li a {
	display: block;
	clear: both;
	line-height: 1.428571429;
	color: #333;
	white-space: normal;
}
.multi-column-dropdown li a:hover {
	text-decoration: none;
	color: #262626;
	background-color: #999;
}
 
@media (max-width: 767px) {
	.dropdown-menu.multi-column {
		min-width: 240px !important;
		overflow-x: hidden;
	}
}
</style>