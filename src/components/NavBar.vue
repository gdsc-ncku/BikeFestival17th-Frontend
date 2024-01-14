<template>
  <div
    class="w-full fixed flex justify-center pt-2 pb-3 overflow-hidden"
    :class="{
      'bg-primary-50': theme == 'dark',
    }"
  >
    <nav class="flex justify-center xl:gap-28 lg:gap-8 gap-3">
      <img
        v-if="theme == 'light'"
        src="/logo.svg"
        alt="logo"
        class="xl:w-44 lg:w-36 md:w-28 w-24"
      />
      <img
        v-else
        src="/logo-dark.svg"
        alt="logo"
        class="xl:w-44 lg:w-36 md:w-28 w-24"
      />

      <div class="flex xl:gap-7 lg:gap-3 gap-2">
        <template v-for="item in navBarList">
          <DropDown
            :theme="theme"
            :title="item.title"
            :linkList="item.linkList"
          />
        </template>
      </div>

      <a
        href="/signup"
        class="block text-center font-bold bg-primary-900 rounded-full lg:h-14 lg:w-36 lg:text-xl md:h-10 md:w-24 h-8 w-20"
      >
        <div class="flex flex-col justify-center h-full">
          <span
            class="text-bold text-primary-50 text-sm lg:text-xl md:text-base"
            >即刻報名</span
          >
        </div>
      </a>
    </nav>
  </div>
</template>

<script setup>
import navBarList from "../data/navBar.json";
import DropDown from "./DropDown.vue";
import { defineProps } from "vue";

const props = defineProps({
  theme: {
    type: String,
    default: "light", // dark
  },
});
</script>
