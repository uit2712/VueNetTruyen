<template>
    <div class="header">
        <div class="logo center-block">
            <img src="../assets/logo-nettruyen.png"/>
        </div>
        <div class="input-group search-container">
            <input v-model="searchValue" class="form-control" placeholder="Tìm kiếm...">
            <div class="input-group-btn col-5">
                <button class="btn btn-default" type="submit">
                    <i class="glyphicon glyphicon-search"></i>
                </button>
            </div>
        </div>
        <div class="user-container center-block">
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
    name: 'top-header',
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
.header {
    width: 100%;
    display: flex;
    height: 50px;
}

.search-container {
    flex-basis: 40%;
}

.user-container {
    vertical-align: middle;
    height: 100%;
}
</style>