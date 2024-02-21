<template>
  <!-- Date tabs for laptop -->
  <div class="w-fill sm:flex hidden justify-center flex-col">
    <!-- Date tabs -->
    <div class="mb-5 flex justify-center gap-7">
      <button v-for="(date,idx) in dateList"
        class="w-[360px]  rounded-lg font-semibold text-xl py-[11px]"
        :class="{ ' bg-primary-900 text-white': dateStore.selectedDate == date ,
      'bg-white text-primary-900 border-primary-900 border-2': dateStore.selectedDate != date }"
        @click="dateStore.selectDate(date)"
      >
        {{ `DAY ${idx+1} | 03/0${idx+2}` }}
      </button>
    </div>
  </div>
  <!-- Date tabs for mobile -->
  <div class="fixed w-[100vw] h-[3.3125rem] flex bottom-0 left-0 sm:hidden">
    <button
      v-for="(date, idx) in dateList"
      class="flex-1 border-solid border-2 border-primary-900 font-bold"
      :class="`${
        dateStore.selectedDate != date
          ? 'bg-[#FFF] text-primary-900'
          : 'bg-primary-900 text-white'
      }`"
      @click="dateStore.selectDate(date)"
    >
      {{ `DAY ${idx + 1} | ${date}` }}
    </button>
  </div>
  <div class=" min-h-[180px] mt-10">
    <StripCard
      v-for="event in currentEvents"
      :key="event.id"
      :id="event.id"
      :project="event.project"
      :description="event.description"
      :name="event.name"
      :date="event.date"
      :startTime="event.startTime"
      :endTime="event.endTime"
      :host="event.host"
      :location="event.location"
      :link="event.link"
      class="lg:mb-0 mb-7"
    />
  </div>
</template>

<script setup>
import { ref,onMounted,computed } from 'vue'
import { useEventStore } from '../../stores/user';
import { useDateStore } from '../../stores/date';
import events from "../../data/event.json";
import StripCard from "@/components/StripCard.vue";


const selectedDate = ref("3/2");
const dateList = ref(['3/2' , '3/3']);
const selectDate = (date) => {
  selectedDate.value = date;
};

const eventStore = useEventStore();
const dateStore = useDateStore();

onMounted(() => {
  // fetch user events
  eventStore.fetchUserEvents();
});

const currentEvents = computed(() => {
  return events.filter((event) => event.date === selectedDate.value && eventStore.isEventSubscribed(event.id));
});

</script>