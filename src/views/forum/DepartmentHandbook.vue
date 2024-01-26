<template>
  <Breadcrumb />
  <div class="layout_content flex flex-col lg:flex-row-reverse gap-10">
    <!-- college list -->
    <div v-if="$route.params.department === undefined">
      <div class="text-5xl font-bold text-center mb-[2.62rem] max-sm:hidden">科系手冊</div>
      <div v-for="d in departmentHandbook" class="flex mb-6 gap-6 ">
        <!-- 電腦版封面圖 -->
        <img
          :src="d.photoURL"
          class="h-48 w-2/3 bg-[#ADADAD] sm:block hidden object-cover"
        >
        <div class="w-full">
          <!-- 手機版封面圖 -->
          <img
            :src="d.photoURL"
            class="h-32 w-full bg-[#D9D9D9] sm:hidden block rounded-[0.3125rem] my-3 object-cover"
          >
          <div class="text-2xl font-bold">{{ d.college_name }}</div>
          <div class="my-2 sm:text-base text-xs">{{ d.description }}</div>
          <div class="flex flex-wrap gap-4 sm:text-base text-xs">
            <RouterLink
              v-for="v in d.departments"
              :to="`/forum/departmentHandbook/${v.id}`"
              class="text-primary-900 underline"
            >
              {{ v.name }}
            </RouterLink>
          </div>
        </div>
      </div>
    </div>

    <!-- 手冊內容 -->
    <div v-else class="w-full flex flex-col gap-5 mb-24">
      <div class="sm:text-[2.5rem] text-2xl text-content font-bold max-sm:text-center">{{ selectedData.name }}</div>
      <div>
        <a class="text-content text-xl w-auto cursor-pointer underline" target="_blank" :href="selectedData.pdfEmbeddedURL.replace('preview', 'view')">下載PDF</a>
      </div>
      <iframe class="h-[37.0625rem]" :src="selectedData.pdfEmbeddedURL"></iframe>
      <div class="text-2xl text-content font-bold max-sm:text-center">相關活動行程</div>
      <RouterLink class="text-primary-900 text-right sm:text-2xl text-base font-bold underline" to="/forum/departmentHandbook/" >回到系院列表</RouterLink>
    </div>

    <!-- 側邊欄 -->
    <div>
      <SideBar
        title="科系手冊"
        :list="sideBarData"
        class=" max-sm:mx-11 max-sm:w-auto max-sm:mb-[2.37rem]"
      />
    </div>
  </div>
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
