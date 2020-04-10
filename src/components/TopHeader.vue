<template>
    <div class="top-header d-table">
        <div class="logo d-table-cell align-middle">
            <img class="float-right" src="../assets/logo-nettruyen.png"/>
        </div>
        <div class="search-container input-group mx-auto">
            <input
                v-model="searchValue"
                class="form-control"
                type="text"
                placeholder="Search"
                aria-label="Search"
            />
            <div class="input-group-append">
                <span class="input-group-text">
                    <i class="fa fa-search text-grey" aria-hidden="true"></i>
                </span>
            </div>
        </div>
        <div class="user-container d-table-cell align-middle">
            <span>
            <a href="javascript;;">Đăng nhập</a>
            /<a href="javascript;;">Đăng ký</a>
            </span>
        </div>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'top-header-1111',
    data: function() {
        return {
            searchValue: '',
        }
    },
    watch: {
        searchValue: function() {
            console.log(this.searchValue);
        }
    }
})
</script>
<style scoped>
.top-header {
    width: 100%;
    display: flex;
    height: 50px;
    background-color: black;
}

.user-container {
    vertical-align: middle;
    height: 100%;
}

.user-container, .user-container a {
    color: white;
}

.logo, .user-container {
    width: 33%;
}

.search-container {
    width: 70%;
    height: 100%;
}

input.form-control, span.input-group-text {
    height: 40px!important;
}
</style>