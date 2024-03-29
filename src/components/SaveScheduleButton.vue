<template>
  <button
    :class="{
      'w-[51px] h-[51px]': size === 'lg',
      'w-[24px] h-[24px]': size === 'sm',
    }"
    :style="{
      'background' : subscribeIcon,
    }"
    class="flex justify-center items-center"
    @click="handleSave"
  ></button>
</template>

<script setup>
import { computed, defineProps} from "vue";
import { useEventStore } from "../stores/user";

const eventStore = useEventStore();

let props = defineProps({
  id: {
    type: String,
    required: true,
  },
  activity: {
    type: String,
    required: true,
  },
  project: {
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
  size: {
    type: String,
    default: "sm", // lg
  },
});

const {
  id,
  activity,
  project,
  description,
  name,
  date,
  startTime,
  endTime,
  host,
  location,
  link,
  saved,
  size,
} = props;

const subscribeIcon = computed(() => {
    if(eventStore.isEventSubscribed(id)){
        if(size === 'lg'){
            return "url(/BikeFestival17th-Frontend/schedule/subscribed-lg.svg) no-repeat";
        }
        return "url(/BikeFestival17th-Frontend/schedule/subscribed.svg) no-repeat";
    }
    else{
        if(size === 'lg'){
            return "url(/BikeFestival17th-Frontend/schedule/not-subscribed-lg.svg) no-repeat";
        }
        return "url(/BikeFestival17th-Frontend/schedule/not-subscribed.svg) no-repeat";
    }
});

const handleSave = () => {
  // YYYY-MM-DD HH:MM:SS
  if (eventStore.isEventSubscribed(id)) {
    console.log("unsubscribed");
    eventStore.unSubscribeEvent(id, name);
    return;
  }
  const day = date.split("/")[1];
  const start = `2024/03/0${day} ${startTime}`;
  const end = `2024/03/0${day} ${endTime}`;
  const detail = JSON.stringify({
    id: id,
    name: name || "default_name",
    activity: activity || "default_activity",
    project:project || "default_project",
    description: description || "default_description",
    date: date || "default_date",
    startTime: startTime || "default_startTime",
    endTime: endTime || "default_endTime",
    host: host || "default_host",
    location: location || "default_location",
    link: link || "default_link",
  });
  eventStore.subscribeEvent(id, start, end, detail, name);
};

</script>
