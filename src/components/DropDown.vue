<template>
  <!-- only one link -->
  <div v-if="linkList.length == 1" class="flex flex-col justify-center">
    <a
      class="block text-xl font-bold"
      :class="{
        'text-white': theme === 'light',
        'dark-content': theme === 'dark',
      }"
      :href="linkList[0].link"
      >{{ title }}</a
    >
  </div>

  <!-- multi links -->
  <button
    v-if="linkList.length > 1"
    class="group"
    type="button"
    @click="toggleCollapse"
  >
    <div class="flex justify-center gap-x-2">
      <span
        class="text-xl font-bold"
        :class="{
          'text-white': theme === 'light',
          'dark-content': theme === 'dark',
        }"
        >{{ title }}</span
      >
      <div class="flex flex-col justify-center group-hover:rotate-180">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="8"
          viewBox="0 0 14 8"
          fill="none"
        >
          <path
            :stroke="theme === 'light' ? '#FFF8F2' : '#404040'"
            d="M13 1L7 7L1 1"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>

    <div
      v-if="linkList.length > 1"
      class="fixed hidden group-hover:block group-hover:z-50"
    >
      <a
        v-for="link in linkList"
        :key="link.name"
        :href="link.link"
        class="block px-1 py-2 text-sm"
        :class="{
          'text-white bg-transparent hover:rounded-md hover:bg-slate-500 hover:bg-opacity-35':
            theme === 'light',
          'text-black bg-primary-50 bg-opacity-20 hover:bg-opacity-35 hover:rounded-md':
            theme === 'dark',
        }"
        @click="handleLinkClick(link)"
      >
        {{ link.name }}
      </a>
    </div>
  </button>
</template>

<script setup>
// reference: https://stackoverflow.com/questions/60917112/displaying-button-when-hovering-over-div-in-tailwindcss
import { defineProps, toRefs, ref } from "vue";

const props = defineProps({
  theme: {
    type: String,
    default: "light", // dark
  },
  title: {
    type: String,
    default: "單車節", // 參加活動 , 關於單車節 , 知識論壇 , 合作夥伴 , 紀念品預購 ...
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
</script>

<style scoped>
.dark-content {
  color: #404040;
}
</style>