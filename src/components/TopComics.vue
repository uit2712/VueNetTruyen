<template>
    <b-tab
        :title="title"
        :active="active"
        :title-link-class="[active ? 'border-top' : '', active ? 'border-success' : '']"
    ><p>I'm the first tab</p></b-tab>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: 'top-comics',
    props: {
        title: {
            type: String,
            required: true,
            default: '',
        },
        active: {
            type: Boolean,
            required: false,
            default: false,
        }
    }
})
</script>
<style lang="scss" scoped>
</style>