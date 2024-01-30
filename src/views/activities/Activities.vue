<template>
  <Breadcrumb />
  <div v-for="(item, index) in activities" :key="index" class="text-content flex lg:max-w-[1200px] max-w-[300px] lg:flex-row flex-col justify-between lg:items-start items-center mx-auto mb-20">
    <img :src="item.img" :alt="item.title" class="lg:w-[376px] lg:h-[222px] w-[300px] h-[200px] bg-gray-500 rounded-lg lg:mr-20 mr-2 mb-5 object-cover" />
    <div class="lg:max-w-[800px] max-w-[300px]">
      <RouterLink class="font-bold text-2xl mb-4 block hover:underline" :to=item.url>{{ item.title }}</RouterLink>
      <div v-html="item.intro" class="lg:text-xl text-sm"></div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
import activities from "../../data/activities.json";
import Breadcrumb from '@/components/Breadcrumb.vue';
</script>
