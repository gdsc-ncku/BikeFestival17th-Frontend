<template>
  <div class="layout_content">
    <div class="bg-white rounded-2xl mb-5 px-4 lg:pt-5 py-2 min-w-[250px] lg:fixed ">
      <a @click="setNum(index)" :href="'#item_' + index" v-for="(item, index) in list" :key="index">
        <h2 class="text-content lg:text-xl text-base lg:mb-5 mb-2 p-1 hover:bg-[#FFE0CA] rounded-lg" :class="num === index ? 'bg-[#FFE0CA]' : ''">
          {{ item.subtitle }}
        </h2>
      </a>
    </div>
    <div class="lg:w-3/4 lg:ml-[400px]">
      <div class="relative w-full lg:h-[400px] h-[200px] mb-5">
        <img :src="img" class="rounded-2xl object-cover w-full mb-[400px] absolute h-full" />
        <div style="border-radius: 16px; background: linear-gradient(0deg, #404040 0%, rgba(217, 217, 217, 0.00) 100%);" class="absolute z-10 w-full h-full"></div>
        <h1 class="text-white lg:text-5xl text-4xl font-bold absolute z-10 lg:top-80 top-32 lg:right-10 lg:left-auto left-5">{{ props.title }}</h1>
      </div>

      <div v-for="(item, index) in props.list" :key=index class="text-content text-xl mb-72">
        <div class="w-fit">
          <h2 :id="'item_' + index" class="text-3xl font-bold block -mb-3">{{ item.subtitle }}</h2>
        <div class="bg-[#FF5C0045] h-6 -mt-10 ml-4 w-full inline-block"></div>
        </div>
        <h3 class="text-2xl font-bold mb-5">活動介紹</h3>
        <div v-html=item.intro class="mb-5"></div>
        <h3 class="text-2xl font-bold mb-5">活動地點</h3>
        <p class="mb-5">{{ item.info }}</p>
        <h3 class="text-2xl font-bold mb-5">報名方式</h3>
        <div v-html=item.register class="mb-5"></div>
        <h3 class="text-2xl font-bold mb-5">相關活動行程</h3>
        <div v-for="e in event" class="lg:mb-0 mb-7">
        <StripCard
        v-if="e.project == item.subtitle"
          :key="e.id"
          :id="e.id"
          :project="e.project"
          :description="e.description"
          :name="e.name"
          :date="e.date"
          :startTime="e.startTime"
          :endTime="e.endTime"
          :host="e.host"
          :location="e.location"
        />
      </div>
      </div>
    </div>
  </div>


</template>

<script setup>
import { ref, onMounted, onBeforeMount, computed } from "vue";
import event from "../data/event.json";
import StripCard from "./StripCard.vue";

const props = defineProps({
  title: String,
  list: Array, //subproject list
  img: String
});

const num = ref(0); //tab target

const setNum = (index) => {
  num.value = index;
}

// // the top bar from left to right
// const activityOrderList = [
//   "舞台活動",
//   "大學藍圖",
//   "科系博覽",
//   "升學指南",
//   "解憂茶軒",
//   "沈浸式體驗",
//   "人生岔路口",
// ];

// const activityList = ref([
//   "舞台活動",
//   "大學藍圖",
//   "科系博覽",
//   "升學指南",
//   "解憂茶軒",
//   "沈浸式體驗",
//   "人生岔路口",
// ]);

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

// onBeforeMount(() => {
//   // init eventDict in the order above
//   eventDict.value = {
//     "2024/3/2": {
//       舞台活動: [],
//       大學藍圖: [],
//       科系博覽: [],
//       升學指南: [],
//       解憂茶軒: [],
//       沈浸式體驗: [],
//       人生岔路口: [],
//     },
//     "2024/3/3": {
//       舞台活動: [],
//       大學藍圖: [],
//       科系博覽: [],
//       升學指南: [],
//       解憂茶軒: [],
//       沈浸式體驗: [],
//       人生岔路口: [],
//     },
//   };

//   console.log(eventDict.value);

  // add event to eventDict
//   event.map((item) => {
//     console.log(item);
//     console.log(item.date);
//     console.log(item.activity);
//     console.log(eventDict.value[item.date]);
//     console.log(eventDict.value[item.date][item.activity]);
//     eventDict.value[item.date][item.activity].push(item);
//   });

//   // sort event by date & start time
//   activityOrderList.map((activity) => {
//     eventDict.value["2024/3/2"][activity].sort((a, b) => {
//       return a.startTime > b.startTime ? 1 : -1;
//     });
//     eventDict.value["2024/3/3"][activity].sort((a, b) => {
//       return a.startTime > b.startTime ? 1 : -1;
//     });
//   });

//   // finish processing event data
//   console.log(eventDict.value);
// });

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

