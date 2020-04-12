import Vue from 'vue'
import Home from './screens/Home.vue'
import { BootstrapVue, IconsPlugin, TabsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router'
import App from './App.vue'

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(TabsPlugin);

const routes = [
    { path: '/', component: Home }
]

const router = new VueRouter({
    routes,
})

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
