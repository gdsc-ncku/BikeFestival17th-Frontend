<template>
  <!-- center container (on laptop) -->
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

    <!-- laptop container -->
    <div class="w-full sm:flex hidden justify-center">
      <!-- left time list -->
      <div class="w-fill flex justify-start mt-11">
        <!-- time line -->
        <div class="flex flex-col gap-[150px] max-w-full border-r-2">
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
      <div
        class="max-w-[1260px] overflow-scroll"
        style="overflow-x: scroll; direction: ltr"
      >
        <!-- events display aligned to timeline and activity -->
        <template v-for="(date, i) in dateList">
          <div
            class="flex justify-start gap-[40px] p-200 w-[3000px]"
            v-if="dateStore.selectedDate == date"
          >
            <div
              class="relative"
              v-for="(project, projectIndex) in projectList"
              :key="project"
            >
              <div
                class="text-black font-medium text-center text-xl min-w-[160px] px-4 py-2"
                :style="{ backgroundColor: projectColorList[project] }"
                :id="project"
                ref="projectElementList"
              >
                {{ project }}
              </div>
              <div class="flex flex-col gap-4">
                <template
                  v-for="(eventGroup, index) in groupEventsByTime(
                    eventDict[dateStore.selectedDate][project]
                  )"
                >
                  <div
                    :style="{
                      top: calculateEventTopOffset(eventGroup.events[0]),
                      height: calculateEventHeight(eventGroup.events[0]),
                      transform: `translateX(${calculateLeftOffset(
                        projectIndex
                      )}px)`,
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
                  </div>
                </template>
              </div>
            </div>
          </div>
        </template>

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

  <!-- mobile container -->
  <template v-for="(date, i) in dateList">
    <div class="sm:hidden" v-if="dateStore.selectedDate == date">
      <div v-for="index in 10" :key="`mobile-${index}`" class="mt-4">
        <div class="w-full font-bold text-2xl text-primary-900">
          {{ `${index == 1 ? "0" : ""}${index + 8}` }}:00
        </div>
        <div v-for="(event, idx) in filterEventsByStartTime(index)">
          <div class="mt-4">
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
          </div>
        </div>
      </div>
    </div>
  </template>

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
</template>

<script setup>
import event from "../../data/event.json";
import ScheduleCardSingle from "../../components/ScheduleCardSingle.vue";
import ScheduleCardMulti from "../../components/ScheduleCardMulti.vue";
import { ref, onBeforeMount, onMounted } from "vue";
import { useEventStore } from "../../stores/user";
import { useDateStore } from '../../stores/date';
import Cookies from "js-cookie";

const dateStore = useDateStore();
const eventStore = useEventStore();
const { fetchUserEvents } = eventStore;

// Constants for layout
const pixelsPerHour = 185; // Height of one hour in pixels on the timeline
const timelineStartHour = 9; // timeline starts at 9:00 AM
const cardWidth = 155; // Width of each card

const dateList = ref(["3/2", "3/3"]);

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
  "人生叉路口",
  "告別前任永續市集",
]);

const projectElementList = ref(null);

const cardTransformList = ref([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

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

const eventDict = ref({});
const showModal = ref(false);
const showTutorial = ref(true);
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
  eventDict.value = {
    "3/2": {},
    "3/3": {},
  };

  // init eventDict value
  for (let project of projectList.value) {
    eventDict.value["3/2"][project] = [];
    eventDict.value["3/3"][project] = [];
  }

  // console.log(eventDict);
  // console.log(eventDict.value);

  // add event to eventDict 將event.json 中所有活動加入到 eventDict 活動字典
  event.map((item) => {
    // console.log(item);
    // console.log(item.date);
    // console.log(item.project);
    // console.log(eventDict.value[item.date]);
    // console.log(eventDict.value[item.date][item.project]);

    if (eventDict.value[item.date][item.project] == undefined){
      // console.log(`eventDict.value[${item.date}][${item.project}] is undefined`);
    }
    else{
      eventDict.value[item.date][item.project].push(item);
    }
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
  // console.log(eventDict.value);

  //set cookie
  let isVisited = Cookies.get("isVisited");
  if (isVisited == undefined) Cookies.set("isVisited", "yes");
  else showTutorial.value = false;
});


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

function filterEventsByStartTime(start) {
  // startTime: 09:00
  // endTime: 09:00 + 1 hour

  const startTime = `${start == 1 ? "0" : ""}${start + 8}:00`;
  const endTime = `${start + 9}:00`;
  // console.log("filterEventsByStartTime:condition");
  // console.log(startTime);
  // console.log(endTime);

  let groups = [];
  for (let project of projectList.value) {
    const events = eventDict.value[dateStore.selectedDate][project];
    // console.log("filterEventsByStartTime:project");
    // console.log(events);
    const filteredEvents = events.filter(
      (event) => event.startTime >= startTime && event.startTime < endTime
    );
    // console.log("filterEventsByStartTime:filteredEvents")
    // console.log(filteredEvents);
    // if (filteredEvents.length > 0) {
    //   groups.concat(filteredEvents);
    //   console.log("filterEventsByStartTime:concat")
    //   console.log(groups);
    // }
    groups = groups.concat(filteredEvents);
  }

  // console.log("filterEventsByStartTime");
  // console.log(groups);

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
  return cardTransformList.value[project];
}

onMounted(() => {
  // fetch user events
  fetchUserEvents();

  for (let i = 0; i < projectElementList.value.length; i++) {
    cardTransformList.value[i] =
      (projectElementList.value[i].clientWidth - cardWidth) / 2;
  }
});
</script>