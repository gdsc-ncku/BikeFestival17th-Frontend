<template>
  <Transition name="modal">
    <!-- z-index + mask -->
    <div
      v-if="show"
      class="z-[9999] fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 max-sm:flex-col max-sm:justify-end"
    >
      <div class="sm:w-[720px] w-[100vw] h-[600px] bg-white px-9 py-10 sm:rounded sm:rounded max-sm:rounded-tl-[1.25rem] max-sm:rounded-tr-[1.25rem]">
        <!-- top -->

        <div class="flex justify-between">
          <!-- right container -->
          <div class="flex flex-col justify-center max-sm:max-w-[calc(100%_-_51px)]">
            <span class="block text-primary-900 font-bold text-xl underline">{{
              activity
            }}</span>
            <div class="flex sm:justify-center gap-8 max-sm:flex-wrap max-sm:gap-y-2">
              <span
                class="text-black font-bold sm:text-[40px] text-xl sm:max-w-[350px] truncate"
              >
                {{ name }}
              </span>
              <a
                :href="link"
                target="_blank"
                class="font-bold text-xl max-sm:text-base text-white bg-primary-900 h-[50px] rounded-md px-3 flex flex-col justify-center"
              >
                即刻報名
              </a>
              <div class="flex flex-col justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="36"
                  viewBox="0 0 30 36"
                  fill="none"
                >
                  <path
                    d="M25.7143 0H4.28571C3.14907 0 2.05898 0.421427 1.25526 1.17157C0.451529 1.92172 0 2.93913 0 4V36L15 30L30 36V4C30 1.78 28.0714 0 25.7143 0Z"
                    fill="#FF7B1A"
                  />
                </svg>
              </div>
            </div>
          </div>
          <!-- left close icon -->
          <button
            @click="$emit('close')"
            class="flex justify-center items-center bg-no-repeat w-[51px] h-[51px] hover:bg-gray-100 hover:rounded-full"
            style="
              background-image: url('/BikeFestival17th-Frontend/schedule/close.svg');
              background-size: 51px 51px;
            "
          ></button>
        </div>
        <!-- time & location -->
        <div class="mt-3">
          <p class="text-black text-base font-[350] truncate">
            {{ date }} {{ startTime }}-{{ endTime }}
          </p>
          <p class="text-black text-base font-[350] truncate">{{ location }}</p>
        </div>
        <!-- description -->
        <div class="mt-3">
          <p class="text-black sm:text-xl text-base font-[400]">{{ description }}</p>
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

const { id, link, host, location, date, startTime, endTime, saved } = props;
</script>
