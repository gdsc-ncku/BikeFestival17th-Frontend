"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vueRouter = require("vue-router");

var _Home = _interopRequireDefault(require("./views/Home.vue"));

var _About = _interopRequireDefault(require("./views/About.vue"));

var _Info = _interopRequireDefault(require("./views/Info.vue"));

var _Souvenir = _interopRequireDefault(require("./views/Souvenir.vue"));

var _Partners = _interopRequireDefault(require("./views/Partners.vue"));

var _Activities = _interopRequireDefault(require("./views/activities/Activities.vue"));

var _MainStage = _interopRequireDefault(require("./views/activities/MainStage.vue"));

var _DepartmentExpo = _interopRequireDefault(require("./views/activities/DepartmentExpo.vue"));

var _EducationalGuide = _interopRequireDefault(require("./views/activities/EducationalGuide.vue"));

var _UniversityBlueprint = _interopRequireDefault(require("./views/activities/UniversityBlueprint.vue"));

var _LifeCrossroads = _interopRequireDefault(require("./views/activities/LifeCrossroads.vue"));

var _ImmersiveExperience = _interopRequireDefault(require("./views/activities/ImmersiveExperience.vue"));

var _UnworriedTeaHouse = _interopRequireDefault(require("./views/activities/UnworriedTeaHouse.vue"));

var _Forum = _interopRequireDefault(require("./views/forum/Forum.vue"));

var _DepartmentHandbook = _interopRequireDefault(require("./views/forum/DepartmentHandbook.vue"));

var _FeaturedArticles = _interopRequireDefault(require("./views/forum/FeaturedArticles.vue"));

var _LetterToHighSchoolStudents = _interopRequireDefault(require("./views/forum/LetterToHighSchoolStudents.vue"));

var _departmentHandbook = _interopRequireDefault(require("./data/departmentHandbook.json"));

var _featuredArticles = _interopRequireDefault(require("./data/featuredArticles.json"));

var _letterToHighSchoolStudents = _interopRequireDefault(require("./data/letterToHighSchoolStudents.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var routes = [{
  path: '/',
  name: '首頁',
  component: _Home["default"]
}, {
  path: '/about',
  name: '關於單車節',
  component: _About["default"]
}, {
  path: '/info/traffic',
  name: '交通資訊',
  component: _Info["default"]
}, {
  path: '/info/map',
  name: '攤位地圖',
  component: _Info["default"]
}, {
  path: '/info/schedule',
  name: '行程表',
  component: _Info["default"]
}, {
  path: '/info/mySchedule',
  name: '我的行程',
  component: _Info["default"]
}, {
  path: '/activities',
  name: '主題活動',
  component: _Activities["default"]
}, {
  path: '/activities/mainStage',
  name: '主舞台〈曦瓣〉',
  component: _MainStage["default"]
}, {
  path: '/activities/departmentExpo',
  name: '科系博覽',
  component: _DepartmentExpo["default"]
}, {
  path: '/activities/educationalGuide',
  name: '升學指南',
  component: _EducationalGuide["default"]
}, {
  path: '/activities/universityBlueprint',
  name: '大學藍圖',
  component: _UniversityBlueprint["default"]
}, {
  path: '/activities/lifeCrossroads',
  name: '人生叉路口',
  component: _LifeCrossroads["default"]
}, {
  path: '/activities/immersiveExperience',
  name: '沈浸式體驗',
  component: _ImmersiveExperience["default"]
}, {
  path: '/activities/unworriedTeaHouse',
  name: '解憂茶軒',
  component: _UnworriedTeaHouse["default"]
}, {
  path: '/forum',
  name: '知識論壇',
  component: _Forum["default"]
}, {
  path: '/forum/departmentHandbook',
  name: '科系手冊',
  component: _DepartmentHandbook["default"]
}, {
  path: '/forum/featuredArticles',
  name: '專欄文章',
  component: _FeaturedArticles["default"]
}, {
  path: '/forum/letterToHighSchoolStudents',
  name: '給高中生的一封信',
  component: _LetterToHighSchoolStudents["default"]
}, {
  path: '/partners',
  name: '合作夥伴',
  component: _Partners["default"]
}, {
  path: '/souvenir',
  name: '紀念品小舖',
  component: _Souvenir["default"]
}]; // add routes for each department under "departmentHandbook" page

_departmentHandbook["default"].map(function (college) {
  college.departments.map(function (department) {
    routes.push({
      path: '/forum/departmentHandBook/' + department.id,
      name: department.name,
      component: _DepartmentHandbook["default"]
    });
  });
}); // add routes for each article under "featuredArticles" page


_featuredArticles["default"].map(function (article) {
  routes.push({
    path: '/forum/featuredArticles/' + article.id,
    name: article.title,
    component: _FeaturedArticles["default"]
  });
}); // add routes for each letter under "letterToHighSchoolStudents" page


_letterToHighSchoolStudents["default"].map(function (letter) {
  routes.push({
    path: '/forum/letterToHighSchoolStudents/' + letter.id,
    name: letter.title,
    component: _LetterToHighSchoolStudents["default"]
  });
});

var router = (0, _vueRouter.createRouter)({
  history: (0, _vueRouter.createWebHistory)('/BikeFestival17th-Frontend/'),
  routes: routes
});
var _default = router;
exports["default"] = _default;