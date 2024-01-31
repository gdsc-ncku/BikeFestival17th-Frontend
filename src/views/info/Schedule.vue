<template>
  <!-- center container -->
  <div class="w-fill flex justify-center">
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
  <div class="w-fill flex justify-center">
    <!-- time line -->
    <div class="flex flex-col gap-[150px] max-w-[1260px]">
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
    </div>
  </div>

  <div class="flex flex-col space-y-4">
    <!-- <ScheduleCardSingle
      v-for="item in event"
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
    /> -->
  </div>


</template>

<script setup>
import event from "../../data/event.json";
import ScheduleCardSingle from "../../components/ScheduleCardSingle.vue";
import { ref, onMounted, onBeforeMount } from "vue";


/*

1hr -> 185px

*/

// the top bar from left to right
const activityOrderList = [
  "舞台活動",
  "大學藍圖",
  "科系博覽",
  "升學指南",
  "解憂茶軒",
  "沈浸式體驗",
  "人生岔入口",
];

const activityList = ref([
  "舞台活動",
  "大學藍圖",
  "科系博覽",
  "升學指南",
  "解憂茶軒",
  "沈浸式體驗",
  "人生岔入口",
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

const finalActivityCardDict = ref([]);
onBeforeMount(() => {
  // init eventDict in the order above
  eventDict.value = {
    "3/2": {
      舞台活動: [],
      大學藍圖: [],
      科系博覽: [],
      升學指南: [],
      解憂茶軒: [],
      沈浸式體驗: [],
      人生岔入口: [],
    },
    "3/3": {
      舞台活動: [],
      大學藍圖: [],
      科系博覽: [],
      升學指南: [],
      解憂茶軒: [],
      沈浸式體驗: [],
      人生岔入口: [],
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
    eventDict.value["3/2"][activity].sort((a, b) => {
      return a.startTime > b.startTime ? 1 : -1;
    });
    eventDict.value["3/3"][activity].sort((a, b) => {
      return a.startTime > b.startTime ? 1 : -1;
    });
  });

  // finish processing event data
  console.log(eventDict.value);
});

onMounted(() => {
  console.log(activityListRef.value);
  console.log("activity 0 (x,y,w,h):");
  console.log(activityListRef.value[0].getBoundingClientRect());
  console.log(activityListRef.value[4].getBoundingClientRect());

  // mount imported `ScheduleCardSingle` component under the activity list
  activityListRef.value.map((item, index) => {
    console.log(item);
    console.log(item.getBoundingClientRect());
    const pos = item.getBoundingClientRect();

    // create a div element
    const div = document.createElement("div");
    div.id = `activity-${index}`;
    div.style.position = "absolute";
    const topPadding = 28 + 35 / 2;
    div.style.top = `${pos.top + topPadding }px`;
    div.style.left = `${pos.left + 159.43/2 - (100/2)/2 }px`;
    div.style.width = `${100/2}px`;
    div.style.height = `${150}px`;
    div.style.backgroundColor = "red";
    div.innerText = `activity-ele-${index}`;
    document.body.appendChild(div);
  });
});
</script>