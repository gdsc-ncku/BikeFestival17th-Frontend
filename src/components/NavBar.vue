<template>
  <div
    class="navbar w-full fixed flex justify-between pt-2 pb-3 h-20 z-[100]"
    :class="{
      'bg-primary-50 shadow-lg': theme == 'dark',
    }"
  >
    <nav class="layout_content w-full flex justify-between xl:gap-26 lg:gap-8 gap-3 max-w-[1200px]">
      <!-- logo -->
      <RouterLink class="lg:flex hidden flex-col justify-center" to="/">
        <img
          :src="theme == 'light' ? '/BikeFestival17th-Frontend/logo.svg' : '/BikeFestival17th-Frontend/logo-dark.svg'"
          alt="logo"
          class="block xl:w-44 lg:w-36 md:w-28 w-24 cursor-pointer"
          @click=""
        />
      </RouterLink>

      <!-- nav bar list -->
      <div class="lg:flex hidden justify-between xl:gap-7 lg:gap-3 gap-2">
        <template v-for="item in navBarList">
          <DropDown :theme="theme" :title="item.title" :title_link="item.title_link" :linkList="item.linkList" />
        </template>
      </div>

      <!-- sign-up button -->
      <div class="flex flex-col justify-center">
        <a href="#" class="block text-center font-bold bg-primary-900 rounded-full lg:h-14 lg:w-36 lg:text-xl md:h-10 md:w-24 h-8 w-20">
          <div class="flex flex-col justify-center h-full">
            <span class="text-bold text-primary-50 text-sm lg:text-xl md:text-base">即刻報名</span>
          </div>
        </a>
      </div>

      <!-- hamburger menu button -->
      <div
        class="lg:hidden flex justify-center items-center cursor-pointer"
        @click="navbarToggle"
      >
        <div v-if="isOpen" class="w-12 h-12 flex flex-col justify-center items-center">
          <span class="w-full h-full text-5xl z-50 text-white">&times;</span>
        </div>
        <div v-else class="w-12 h-12 flex flex-col justify-evenly items-center">
          <span class="block w-8 h-1 bg-primary"></span>
          <span class="block w-8 h-1 bg-primary"></span>
          <span class="block w-8 h-1 bg-primary"></span>
        </div>
      </div>

      <!-- mobile nav bar -->
      <div
        v-if="isOpen"
        @click="navbarToggle"
        class="fixed inset-0 bg-black opacity-50 z-10"
      ></div>
      <transition
        v-show="isOpen"
        name="slide"
        class="absolute h-screen top-0 right-0 w-1/2 bg-primary shadow-lg z-20"
      >
        <div class="flex flex-col gap-5 pt-20 px-6 text-base text-white">
          <RouterLink to="/about" @click="navbarToggle">關於單車節</RouterLink>
          <div class="w-full flex justify-between items-center">
            <RouterLink to="/info/traffic" @click="navbarToggle">參加資訊</RouterLink>
            <svg
              @click="mobileSidebarDropdown"
              xmlns="http://www.w3.org/2000/svg" width="14" height="9" viewBox="0 0 14 9" fill="none"><path d="M13 1.5L7 7.5L1 1.5" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>
          </div>
            <!-- 按下svg後，hidden會變成flex，出現下拉選單 -->
            <div id="sidebar-dropdown" class="hidden flex-col ml-5  gap-5 text-sm">
              <RouterLink to="/info/traffic" @click="navbarToggle">交通資訊</RouterLink>
              <RouterLink to="/info/map" @click="navbarToggle">攤位地圖</RouterLink>
              <RouterLink to="/info/schedule" @click="navbarToggle">行程表</RouterLink>
              <RouterLink to="/info/mySchedule" @click="navbarToggle">我的行程</RouterLink>
            </div>
          <div class="w-full flex justify-between items-center">
            <RouterLink to="/activities" @click="navbarToggle">主題活動</RouterLink>
            <svg class="sidebar-dropdown" xmlns="http://www.w3.org/2000/svg" width="14" height="9" viewBox="0 0 14 9" fill="none"><path d="M13 1.5L7 7.5L1 1.5" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>
          </div>
            <RouterLink class="ml-5 text-sm" to="/forum/mainStage" @click="navbarToggle">主舞台〈曦瓣〉</RouterLink>
            <RouterLink class="ml-5 text-sm" to="/forum/departmentExpo" @click="navbarToggle">科系博覽</RouterLink>
            <RouterLink class="ml-5 text-sm" to="/forum/universityBlueprint" @click="navbarToggle">大學藍圖</RouterLink>
            <RouterLink class="ml-5 text-sm" to="/forum/educationalGuide" @click="navbarToggle">升學指南</RouterLink>
            <RouterLink class="ml-5 text-sm" to="/forum/lifeCrossroads" @click="navbarToggle">人生叉路口</RouterLink>
            <RouterLink class="ml-5 text-sm" to="/forum/immersiveExperience" @click="navbarToggle">沈浸式體驗</RouterLink>
            <RouterLink class="ml-5 text-sm" to="/forum/unworriedTeaHouse" @click="navbarToggle">解憂茶軒</RouterLink>
            <RouterLink class="ml-5 text-sm" to="/forum/sustainableMarket" @click="navbarToggle">告別前任永續市集</RouterLink>
          <div class="w-full flex justify-between items-center">
            <RouterLink to="/forum" @click="navbarToggle">知識論壇</RouterLink>
            <svg class="sidebar-dropdown" xmlns="http://www.w3.org/2000/svg" width="14" height="9" viewBox="0 0 14 9" fill="none"><path d="M13 1.5L7 7.5L1 1.5" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>
          </div>
            <RouterLink class="ml-5 text-sm" to="/forum/departmentHandbook" @click="navbarToggle">科系手冊</RouterLink>
            <RouterLink class="ml-5 text-sm" to="/forum/featuredArticles" @click="navbarToggle">專欄文章</RouterLink>
            <RouterLink class="ml-5 text-sm" to="/forum/letterToHighSchoolStudents" @click="navbarToggle">給高中生的一封信</RouterLink>
          <RouterLink to="/partners" @click="navbarToggle">合作夥伴</RouterLink>
          <RouterLink to="/souvenir" @click="navbarToggle">紀念品小舖</RouterLink>
        </div>
      </transition>
    </nav>
  </div>
</template>

<script setup>
import DropDown from "./DropDown.vue";
import { defineProps, onMounted, ref, computed, watch } from "vue";
import { useRoute, RouterLink } from "vue-router";

const theme = ref("dark");

const isOpen = ref(false);
const navbarToggle = () => {
  isOpen.value = !isOpen.value;
}

const mobileSidebarDropdown = () => {
  const element = document.querySelector("#sidebar-dropdown");
  if (element.style.display === 'none') {
    element.style.display = 'flex';
  } else {
    element.style.display = 'none';
  }
}

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
      if (window.scrollY > 80) {
        theme.value = "dark";
      } else {
        theme.value = "light";
      }
    } else {
      // mobile
      if (window.scrollY > 80) {
        theme.value = "dark";
      } else {
        theme.value = "light";
      }
    }
  });
});

const navBarList = [
  {
    title: "關於單車節",
    title_link: "/about",
    linkList: [
      {
        name: "關於單車節",
        link: "/about",
      },
    ],
  },
  {
    title: "參加資訊",
    title_link: "/info/traffic",
    linkList: [
      {
        name: "交通資訊",
        link: "/info/traffic",
      },
      {
        name: "攤位地圖",
        link: "/info/map",
      },
      {
        name: "行程表",
        link: "/info/schedule",
      },
      {
        name: "我的行程",
        link: "/info/mySchedule",
      },
    ],
  },
  {
    title: "主題活動",
    title_link: "/activities",
    linkList: [
      {
        name: "主舞台〈曦瓣〉",
        link: "/activities/mainStage",
      },
      {
        name: "科系博覽",
        link: "/activities/departmentExpo",
      },
      {
        name: "大學藍圖",
        link: "/activities/universityBlueprint",
      },
      {
        name: "升學指南",
        link: "/activities/educationalGuide",
      },
      {
        name: "人生叉路口",
        link: "/activities/lifeCrossroads",
      },
      {
        name: "沈浸式體驗",
        link: "/activities/immersiveExperience",
      },
      {
        name: "解憂茶軒",
        link: "/activities/unworriedTeaHouse",
      },
      {
        name: "告別前任永續市集",
        link: "/activities/sustainableMarket",
      },
    ],
  },
  {
    title: "知識論壇",
    title_link: "/forum",
    linkList: [
      {
        name: "科系手冊",
        link: "/forum/departmentHandbook",
      },
      {
        name: "專欄文章",
        link: "/forum/featuredArticles",
      },
      {
        name: "給高中生的一封信",
        link: "/forum/letterToHighSchoolStudents",
      },
    ],
  },
  {
    title: "合作夥伴",
    title_link: "/partners",
    linkList: [
      {
        name: "合作夥伴",
        link: "/partners",
      },
    ],
  },
  {
    title: "紀念品小舖",
    title_link: "/souvenir",
    linkList: [
      {
        name: "紀念品小舖",
        link: "/souvenir",
      },
    ],
  },
];
</script>

<style scoped>
.navbar {
  transition: all 0.2s ease-in-out;
}

.slide-enter-active, .slide-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.slide-enter-from, .slide-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

.slide-enter-to, .slide-leave-from {
  transform: translateX(0);
  opacity: 0.5;
}

.sidebar-dropdown + #sidebar-dropdown{
  display: flex;
  /* transition: all 0.2s ease-in-out; */
}
</style>
