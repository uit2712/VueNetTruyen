<template>
  <div id="app">
    <Header/>
    <TopMenu/>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import TopMenu from './components/TopMenu.vue';

export default {
  name: 'App',
  components: {
    Header,
    TopMenu,
  }
}
</script>

<style>

</style>
