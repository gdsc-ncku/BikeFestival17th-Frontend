import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue';
import About from './views/About.vue';
import Info from './views/Info.vue';
import Activities from './views/activities/Activities.vue';
import MainStage from './views/activities/MainStage.vue';
import DepartmentExpo from './views/activities/DepartmentExpo.vue';
import EducationalGuide from './views/activities/EducationalGuide.vue';
import UniversityBlueprint from './views/activities/UniversityBlueprint.vue';
import LifeCrossroads from './views/activities/LifeCrossroads.vue';
import ImmersiveExperience from './views/activities/ImmersiveExperience.vue';
import UnworriedTeaHouse from './views/activities/UnworriedTeaHouse.vue';
import Forum from './views/forum/Forum.vue';
import DepartmentHandbook from './views/forum/DepartmentHandbook.vue';
import FeaturedArticles from './views/forum/FeaturedArticles.vue';
import LetterToHighSchoolStudents from './views/forum/LetterToHighSchoolStudents.vue';
import departmentHandbookData from "./data/departmentHandbook.json";
import featuredArticlesData from "./data/featuredArticles.json";
import letterToHighSchoolStudentsData from "./data/letterToHighSchoolStudents.json";
import Souvenir from './views/Souvenir.vue';
import Partners from './views/Partners.vue';
import NotFound from './views/NotFound.vue';

const routes = [
  { path: '/', name: '首頁', component: Home },
  { path: '/about', name: '關於單車節', component: About },
  { path: '/info/traffic', name: '交通資訊', component: Info },
  { path: '/info/map', name: '攤位地圖', component: Info },
  { path: '/info/schedule', name: '行程表', component: Info },
  { path: '/info/mySchedule', name: '我的行程', component: Info },
  {
    path: '/activities',
    name: '主題活動 / ',
    children: [
      {
        path: '',
        component: Activities
      },
      {
        path: 'mainStage',
        name: '主舞台〈曦瓣〉 / ',
        component: MainStage,
        children: [{ path: ':activity', component: MainStage }],
      },
      {
        path: 'departmentExpo',
        name: '科系博覽 / ',
        component: DepartmentExpo,
        children: [{ path: ':activity', component: DepartmentExpo }],
      },
      {
        path: 'educationalGuide',
        name: '升學指南 / ',
        component: EducationalGuide,
        children: [{ path: ':activity', component: EducationalGuide }],
      },
      {
        path: 'universityBlueprint',
        name: '大學藍圖 / ',
        component: UniversityBlueprint,
        children: [{ path: ':activity', component: UniversityBlueprint }],
      },
      {
        path: 'lifeCrossroads',
        name: '人生叉路口 / ',
        component: LifeCrossroads,
        children: [{ path: ':activity', component: LifeCrossroads }],
      },
      {
        path: 'immersiveExperience',
        name: '沈浸式體驗 / ',
        component: ImmersiveExperience,
        children: [{ path: ':activity', component: ImmersiveExperience }],
      },
      {
        path: 'unworriedTeaHouse',
        name: '解憂茶軒 / ',
        component: UnworriedTeaHouse,
        children: [{ path: ':activity', component: UnworriedTeaHouse }],
      },
    ]
  },
  {
    path: '/forum',
    name: '知識論壇 / ',
    children: [
      {
        path: '',
        component: Forum
      },
      {
        path: 'featuredArticles',
        name: '專欄文章 / ',
        component: FeaturedArticles,
        children: [{ path: ':article', component: FeaturedArticles }],
      },
      {
        path: 'departmentHandbook',
        name: '科系手冊 / ',
        component: DepartmentHandbook,
        children: [{ path: ':department', component: DepartmentHandbook }],
      },
      {
        path: 'letterToHighSchoolStudents',
        name: '給高中生的一封信 / ',
        component: LetterToHighSchoolStudents,
        children: [{ path: ':letter', component: LetterToHighSchoolStudents }],
      },
    ]
  },
  { path: '/partners', name: '合作夥伴', component: Partners },
  { path: '/souvenir', name: '紀念品小舖', component: Souvenir },
  { path: '/:pathMatch(.*)*', name: '404', component: NotFound},
];

const router = createRouter({
  history: createWebHistory('/BikeFestival17th-Frontend/'),
  routes,
  scrollBehavior() {
    return {
      top: 0,
      behavior: 'instant'}
  },
});

export default router;