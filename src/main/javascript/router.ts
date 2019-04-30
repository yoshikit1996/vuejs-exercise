import Vue from 'vue';
import VueRouter from 'vue-router';
import Vote from './components/Vote.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        { path: '/', component: Vote },
    ],
});

export default router;
