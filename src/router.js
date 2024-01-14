import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue';
import About from './views/About.vue';
import Info from './views/Info.vue';
import Souvenir from './views/Souvenir.vue';
import Partners from './views/Partners.vue';

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

const routes = [
  { path: '/', name: '首頁', component: Home },
  { path: '/about', name: '關於單車節', component: About },
  { path: '/info/traffic', name: '交通資訊', component: Info },
  { path: '/info/map', name: '攤位地圖', component: Info },
  { path: '/info/schedule', name: '行程表', component: Info },
  { path: '/info/mySchedule', name: '我的行程', component: Info },
  { path: '/activities', name: '主題活動', component: Activities },
  { path: '/activities/mainStage', name: '主舞台〈曦瓣〉', component: MainStage },
  { path: '/activities/departmentExpo', name: '科系博覽', component: DepartmentExpo },
  { path: '/activities/educationalGuide', name: '升學指南', component: EducationalGuide },
  { path: '/activities/universityBlueprint', name: '大學藍圖', component: UniversityBlueprint },
  { path: '/activities/lifeCrossroads', name: '人生叉路口', component: LifeCrossroads },
  { path: '/activities/immersiveExperience', name: '沈浸式體驗', component: ImmersiveExperience },
  { path: '/activities/unworriedTeaHouse', name: '解憂茶軒', component: UnworriedTeaHouse },
  { path: '/forum', name: '知識論壇', component: Forum },
  { path: '/forum/departmentHandbook', name: '科系手冊', component: DepartmentHandbook },
  { path: '/forum/featuredArticles', name: '專欄文章', component: FeaturedArticles },
  { path: '/forum/letterToHighSchoolStudents', name: '給高中生的一封信', component: LetterToHighSchoolStudents },
  { path: '/partners', name: '合作夥伴', component: Partners },
  { path: '/souvenir', name: '紀念品小舖', component: Souvenir },
];

// add routes for each department under "departmentHandbook" page
departmentHandbookData.map((college) => {
  college.departments.map((department) => {
    routes.push({
      path: '/forum/departmentHandBook/' + department.id,
      name: department.name,
      component: DepartmentHandbook
    });
  });
});

// add routes for each article under "featuredArticles" page
featuredArticlesData.map((article) => {
  routes.push({
    path: '/forum/featuredArticles/' + article.id,
    name: article.title,
    component: FeaturedArticles
  });
});

// add routes for each letter under "letterToHighSchoolStudents" page
letterToHighSchoolStudentsData.map((letter) => {
  routes.push({
    path: '/forum/letterToHighSchoolStudents/' + letter.id,
    name: letter.title,
    component: LetterToHighSchoolStudents
  });
});

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;