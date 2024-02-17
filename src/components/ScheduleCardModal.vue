<template>
  <Transition name="modal">
    <!-- z-index + mask -->
    <div
      v-if="show"
      class="z-[9999] fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 max-sm:flex-col max-sm:justify-end"
    >
      <div class="flex flex-col sm:w-[720px] w-[100vw] h-[600px] bg-white px-9 py-10 sm:rounded max-sm:rounded-tl-[1.25rem] max-sm:rounded-tr-[1.25rem]">
        <!-- top title: 主題活動、收藏按鈕、關閉按鈕 -->
        <div class="flex items-center gap-5">
          <p class="grow text-primary-900 font-bold text-xl underline leading-none">{{ activity }}</p>
          <svg class="min-w-6" xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 30 36" fill="none">
            <path d="M25.7143 0H4.28571C3.14907 0 2.05898 0.421427 1.25526 1.17157C0.451529 1.92172 0 2.93913 0 4V36L15 30L30 36V4C30 1.78 28.0714 0 25.7143 0Z" fill="#FF7B1A" />
          </svg>
          <button @click="$emit('close')" class="flex justify-center items-center min-w-[50px] min-h-[50px] hover:bg-gray-100 hover:rounded-full">
            <img src="/schedule/close.svg" class="w-[50px] h-[50px]">
          </button>
        </div>
        <!-- 活動名稱 -->
        <h1 class="mt-2 text-black font-bold sm:text-[40px] sm:leading-tight text-xl ">{{ name }}</h1>
        <!-- time & location -->
        <div class="mt-3">
          <div class="flex items-center gap-2">
            <img src="/schedule/time.svg" alt="" class="flex w-4 h-4"/>
            <span class="text-black text-base font-[350] truncate">{{ date }} {{ startTime }}-{{ endTime }}</span>
          </div>

          <div class="flex items-center gap-2">
            <img src="/schedule/location.svg" alt="" class="flex w-4 h-4"/>
            <span class="text-black text-base font-[350] truncate">{{ location }}</span>
          </div>
        </div>
        <!-- description -->
        <div class="mt-3">
          <p class="text-black sm:text-xl text-base font-[400]">{{ description }}</p>
        </div>
        <div class="grow text-right flex justify-end items-end">
          <a :href="link" target="_blank" class="font-bold text-xl max-sm:text-base text-white bg-primary-900 h-[50px] rounded-md p-3">
            即刻報名
          </a>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  show: {
    type: Boolean,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  activity: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: "暫無描述",
  },
  date: {
    type: String,
    required: true,
  },
  startTime: {
    //backend: event_time_start
    type: String,
    required: true,
  },
  endTime: {
    //backend: event_time_end
    type: String,
    required: true,
  },
  host: {
    //backend: event_host
    type: String,
    default: "暫無講者",
  },
  location: {
    //backend: event_location
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: false,
  },
  saved: {
    type: Boolean,
    default: false,
  },
});

const { id, link, host, activity, location, date, startTime, endTime, saved } = props;
</script>
