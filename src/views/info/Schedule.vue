<template>
  <!-- center container -->
  <div class="w-fill flex justify-center flex-col">
    <!-- Date tabs -->
    <div class="date-tabs">
      <button class="date-tab" :class="{ active: selectedDate === '3/2' }" @click="selectDate('3/2')">
        DAY 1 | 03/02
      </button>
      <button class="date-tab" :class="{ active: selectedDate === '3/3' }" @click="selectDate('3/3')">
        DAY 2 | 03/03
      </button>
    </div>


    <!-- activity list -->
    <!-- <div class="flex justify-center gap-6 max-w-[1260px]">
      <div class="text-black text-xl font-bold text-center w-40" v-for="(item, index) in activityList"
        ref="activityListRef" :key="item" :id="`activity-${index}`">
        {{ item }}
      </div>
    </div>
  </div> -->

  <!-- events display aligned to timeline and activity -->
      <div class="flex justify-center gap-6 max-w-[1260px]">
        <div class="relative" v-for="(activity, activityIndex) in activityList" :key="activity" >
          <div class="text-black text-xl font-bold text-center w-40">
            {{ activity }}
          </div>
          <div class="flex flex-col gap-4">
            <template v-for="(eventGroup, index) in groupEventsByTime(eventDict[selectedDate][activity])">
              <div :style="{top: calculateEventTopOffset(eventGroup.events[0]), height: calculateEventHeight(eventGroup.events[0])}" class="absolute">
              <div v-for="(event, eventIndex) in eventGroup.events" class="flex justify-between">
                  <ScheduleCardSingle
                    :id="event.id"
                    :name="event.name"
                    :date="event.date"
                    :startTime="event.startTime"
                    :endTime="event.endTime"
                    :host="event.host"
                    :location="event.location"
                    :activity="event.activity"
                    :link="event.link"
                    :showModal="showModal"
                    @close="showModal = false"
                    :divider="eventGroup.events.length"
                  />
              </div>
            </div>
            </template>
          </div>
        </div>
      </div>
    </div>

  <!-- center container -->
  <div class="w-fill flex justify-center">
    <!-- time line -->
    <div class="flex flex-col gap-[150px] max-w-[1260px]">
      <div class="w-fill flex justify-center gap-[20px]" v-for="index in 10" :key="index">
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
</template>

<script setup>
import event from "../../data/event.json";
import ScheduleCardSingle from "../../components/ScheduleCardSingle.vue";
import { ref, onMounted, onBeforeMount, computed } from "vue";

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

// Constants for layout
const pixelsPerHour = 200; // Height of one hour in pixels on the timeline
const timelineStartHour = 9; // timeline starts at 9:00 AM

// activityList ref list
const activityListRef = ref([]);
const selectedDate = ref('3/2');

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
  selectedDate.value = '3/2';
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

function selectDate(date) {
  selectedDate.value = date;
}

// set all events with the same start and end time in a group
// [{startTime: '9:00', events: [event1, event2, ...], {startTime: '10:00', events: [event1, event2, ...], ...]}
function groupEventsByTime(events) {
  const groups = [];
  events.forEach((event) => {
    const group = groups.find((group) => group.startTime === event.startTime && group.endTime === event.endTime);
    if (group) {
      group.events.push(event);
    } else {
      groups.push({ startTime: event.startTime, events: [event] });
    }
  });
  return groups;
}

function calculateEventTopOffset(event) {
  const [startHour, startMinute] = event.startTime.split(':').map(Number);
  const hourOffset = startHour - timelineStartHour;
  const minuteOffset = startMinute / 60;
  return (hourOffset + minuteOffset) * pixelsPerHour + 45 + 'px';
}

function calculateEventHeight(event) {
  const [startHour, startMinute] = event.startTime.split(':').map(Number);
  const [endHour, endMinute] = event.endTime.split(':').map(Number);
  const durationHours = endHour - startHour;
  const durationMinutes = endMinute - startMinute;
  const totalDurationInHours = durationHours + durationMinutes / 60;
  return totalDurationInHours * pixelsPerHour + 'px';
}
// onMounted(() => {
//   console.log(activityListRef.value);
//   console.log("activity 0 (x,y,w,h):");
//   console.log(activityListRef.value[0].getBoundingClientRect());
//   console.log(activityListRef.value[4].getBoundingClientRect());

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

<style scoped>
.date-tabs {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  /* Adjust as necessary */
}

.date-tab {
  background-color: #FFA500;
  /* Orange color */
  color: white;
  border: none;
  padding: 10px 20px;
  margin: 0 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-weight: bold;
  border-radius: 20px;
  /* Gives the rounded edges */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  /* Adds a subtle shadow */
}

.date-tab:not(.active):hover {
  background-color: #e69500;
  /* Slightly darker orange on hover for non-active buttons */
}

.active {
  background-color: #FF4500;
  /* Darker orange for the active button */
}
</style>
