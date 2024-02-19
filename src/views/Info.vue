<template>
  <Breadcrumb />
  <div class="lg:max-w-[1200px] max-w-[370px] mx-auto">
    <h1 class="lg:text-5xl text-4xl font-bold text-content">參加資訊</h1>
    <TabBar :tabs="tabs" @tab-index="ChangeContent" :currTarget="target" :inTutorial="inTutorial"/>
    <Traffic v-if="target === 0 && path === '/info/traffic'" />
    <Map v-if="target === 1 && path === '/info/map'" />
    <Schedule v-if="target === 2 && path === '/info/schedule'" @tutorial-active="TriggerTutorial"/>
    <MySchedule v-if="target === 3 && path === '/info/mySchedule'" />
  </div>
</template>

<script setup>
import { ref, getCurrentInstance, onUpdated, onMounted } from 'vue';
import Breadcrumb from '../components/Breadcrumb.vue';
import Traffic from './info/Traffic.vue';
import Map from './info/Map.vue';
import Schedule from './info/Schedule.vue';
import MySchedule from './info/MySchedule.vue';
import TabBar from '../components/TabBar.vue';

let instance;
const path = ref("");
const target = ref(0);
const inTutorial = ref(false);

const ChangeTarget = () => {
  if(path.value == '/info/traffic') target.value = 0;
  if(path.value == '/info/map') target.value = 1;
  if(path.value == '/info/schedule') target.value = 2;
  if(path.value == '/info/mySchedule') target.value = 3;
}

onMounted(() => {
  instance = getCurrentInstance();
  path.value = instance.proxy.$route.path;
  ChangeTarget();
});

onUpdated(() => {
  instance = getCurrentInstance();
  path.value = instance.proxy.$route.path;
  ChangeTarget();
});

const tabs = ref([ //TabBar tabs
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M5 11L6.5 6.5H17.5L19 11M17.5 16C17.1022 16 16.7206 15.842 16.4393 15.5607C16.158 15.2794 16 14.8978 16 14.5C16 14.1022 16.158 13.7206 16.4393 13.4393C16.7206 13.158 17.1022 13 17.5 13C17.8978 13 18.2794 13.158 18.5607 13.4393C18.842 13.7206 19 14.1022 19 14.5C19 14.8978 18.842 15.2794 18.5607 15.5607C18.2794 15.842 17.8978 16 17.5 16ZM6.5 16C6.10218 16 5.72064 15.842 5.43934 15.5607C5.15804 15.2794 5 14.8978 5 14.5C5 14.1022 5.15804 13.7206 5.43934 13.4393C5.72064 13.158 6.10218 13 6.5 13C6.89782 13 7.27936 13.158 7.56066 13.4393C7.84196 13.7206 8 14.1022 8 14.5C8 14.8978 7.84196 15.2794 7.56066 15.5607C7.27936 15.842 6.89782 16 6.5 16ZM18.92 6C18.72 5.42 18.16 5 17.5 5H6.5C5.84 5 5.28 5.42 5.08 6L3 12V20C3 20.2652 3.10536 20.5196 3.29289 20.7071C3.48043 20.8946 3.73478 21 4 21H5C5.26522 21 5.51957 20.8946 5.70711 20.7071C5.89464 20.5196 6 20.2652 6 20V19H18V20C18 20.2652 18.1054 20.5196 18.2929 20.7071C18.4804 20.8946 18.7348 21 19 21H20C20.2652 21 20.5196 20.8946 20.7071 20.7071C20.8946 20.5196 21 20.2652 21 20V12L18.92 6Z" fill="#FFF8F2"/></svg>',
    icon_orange: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M5 11L6.5 6.5H17.5L19 11M17.5 16C17.1022 16 16.7206 15.842 16.4393 15.5607C16.158 15.2794 16 14.8978 16 14.5C16 14.1022 16.158 13.7206 16.4393 13.4393C16.7206 13.158 17.1022 13 17.5 13C17.8978 13 18.2794 13.158 18.5607 13.4393C18.842 13.7206 19 14.1022 19 14.5C19 14.8978 18.842 15.2794 18.5607 15.5607C18.2794 15.842 17.8978 16 17.5 16ZM6.5 16C6.10218 16 5.72064 15.842 5.43934 15.5607C5.15804 15.2794 5 14.8978 5 14.5C5 14.1022 5.15804 13.7206 5.43934 13.4393C5.72064 13.158 6.10218 13 6.5 13C6.89782 13 7.27936 13.158 7.56066 13.4393C7.84196 13.7206 8 14.1022 8 14.5C8 14.8978 7.84196 15.2794 7.56066 15.5607C7.27936 15.842 6.89782 16 6.5 16ZM18.92 6C18.72 5.42 18.16 5 17.5 5H6.5C5.84 5 5.28 5.42 5.08 6L3 12V20C3 20.2652 3.10536 20.5196 3.29289 20.7071C3.48043 20.8946 3.73478 21 4 21H5C5.26522 21 5.51957 20.8946 5.70711 20.7071C5.89464 20.5196 6 20.2652 6 20V19H18V20C18 20.2652 18.1054 20.5196 18.2929 20.7071C18.4804 20.8946 18.7348 21 19 21H20C20.2652 21 20.5196 20.8946 20.7071 20.7071C20.8946 20.5196 21 20.2652 21 20V12L18.92 6Z" fill="#FF7B1A"/></svg>',
    title: "交通資訊",
    url: "/info/traffic"
  },
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M15 19L9 16.89V5L15 7.11M20.5 3C20.44 3 20.39 3 20.34 3L15 5.1L9 3L3.36 4.9C3.15 4.97 3 5.15 3 5.38V20.5C3 20.6326 3.05268 20.7598 3.14645 20.8536C3.24021 20.9473 3.36739 21 3.5 21C3.55 21 3.61 21 3.66 20.97L9 18.9L15 21L20.64 19.1C20.85 19 21 18.85 21 18.62V3.5C21 3.36739 20.9473 3.24021 20.8536 3.14645C20.7598 3.05268 20.6326 3 20.5 3Z" fill="#FFF8F2"/></svg>',
    icon_orange: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M15 19L9 16.89V5L15 7.11M20.5 3C20.44 3 20.39 3 20.34 3L15 5.1L9 3L3.36 4.9C3.15 4.97 3 5.15 3 5.38V20.5C3 20.6326 3.05268 20.7598 3.14645 20.8536C3.24021 20.9473 3.36739 21 3.5 21C3.55 21 3.61 21 3.66 20.97L9 18.9L15 21L20.64 19.1C20.85 19 21 18.85 21 18.62V3.5C21 3.36739 20.9473 3.24021 20.8536 3.14645C20.7598 3.05268 20.6326 3 20.5 3Z" fill="#FF7B1A"/></svg>',
    title: "攤位地圖",
    url: "/info/map"
  },
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M19 19H5V8H19M16 1V3H8V1H6V3H5C3.89 3 3 3.89 3 5V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V5C21 3.89 20.1 3 19 3H18V1" fill="#FFF8F2"/></svg>',
    icon_orange: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M19 19H5V8H19M16 1V3H8V1H6V3H5C3.89 3 3 3.89 3 5V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V5C21 3.89 20.1 3 19 3H18V1" fill="#FF7B1A"/></svg>',
    title: "行程表",
    url: "/info/schedule"
  },
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="18" viewBox="0 0 15 18" fill="none"><path d="M12.3623 0H2.3623C1.83187 0 1.32316 0.210714 0.948091 0.585786C0.573018 0.960859 0.362305 1.46957 0.362305 2V18L7.3623 15L14.3623 18V2C14.3623 0.89 13.4623 0 12.3623 0Z" fill="#FFF8F2"/></svg>',
    icon_orange: '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="18" viewBox="0 0 15 18" fill="none"><path d="M12.3623 0H2.3623C1.83187 0 1.32316 0.210714 0.948091 0.585786C0.573018 0.960859 0.362305 1.46957 0.362305 2V18L7.3623 15L14.3623 18V2C14.3623 0.89 13.4623 0 12.3623 0Z" fill="#FF7B1A"/></svg>',
    title: "我的行程",
    url: "/info/mySchedule"
  }
]);


const ChangeContent = (i) => {
  target.value = i;
}

function TriggerTutorial(e){
  inTutorial.value = e;
}
</script>
