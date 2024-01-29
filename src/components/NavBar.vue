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
          <span class="w-full h-full text-white text-5xl z-50">&times;</span>
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
        <div class="flex flex-col justify-center items-start px-2">
          <span>關於單車節</span>
          <span>參加資訊</span>
          <span>主題活動</span>
          <span>知識論壇</span>
          <span>合作夥伴</span>
          <span>紀念品小舖</span>
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
  opacity: 0.5; /* 透明度設為 50% */
}
</style>
