<template>
  <!-- center container -->
  <div class="w-fill flex justify-center flex-col">
    <!-- Date tabs -->
    <div class="date-tabs">
      <button
        class="date-tab"
        :class="{ active: selectedDate === '3/2' }"
        @click="selectDate('3/2')"
      >
        DAY 1 | 03/02
      </button>
      <button
        class="date-tab"
        :class="{ active: selectedDate === '3/3' }"
        @click="selectDate('3/3')"
      >
        DAY 2 | 03/03
      </button>
    </div>

    <!-- laptop container -->
    <div class="w-full flex justify-center">
      <!-- left time list -->
      <div class="w-fill flex justify-start mt-11">
        <!-- time line -->
        <div class="flex flex-col gap-[150px] max-w-full">
          <div
            class="w-fill flex justify-center gap-[40px]"
            v-for="index in 10"
            :key="index"
          >
            <!-- time box -->
            <div class="w-[80px] h-[35px] font-bold text-2xl text-primary-900">
              {{ index + 8 }}:00
            </div>
          </div>
        </div>
      </div>
      <!-- scrollable container -->
      <div class="max-w-[1260px] overflow-scroll" style="overflow-x: scroll; direction: ltr;">
        <!-- events display aligned to timeline and activity -->
        <div class="flex justify-start gap-[40px] p-200 w-[3000px]">
          <!-- <div class="relative" v-for="(activity, activityIndex) in activityList" :key="activity" > -->
          <div
            class="relative"
            v-for="(project, projectIndex) in projectList"
            :key="project"
          >
            <div class="text-black font-medium text-center text-xl min-w-[160px] px-4 py-2"
              :style="{ backgroundColor: projectColorList[project] }"
              :id="project"
              ref="projectElementList">
              {{ project }}
            </div>
            <div class="flex flex-col gap-4">
              <template
                v-for="(eventGroup, index) in groupEventsByTime(
                  eventDict[selectedDate][project]
                )"
              >
                <div
                  :style="{
                    top: calculateEventTopOffset(eventGroup.events[0]),
                    height: calculateEventHeight(eventGroup.events[0]),
                    transform: `translateX(${calculateLeftOffset(projectIndex)}px)`,
                  }"
                  class="absolute"
                >
                  <template v-if="eventGroup.events.length > 1">
                    <ScheduleCardMulti
                      :activity="project"
                      :events="eventGroup.events"
                      :showModal="showModal"
                      @close="showModal = false"
                    />
                  </template>
                  <div v-else class="flex justify-between">
                    <ScheduleCardSingle
                      :id="eventGroup.events[0].id"
                      :name="eventGroup.events[0].name"
                      :date="eventGroup.events[0].date"
                      :startTime="eventGroup.events[0].startTime"
                      :endTime="eventGroup.events[0].endTime"
                      :host="eventGroup.events[0].host"
                      :location="eventGroup.events[0].location"
                      :activity="eventGroup.events[0].activity"
                      :link="eventGroup.events[0].link"
                      :showModal="showModal"
                      @close="showModal = false"
                    />
                  </div>
                  <!-- <div
                    v-for="(event, eventIndex) in eventGroup.events"
                    class="flex justify-between"
                  >
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
                    />
                  </div> -->
                </div>
              </template>
            </div>
          </div>
        </div>

        <!-- center container -->
        <div class="w-fill flex justify-start">
          <!-- time line -->
          <div class="flex flex-col gap-[150px] max-w-full">
            <div
              class="w-fill flex justify-center gap-[40px]"
              v-for="index in 10"
              :key="index"
            >
              <!-- left time box -->
              <!-- <div class="w-[65px] h-[35px] font-bold text-2xl text-primary-900">
              {{ index + 8 }}:00
            </div> -->
              <div class="flex flex-col justify-center">
                <div class="w-[4400px] h-0 border-[1px]"></div>
              </div>
              <!-- right fake box -->
              <div class="w-[65px] h-[35px] opacity-0">fake</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import event from "../../data/event.json";
import ScheduleCardSingle from "../../components/ScheduleCardSingle.vue";
import ScheduleCardMulti from "../../components/ScheduleCardMulti.vue";
import { ref, onMounted, onBeforeMount, computed } from "vue";

// Constants for layout
const pixelsPerHour = 185; // Height of one hour in pixels on the timeline
const timelineStartHour = 9; // timeline starts at 9:00 AM
const cardWidth = 155; // Width of each card

const projectList = ref([
  "舞台活動",
  "傑出校友生涯講座",
  "What Matters Most 工作坊",
  "校園論壇",
  "教授面試技巧演講",
  "學習歷程講座",
  "申請入學經驗談",
  "科系體驗坊",
  "系館導覽",
  "解憂茶軒",
  "沈浸式體驗",
  "人生岔路口",
]);

const projectElementList = ref(null);

const cardTransformList = ref([
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
]);

const projectColorList = ref({
  舞台活動: null,
  傑出校友生涯講座: "#FF5C0045",
  "What Matters Most 工作坊": "#FF5C0045",
  校園論壇: "#FF5C0045",
  教授面試技巧演講: "#9CDAF7",
  學習歷程講座: "#9CDAF7",
  申請入學經驗談: "#9CDAF7",
  科系體驗坊: "#FFEAA0",
  系館導覽: "#FFEAA0",
  解憂茶軒: null,
  沈浸式體驗: null,
  人生岔路口: null,
});

const selectedDate = ref("3/2");

const eventDict = ref({});
// process event data before mount
/*
  schema : 
  {
    "2024/3/2" : {
      "舞台活動" : [event1, event2, ...],
      "傑出校友生涯講座" : [event1, event2, ...],
      ...
    },
    "2024/3/3" : {
      "科系博覽" : [event1, event2, ...],
      "傑出校友生涯講座" : [event1, event2, ...],
      ...
    },
  }
  */

onBeforeMount(() => {
  // init eventDict in the order above
  selectedDate.value = "3/2";
  eventDict.value = {
    "3/2": {},
    "3/3": {},
  };

  // init eventDict value
  for (let project of projectList.value) {
    eventDict.value["3/2"][project] = [];
    eventDict.value["3/3"][project] = [];
  }

  console.log(eventDict.value);

  // add event to eventDict
  event.map((item) => {
    console.log(item);
    console.log(item.date);
    console.log(item.project);
    console.log(eventDict.value[item.date]);
    console.log(eventDict.value[item.date][item.project]);
    eventDict.value[item.date][item.project].push(item);
  });

  // sort event by date & start time
  projectList.value.map((project) => {
    eventDict.value["3/2"][project].sort((a, b) => {
      return a.startTime > b.startTime ? 1 : -1;
    });
    eventDict.value["3/3"][project].sort((a, b) => {
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
    const group = groups.find(
      (group) =>
        group.startTime === event.startTime && group.endTime === event.endTime
    );
    if (group) {
      group.events.push(event);
    } else {
      groups.push({
        startTime: event.startTime,
        endTime: event.endTime,
        events: [event],
      });
    }
  });
  return groups;
}

function calculateEventTopOffset(event) {
  const [startHour, startMinute] = event.startTime.split(":").map(Number);
  const hourOffset = startHour - timelineStartHour;
  const minuteOffset = startMinute / 60;
  return (hourOffset + minuteOffset) * pixelsPerHour + 45 + 15 + "px";
}

function calculateEventHeight(event) {
  const [startHour, startMinute] = event.startTime.split(":").map(Number);
  const [endHour, endMinute] = event.endTime.split(":").map(Number);
  const durationHours = endHour - startHour;
  const durationMinutes = endMinute - startMinute;
  const totalDurationInHours = durationHours + durationMinutes / 60;
  return totalDurationInHours * pixelsPerHour + "px";
}

function calculateLeftOffset(project) {
  // update cardTransformList onMounted
  return cardTransformList.value[project] ;
}

onMounted(() => {
  for (let i = 0; i < projectElementList.value.length; i++) {
    cardTransformList.value[i] = (projectElementList.value[i].clientWidth - cardWidth) / 2;
  }
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
  background-color: #ffa500;
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
  background-color: #ff4500;
  /* Darker orange for the active button */
}
</style>
