"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vueRouter = require("vue-router");

var _Home = _interopRequireDefault(require("./views/Home.vue"));

var _About = _interopRequireDefault(require("./views/About.vue"));

var _Info = _interopRequireDefault(require("./views/Info.vue"));

var _Activities = _interopRequireDefault(require("./views/Activities.vue"));

var _Forum = _interopRequireDefault(require("./views/Forum.vue"));

var _Partners = _interopRequireDefault(require("./views/Partners.vue"));

var _Souvenir = _interopRequireDefault(require("./views/Souvenir.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = (0, _vueRouter.createRouter)({
  history: (0, _vueRouter.createWebHistory)(),
  routes: [{
    path: '/',
    name: '首頁',
    component: _Home["default"]
  }, {
    path: '/about',
    name: '關於單車節',
    component: _About["default"]
  }, {
    path: '/info',
    name: '參加資訊',
    component: _Info["default"]
  }, {
    path: '/activities',
    name: '主題活動',
    component: _Activities["default"]
  }, {
    path: '/forum',
    name: '知識論壇',
    component: _Forum["default"]
  }, {
    path: '/partners',
    name: '合作夥伴',
    component: _Partners["default"]
  }, {
    path: '/souvenir',
    name: '紀念品小舖',
    component: _Souvenir["default"]
  }]
});
var _default = router;
exports["default"] = _default;