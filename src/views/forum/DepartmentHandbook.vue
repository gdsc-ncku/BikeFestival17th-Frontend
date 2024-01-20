<template>
  <Breadcrumb />
  <div v-if="$route.params.department === undefined" class="sm:ml-[29.94rem] sm:mr-[9.75rem] mx-11">
    <div class="text-5xl font-bold text-center mb-[2.62rem] max-sm:hidden">科系手冊</div>
    <div v-for="d in departmentHandbook" class="sm:flex my-12 gap-[1.44rem] sm:h-60 max-sm:mt-0">
      <img :src="d.photoURL" class="h-full w-[21.875rem] bg-[#ADADAD] sm:block hidden object-cover">
      <div class="flex-1">
        <div class="text-2xl font-bold">{{ d.college_name }}</div>
        <img :src="d.photoURL" class="h-[8.375rem] w-full bg-[#D9D9D9] sm:hidden block rounded-[0.3125rem] my-3 object-cover">
        <div class="sm:my-5 my-2 sm:text-base text-xs">{{ d.description }}</div>
        <div class="flex flex-wrap gap-4 sm:text-base text-xs">
          <RouterLink v-for="v in d.departments" :to="`/forum/departmentHandbook/${v.id}`"
            class="text-primary-900 underline">
            {{ v.name }}
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="flex flex-col gap-5 sm:ml-[27.37rem] sm:mr-[8.94rem] mx-9 mb-24">
    <div class="sm:text-[2.5rem] text-2xl text-content font-bold max-sm:text-center">{{ selectedData.name }}</div>
    <img class="sm:hidden object-cover object-center w-full h-[5.5rem] bg-[#D9D9D9]" :src="selectedData.photoURL" >
    <div class="text-xs">{{ selectedData.description }}</div>
    <div>
      <a class="text-content text-xl w-auto cursor-pointer underline" target="_blank" :href="selectedData.pdfEmbeddedURL.replace('preview', 'view')">下載PDF</a>
    </div>
    <iframe class="h-[37.0625rem]" :src="selectedData.pdfEmbeddedURL"></iframe>
    <div class="text-2xl text-content font-bold max-sm:text-center">相關活動行程</div>
    <RouterLink class="text-primary-900 text-right sm:text-2xl text-base font-bold underline" to="/forum/departmentHandbook/" >回到系院列表</RouterLink>
  </div>
  <SideBar title="科系手冊" :list="sideBarData"
    class="sm:fixed left-[9.75rem] top-[160px] max-sm:mx-11 max-sm:w-auto max-sm:mb-[2.37rem]" />
</template>

<script setup>
import Breadcrumb from '@/components/Breadcrumb.vue';
import SideBar from "@/components/SideBar.vue";
import departmentHandbook from "../../data/departmentHandbook.json";
import event from "../../data/event.json";
import { computed, ref } from "vue";
import { useRoute } from 'vue-router';

const selectedData = ref({
  id: "",
  name: "",
  photoURL: "",
  description: "",
  pdfEmbeddedURL: "",
  related_event_id: []
});
const route = useRoute();
const sideBarData = computed(() => departmentHandbook.map(d => (
  {
    name: d.college_name,
    content: d.departments.map(v => ({
      name: v.name,
      link: `/forum/departmentHandbook/${v.id}`,
      selected: (() => { if (route.params.department !== v.id) return false; else selectedData.value = v; return true; })(),
    }))
  }
)));
const relEvents = computed(() => event.filter(e => e.id === selectedData.value.related_event_id));


</script>
