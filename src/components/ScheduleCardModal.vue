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
          <SaveScheduleButton
            :id="id"
            :activity="activity"
            :name="name"
            :date="date"
            :startTime="startTime"
            :endTime="endTime"
            :host="host"
            :location="location"
            :link="link"
            :saved="saved"
            :size="'lg'"
          ></SaveScheduleButton>
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
import { defineProps,defineEmits } from "vue";
import SaveScheduleButton from "./SaveScheduleButton.vue";
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
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

const { id, link, host, location, date, startTime, endTime, saved } = props;

defineEmits(["close"]);
</script>
