<template>
    <li
        :class="['nav-item', item.active ? 'active' : '', isMenuItemContainSubMenu(item) ? 'dropdown' : '']"
    >
        <a
            v-if="!isMenuItemContainSubMenu(item)"
            class="nav-link"
            href="#"
        >
            {{ item.title }}
            <i v-if="item.icon" :class="['fa', `fa-${item.icon}`]"></i>
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
            <div
                class="dropdown-menu"
                aria-labelledby="navbarDropdown"
            >
                <a
                    v-for="(subitem, subindex) in item.subMenu"
                    :key="subindex"
                    class="dropdown-item"
                    href="#"
                >
                    {{ subitem.title }}
                    <i v-if="subitem.icon" :class="['fa', `fa-${subitem.icon}`]"></i>
                </a>
            </div>
        </a>
    </li>
</template>
<script lang="ts">
import Vue from 'vue';
import _ from 'lodash';

export default Vue.extend({
    name: 'top-menu-item',
    props: {
        item: {
            type: Object,
            required: true
        }
    },
    methods: {
        isMenuItemContainSubMenu: function(item) {
            return !_.isNil(item) && !_.isNil(item.subMenu) && item.subMenu.length > 0;
        }
    }
})
</script>
<style scoped>

</style>