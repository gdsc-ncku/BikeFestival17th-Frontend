<template>
  <Breadcrumb />
  <div class="layout_content flex flex-col lg:flex-row-reverse gap-10">
    <!-- college list -->
    <div v-if="$route.params.department === undefined">
      <div class="text-5xl font-bold text-center mb-12 max-sm:hidden">科系手冊</div>
      <div v-for="d in departmentHandbook" class="flex mb-16 gap-6">
        <!-- 電腦版封面圖 -->
        <img
          :src="d.photoURL"
          class="h-48 w-2/3 bg-[#ADADAD] sm:block hidden object-cover rounded-lg"
        >
        <div class="w-full">
          <!-- 手機版封面圖 -->
          <img
            :src="d.photoURL"
            class="h-32 w-full bg-[#D9D9D9] sm:hidden block my-3 object-cover rounded-lg"
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
      <div class="flex gap-2 lg:items-end items-center">
        <div class="sm:text-[2.5rem] text-2xl text-content font-bold max-sm:text-center">{{ selectedData.name }}</div>
        <a :href="selectedData.officialWebsite" target="_blank">
          <svg class="lg:w-6 w-4 text-red-500" fill="#404040" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"/></svg>
        </a>
      </div>
      <div class="h-[38rem] relative border border-black">
        <div class="w-full h-full flex justify-center items-center">PDF 文件載入中…</div>
        <iframe class="absolute w-full h-full top-0 left-0" :src="selectedData.pdfEmbeddedURL"></iframe>
      </div>
      <div class="text-2xl text-content font-bold max-sm:text-center">相關活動行程</div>
      <div>
        <StripCard
          v-for="d in selectedData.related_event_id.map(id => event.find(e => e.id == id))"
          :id="d.id"
          :activity="d.activity"
          :project="d.project"
          :description="d.description"
          :name="d.name"
          :date="d.date"
          :startTime="d.startTime"
          :endTime="d.endTime"
          :host="d.host"
          :location="d.location"
          :link="d.link"
          class="lg:mb-0 mb-7"
        />
      </div>
      <RouterLink class="text-primary-900 text-right sm:text-2xl text-base font-bold underline" to="/forum/departmentHandbook/" >回到院系列表</RouterLink>
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
import StripCard from "@/components/StripCard.vue";
import { computed, ref } from "vue";
import { useRoute } from 'vue-router';

const selectedData = ref({
  id: "",
  name: "",
  officialWebsite: "",
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
