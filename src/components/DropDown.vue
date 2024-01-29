<template>
  <!-- only one link -->
  <div v-if="linkList.length == 1" class="flex flex-col justify-center">
    <RouterLink
      class="block font-bold text-sm lg:text-xl md:text-base"
      :class="{
        'text-white': theme === 'light',
        'dark-content': theme === 'dark',
      }"
      :to="linkList[0].link"
    >
      {{ title }}
    </RouterLink>
  </div>

  <!-- multi links -->
  <button v-if="linkList.length > 1" class="group lg:hover:mt-4 md:hover:mt-[18px] hover:mt-[20px]" type="button">
    <div
      class="flex justify-center lg:gap-x-2 md:gap-x-1"
      :class="{ 'lg:px-[9px] md:px-[6px] px-4': hasLongWord(linkList) }"
    >
      <RouterLink
        class="font-bold text-sm lg:text-xl md:text-base"
        :class="{
          'text-white': theme === 'light',
          'dark-content': theme === 'dark',
        }"
        :to="title_link"
      >
        {{ title }}
      </RouterLink>
      <div class="flex flex-col justify-center group-hover:rotate-180">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none">
          <path d="M13 1L7 7L1 1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            :stroke="theme === 'light' ? '#FFF8F2' : '#404040'"
          />
        </svg>
      </div>
    </div>

    <!-- 下拉式選單 -->
    <div v-if="linkList.length > 1" class="hidden z-50 bg-primary-700 mt-1 py-2 rounded-md group-hover:block">
      <RouterLink
        v-for="link in linkList"
        :key="link.name"
        :to="link.link"
        class="block px-1 py-2 lg:text-sm text-[11px] text-white hover:bg-primary-50 hover:rounded-sm hover:text-primary-900"
        :class="{
          'bg-transparent hover:rounded-m': theme === 'light',
        }"
        @click="handleLinkClick(link)"
      >
        {{ link.name }}
      </RouterLink>
    </div>
  </button>
</template>

<script setup>
// reference: https://stackoverflow.com/questions/60917112/displaying-button-when-hovering-over-div-in-tailwindcss
import { defineProps, toRefs } from "vue";
import { RouterLink } from "vue-router";

const props = defineProps({
  theme: {
    type: String,
    default: "light", // dark
  },
  title: {
    type: String,
    default: "單車節", // 參加活動 , 關於單車節 , 知識論壇 , 合作夥伴 , 紀念品小舖 ...
  },
  title_link: {
    type: String,
    default: "/", // 參加活動 , 關於單車節 , 知識論壇 , 合作夥伴 , 紀念品小舖 ...
  },
  linkList: {
    type: Array,
    default: [
      {
        name: "subtitle",
        link: "/subtitle",
      },
    ],
  },
});

const { theme, title, linkList } = toRefs(props);

const hasLongWord = (linkList) => {
  return linkList.some((link) => link.name.length > 5);
};
</script>

<style scoped>
.dark-content {
  color: #404040;
}
</style>
