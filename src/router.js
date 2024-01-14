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
    { path: '/', name: '首頁', component: Home },
    { path: '/about', name: '關於單車節', component: About },
    { path: '/info', name: '參加資訊', component: Info },
    { path: '/activities', name: '主題活動', component: Activities },
    { path: '/forum', name: '知識論壇', component: Forum },
    { path: '/partners', name: '合作夥伴', component: Partners },
    { path: '/souvenir', name: '紀念品小舖', component: Souvenir },
  ],
});

export default router;