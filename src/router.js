import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue';
import About from './views/About.vue';
import Info from './views/Info.vue';
import Activities from './views/Activities.vue';
import Forum from './views/Forum.vue';
import Partners from './views/Partners.vue';
import Souvenir from './views/Souvenir.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/info', component: Info },
    { path: '/activities', component: Activities },
    { path: '/forum', component: Forum },
    { path: '/partners', component: Partners },
    { path: '/souvenir', component: Souvenir },
  ],
});

export default router;