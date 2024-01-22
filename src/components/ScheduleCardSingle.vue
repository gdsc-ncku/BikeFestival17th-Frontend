<template>
  <div
    class="w-[155px] h-[190px] p-3 rounded-lg bg-[#FFF3EA] hover:bg-[#FFD7AF]"
    @click="showModal = true"
    @close="showModal = false"
  >
    <!-- top -->
    <div class="flex justify-between">
      <div class="flex flex-col justify-center">
        <span class="block text-primary-900 underline text-xs font-[350]">{{
          activity
        }}</span>
      </div>

      <button
        class="w-[24px] h-[24px] flex justify-center items-center"
        @click="handleSave"
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
      <p class="block text-black text-base font-bold truncate">{{ name }}</p>
      <div class="flex justify-start gap-[5px]">
        <img
          :src="'/BikeFestival17th-Frontend/schedule/time.svg'"
          alt=""
          class="flex w-4 h-4"
        />
        <p class="text-black text-xs font-[350] truncate">
          {{ date }} {{ startTime }}-{{ endTime }}
        </p>
      </div>
      <div class="flex justify-start gap-[5px]">
        <img
          :src="'/BikeFestival17th-Frontend/schedule/host.svg'"
          alt=""
          class="flex w-4 h-4"
        />
        <p class="text-black text-xs font-[350] truncate">{{ host }}</p>
      </div>
      <div class="flex justify-start gap-[5px]">
        <img
          :src="'/BikeFestival17th-Frontend/schedule/location.svg'"
          alt=""
          class="flex w-4 h-4"
        />
        <p class="text-black text-xs font-[350] truncate">{{ location }}</p>
      </div>
    </div>
    <!-- bottom -->
    <div class="flex justify-end mt-[19px]">
      <button class="px-2 py-1 rounded-[14px] border-[1px] border-primary-900">
        <div class="flex justify-center">
          <span
            class="flex justify-center font-bold text-[11px] text-primary-900"
            >報名中</span
          >
          <img
            :src="'/BikeFestival17th-Frontend/schedule/gesture-tap.svg'"
            alt=""
            class="flex w-4"
          />
        </div>
      </button>
    </div>
  </div>

  <!-- modal -->
  <Teleport to="body">
    <!-- use the modal component, pass in the prop -->
    <ScheduleCardModal
      :show="showModal"
      @close="showModal = false"
      :id="id"
      :activity="activity"
      :description="description"
      :name="name"
      :date="date"
      :startTime="startTime"
      :endTime="endTime"
      :host="host"
      :location="location"
      :link="link"
      :saved="saved"
    >
    </ScheduleCardModal>
  </Teleport>
</template>

<script setup>
import { defineProps, ref} from "vue";
import ScheduleCardModal from "./ScheduleCardModal.vue";

const props = defineProps({
  id: {
    // backend: event_id
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
  name: {
    type: String,
    required: true,
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
    type: String,
    required: true,
  },
  location: {
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

const {
  id,
  activity,
  name,
  date,
  startTime,
  endTime,
  host,
  location,
  link,
  saved,
} = props;

const handleSave = () => {
  console.log("saved");
};

const showModal = ref(false);
</script>
