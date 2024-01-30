<template>
  <Tutorial v-if="showTutorial === true" @close-tutorial="() => {showTutorial = false; emit('tutorial-active', false)}" @next-step="NextStep"/>
  <!-- center container -->
  <div class="w-fill flex justify-center max-sm:hidden">
    <!-- activity list -->
    <div class="flex justify-center gap-6 max-w-[1260px]">
      <div
        class="text-black text-xl font-bold text-center w-40"
        v-for="(item, index) in activityList"
        ref="activityListRef"
        :key="item"
        :id="`activity-${index}`"
      >
        {{ item }}
      </div>
    </div>
  </div>

  <!-- center container -->
  <div class="w-fill flex justify-center mb-16 max-sm:hidden">
    <!-- time line -->
    <div class="flex flex-col gap-[150px] max-w-[1260px] relative">
      <div
        class="w-fill flex justify-center gap-[20px]"
        v-for="index in 10"
        :key="index"
      >
        <!-- left time box -->
        <div class="w-[65px] h-[35px] font-bold text-2xl text-primary-900">
          {{ index + 8 }}:00
        </div>
        <div class="flex flex-col justify-center">
          <div class="w-[1240px] h-0 border-[1px]"></div>
        </div>
        <!-- right fake box -->
        <div class="w-[65px] h-[35px] opacity-0">fake</div>
      </div>
      <div v-for="(item, index) in event" class="box absolute" :class="(index === 95 && step === 0) ? 'z-40' : ''" :style="`--l:${activityOrderList.indexOf(item.activity)};--h:${parseInt(item.startTime.split(':')[0])};--m: ${parseInt(item.startTime.split(':')[1])}`">
        <ScheduleCardSingle
          :key="item.id"
          :id="item.id"
          :activity="item.activity"
          :description="item.description"
          :name="item.name"
          :date="item.date"
          :startTime="item.startTime"
          :endTime="item.endTime"
          :host="item.host"
          :location="item.location"
          :height="computeHeight(item)"
          :step="step"
        />
      </div>
    </div>
  </div>
  <div
    class="flex flex-col space-y-4 sm:hidden max-sm:mb-12"
  >
    <div v-for="time in Object.keys(selectedData)" class="flex flex-col gap-4" :key="time">
      <div class="text-primary-900 font-bold text-[0.875rem]">{{ time }}</div>
      <div v-for="(item, index) in selectedData[time]" :class="(index === 0 && step === 0) ? 'z-40' : ''">
        <ScheduleCardSingle
        :key="item.id"
        :id="item.id"
        :activity="item.activity"
        :description="item.description"
        :name="item.name"
        :date="item.date"
        :startTime="item.startTime"
        :endTime="item.endTime"
        :host="item.host"
        :location="item.location"
        :step="step"
        width="auto"
      />
      </div>
    </div>
  </div>

  <div class="fixed w-[100vw] h-[3.3125rem] flex bottom-0 left-0 sm:hidden">
    <button
      v-for="(key, i) in ['2024/3/2', '2024/3/3']"
      class="flex-1 border-solid border-2 border-primary-900 font-bold"
      :class="`${selectedDate === key ? 'bg-[#FFF] text-primary-900' : 'bg-primary-900 text-white'}`"
      @click="selectedDate = key"
    >
      {{ `DAY ${i + 1} ${key}` }}
    </button>
  </div>
</template>

<script setup>
import event from "../../data/event.json";
import ScheduleCardSingle from "../../components/ScheduleCardSingle.vue";
import Tutorial from "../../components/Tutorial.vue";
import { ref, onMounted, onBeforeMount, computed } from "vue";

// the top bar from left to right
const activityOrderList = [
  "舞台活動",
  "大學藍圖",
  "科系博覽",
  "升學指南",
  "解憂茶軒",
  "沈浸式體驗",
  "人生叉路口",
];

const activityList = ref([
  "舞台活動",
  "大學藍圖",
  "科系博覽",
  "升學指南",
  "解憂茶軒",
  "沈浸式體驗",
  "人生叉路口",
]);

// activityList ref list
const activityListRef = ref([]);

const eventDict = ref({});
// process event data before mount
/*
  schema :
  {
    "2024/3/2" : {
      "舞台活動" : [event1, event2, ...],
      "大學藍圖" : [event1, event2, ...],
      ...
    },
    "2024/3/3" : {
      "科系博覽" : [event1, event2, ...],
      "大學藍圖" : [event1, event2, ...],
      ...
    },
  }
  */

onBeforeMount(() => {
  // init eventDict in the order above
  eventDict.value = {
    "2024/3/2": {
      舞台活動: [],
      大學藍圖: [],
      科系博覽: [],
      升學指南: [],
      解憂茶軒: [],
      沈浸式體驗: [],
      人生岔路口: [],
    },
    "2024/3/3": {
      舞台活動: [],
      大學藍圖: [],
      科系博覽: [],
      升學指南: [],
      解憂茶軒: [],
      沈浸式體驗: [],
      人生岔路口: [],
    },
  };

  console.log(eventDict.value);

  // add event to eventDict
  event.map((item) => {
    console.log(item);
    console.log(item.date);
    console.log(item.activity);
    console.log(eventDict.value[item.date]);
    console.log(eventDict.value[item.date][item.activity]);
    eventDict.value[item.date][item.activity].push(item);
  });

  // sort event by date & start time
  activityOrderList.map((activity) => {
    eventDict.value["2024/3/2"][activity].sort((a, b) => {
      return a.startTime > b.startTime ? 1 : -1;
    });
    eventDict.value["2024/3/3"][activity].sort((a, b) => {
      return a.startTime > b.startTime ? 1 : -1;
    });
  });

  // finish processing event data
  console.log(eventDict.value);
});

const computeHeight = (item) => {
  const startStr = item.startTime.split(":");
  const endStr = item.endTime.split(":");
  const start = parseInt(startStr[0]) + parseInt(startStr[1]) / 60;
  const end = parseInt(endStr[0]) + parseInt(endStr[1]) / 60;

  return `${185 * (end - start)}px`
}
const startTimeData = Object.fromEntries(
  Array.from(new Set(event.map(v => v.startTime))).sort(
    (a, b) => parseInt(a.replace(":", "")) - parseInt(b.replace(":", ""))
  ).map(
    v => [v, event.filter(d => d.startTime === v)]
  )
);

const selectedDate = ref("2024/3/2");
const selectedData = computed(() => Object.fromEntries(
  Object.entries(startTimeData).map(
    ([k, v]) => [k, v.filter(d => d.date === selectedDate.value)]
  ).filter(
    ([k, v]) => v.length > 0
  )
))

//tutorial model
const showTutorial = ref(true);
const step = ref(0);
const emit = defineEmits(['tutorial-active']);

const NextStep = () => {
  step.value = step.value + 1;
  if(step.value === 1) emit('tutorial-active', true);
  else emit('tutorial-active', false);
}
// onMounted(() => {
//   console.log(activityListRef.value);
//   console.log("activity 0 (x,y,w,h):");
//   console.log(activityListRef.value[0].getBoundingClientRect());
//   console.log(activityListRef.value[4].getBoundingClientRect());

//   // mount imported `ScheduleCardSingle` component under the activity list
//   activityListRef.value.map((item, index) => {
//     const pos = item.getBoundingClientRect();
//   });
// });
</script>

<style>
.box {
  top: calc(17.5px + 185px * (var(--h) - 9 + var(--m) / 60));
  left: calc(0.2rem + 11.5rem * var(--l)) !important;
}
</style>
