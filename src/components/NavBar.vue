<template>
  <div
    class="navbar w-full fixed flex justify-center pt-2 pb-3 h-20 z-[100]"
    :class="{
      'bg-primary-50 shadow-lg': theme == 'dark',
    }"
  >
    <nav class="flex justify-center xl:gap-26 lg:gap-8 gap-3 max-w-[1200px]">
      <RouterLink class="flex flex-col justify-center" to="/">
        <img
          :src="theme == 'light' ? '/BikeFestival17th-Frontend/logo.svg' : '/BikeFestival17th-Frontend/logo-dark.svg'"
          alt="logo"
          class="block xl:w-44 lg:w-36 md:w-28 w-24 cursor-pointer"
          @click=""
        />
      </RouterLink>

      <div class="flex xl:gap-7 lg:gap-3 gap-2">
        <template v-for="item in navBarList">
          <DropDown
            :theme="theme"
            :title="item.title"
            :linkList="item.linkList"
          />
        </template>
      </div>

      <div class="flex flex-col justify-center">
        <RouterLink
          href="#"
          class="block text-center font-bold bg-primary-900 rounded-full lg:h-14 lg:w-36 lg:text-xl md:h-10 md:w-24 h-8 w-20"
        >
          <div class="flex flex-col justify-center h-full">
            <span
              class="text-bold text-primary-50 text-sm lg:text-xl md:text-base"
              >即刻報名</span
            >
          </div>
        </RouterLink>
      </div>
    </nav>
  </div>
</template>

<script setup>
import navBarList from "../data/navBar.json";
import DropDown from "./DropDown.vue";
import { defineProps, onMounted, ref, computed, watch } from "vue";
import { useRoute , RouterLink } from "vue-router";

const theme = ref("dark");
const props = defineProps({
  theme: {
    type: String,
    default: "dark", // dark
  },
});

const router = useRoute();
const path = computed(() => {
  return router.path;
});

// watch if path changed
watch(path, (newVal, oldVal) => {
  if (newVal === "/") {
    theme.value = "light";
  } else {
    theme.value = "dark";
  }
});

onMounted(() => {
  if (path.value === "/") {
    theme.value = "light";
  }

  window.addEventListener("scroll", (e) => {
    // only for home page
    if (path.value !== "/") return;

    if (window.innerWidth >= 1024) {
      // desktop
      if (window.scrollY > 500) {
        theme.value = "dark";
      } else {
        theme.value = "light";
      }
    } else {
      // mobile
    }
  });
});
</script>

<style scoped>
.navbar {
  transition: all 0.2s ease-in-out;
}
</style>
