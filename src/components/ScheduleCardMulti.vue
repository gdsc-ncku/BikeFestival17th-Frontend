<template>
  <div
    class="w-[155px] h-[190px] p-3 rounded-lg bg-[#FFF3EA] hover:bg-[#FFD7AF] opacity-99 absolute"
    @click="showModal = true"
    @close="showModal = false"
  >
    <!-- top -->
    <div class="flex justify-between">
      <div class="flex flex-col justify-center">
        <span class="block text-primary-900 underline text-xs font-[350]">{{
          events[0].activity
        }}</span>
      </div>
      <button
        class="w-[24px] h-[24px] lg:flex justify-center items-center hidden"
        :class="
          id === '49' && props.step === 1
            ? 'z-50 bg-primary-50 pointer-events-none'
            : ''
        "
        @click="handleClick"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.41 8.58008L12 13.1701L16.59 8.58008L18 10.0001L12 16.0001L6 10.0001L7.41 8.58008Z"
            fill="#FF5C00"
          />
        </svg>
      </button>
      <button
        class="w-[24px] h-[24px] flex justify-center items-center lg:hidden"
        :class="
          id === '1' && props.step === 1
            ? 'z-50 bg-primary-50 pointer-events-none'
            : ''
        "
        @click="handleClick"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="18"
          viewBox="0 0 14 18"
          fill="none"
        >
          <path
            d="M12 15L7 12.82L2 15V2H12M12 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V18L7 15L14 18V2C14 0.89 13.1 0 12 0Z"
            fill="#FF7B1A"
          />
        </svg>
      </button>
    </div>
    <!-- middle -->
    <div class="flex flex-col gap-2">
      <p v-for="(eventName,index) in groupEventsName()" class="block text-black text-base font-bold truncate">{{ eventName }}</p>
      <div class="flex justify-start gap-[5px]">
        <img
          :src="'/BikeFestival17th-Frontend/schedule/time.svg'"
          alt=""
          class="flex w-4 h-4"
        />
        <p class="text-black text-xs font-[350] truncate">
          {{ events[0].date }} {{ events[0].startTime }}-{{ events[0].endTime }}
        </p>
      </div>
    </div>
  </div>

  <!-- modal -->
  <Teleport to="body">
    <!-- use the modal component, pass in the prop -->
    <ScheduleCardMultiModal
      :show="showModal"
      @close="showModal = false"
      :events="events"
    >
    </ScheduleCardMultiModal>
  </Teleport>
</template>

<script setup>
import { defineProps, ref, watch } from "vue";
import ScheduleCardMultiModal from "./ScheduleCardMultiModal.vue"

// let props = defineProps({
//   id: {
//     // backend: event_id
//     type: String,
//     required: true,
//   },
//   activity: {
//     type: String,
//     required: true,
//   },
//   description: {
//     type: String,
//     default: "暫無描述",
//   },
//   name: {
//     type: String,
//     required: true,
//   },
//   date: {
//     type: String,
//     required: true,
//   },
//   startTime: {
//     //backend: event_time_start
//     type: String,
//     required: true,
//   },
//   endTime: {
//     //backend: event_time_end
//     type: String,
//     required: true,
//   },
//   host: {
//     type: String,
//     required: true,
//   },
//   location: {
//     type: String,
//     required: true,
//   },
//   link: {
//     type: String,
//     required: false,
//   },
//   saved: {
//     type: Boolean,
//     default: false,
//   },
// });

// let {
//   id,
//   activity,
//   name,
//   date,
//   startTime,
//   endTime,
//   host,
//   location,
//   link,
//   saved,
// } = props;

const props = defineProps({
  events :{
    type: Array,
    required: true,
  }
})

const { events } = props;

const handleClick = () => {
  console.log("saved");
};

const showModal = ref(false);

function groupEventsName(){
  const group = [];
  for (let i = 0; i < events.length; i++) {
    if( i == 2) {
      if(events.length > 3) {
        group.push("更多活動 ...");
      } else {
        group.push(events[i].name);
      }
      break;
    }
    group.push(events[i].name);
  }
  return group;
};
</script>
