<template>
  <div class="w-full fixed flex justify-center pt-2 pb-3"
    :class="{
        'bg-primary-50' : theme == 'dark',
    }"
  >
    <nav class="flex justify-center gap-28">
      <img v-if="theme=='light'" class="w-44" src="/logo.svg" alt="logo" />
      <img v-else class="w-44" src="/logo-dark.svg" alt="logo" />

      <div class="flex gap-7">
        <template v-for="item in navBarList">
          <DropDown :theme="theme" :title="item.title" :linkList="item.linkList" />
        </template>
      </div>

      <a
        href="/signup"
        class="block h-14 w-36 text-bold text-xl text-center font-bold text-primary-50  bg-primary-900 rounded-full"
      >
        <div class="flex flex-col justify-center h-full">
          <span>即刻報名</span>
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
  theme : {
    type: String,
    default: "dark", // dark
  },
});

</script>
