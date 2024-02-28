<template>
  <Breadcrumb />
  <div class="layout_content">
    <div v-if="$route.params.letter === undefined" class="my-8 flex flex-wrap justify-between gap-12 items-center sm:flex-row flex-col">
      <Letter
        v-for="data in letterToHighSchoolStudents"
        :name="data.author"
        :link="`letterToHighSchoolStudents/${data.id}`"
      />
    </div>
    <div v-else>
      <div
        class="w-full py-12 sm:px-16 px-8 bg-white shadow-md mb-16 rounded bg-contain bg-repeat-y sm:text-lg text-sm"
        style="background-image: url('/BikeFestival17th-Frontend/forum_page/letter-note-texture.png');"
      >
        <!-- <div class="font-bold text-3xl text-content mb-8">{{ data.title }}</div> -->
        <!-- <img class="w-[500px] mx-auto my-8" src="/forum_page/LetterToHighSchoolStudents.webp"> -->
        <p>To 各位高中生們,</p><br>
        <div v-html="data.content"></div><br>
        <p class="text-right">From {{ data.author }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import Breadcrumb from '@/components/Breadcrumb.vue';
import Letter from '@/components/Letter.vue';
import letterToHighSchoolStudents from '@/data/letterToHighSchoolStudents.json';
import { ref, watchEffect } from 'vue';

import { useRoute } from 'vue-router';

const route = useRoute();

const data = ref({});

watchEffect(() => {
  const letterId = route.params.letter;
  if (letterId) {
    const foundData = letterToHighSchoolStudents.find(v => v.id == letterId);
    if (foundData) {
      data.value = foundData;
    }
  }
});
</script>