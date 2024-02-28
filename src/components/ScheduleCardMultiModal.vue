<template>
  <Transition name="modal">
    <!-- z-index + mask -->
    <div
      v-if="show"
      class="z-[9999] fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 max-sm:flex-col max-sm:justify-end max-h-screen overflow-scroll"
      @click.self="$emit('close')"
    >
      <div
      class="max-h-screen">
        <div
          v-for="(event, index) in events"
          :key="`${event.id}-${index}`"
          :class="`max-h-[${events.length * 100}px]`"
          class="sm:w-[720px] w-[100vw] bg-white px-3 py-4 sm:rounded max-sm:rounded-tl-[1.25rem] max-sm:rounded-tr-[1.25rem] mt-4"
        >
          <!-- top -->

          <div class="flex justify-between">
            <!-- right container -->
            <div
              class="flex flex-col justify-center max-sm:max-w-[calc(100%_-_51px)]"
            >
              <span
                class="block text-primary-900 font-bold text-base underline"
                >{{ event.activity }}</span
              >
              <div
                class="flex sm:justify-center gap-8 max-sm:flex-wrap max-sm:gap-y-2"
              >
                <span
                  class="text-black font-bold sm:text-[28px] text-lg sm:max-w-[350px] truncate"
                >
                  {{ event.name }}
                </span>
                <a
                  :href="link"
                  target="_blank"
                  class="font-bold text-xl max-sm:text-base text-white bg-primary-900 h-[50px] rounded-md px-3 flex flex-col justify-center"
                >
                  即刻報名
                </a>
                <div class="flex flex-col justify-center">
                  <SaveScheduleButton
                    :id="event.id"
                    :activity="event.activity"
                    :project="event.project"
                    :description="event.description"
                    :name="event.name"
                    :date="event.date"
                    :startTime="event.startTime"
                    :endTime="event.endTime"
                    :host="event.host"
                    :location="event.location"
                    :link="event.link"
                    :saved="event.saved"
                    :size="'lg'"
                  ></SaveScheduleButton>
                </div>
              </div>
            </div>
            <!-- left close icon -->
            <button
              @click="$emit('close')"
              class="flex justify-center items-center bg-no-repeat w-[51px] h-[51px] hover:bg-gray-100 hover:rounded-full"
              style="
                background-image: url('/BikeFestival17th-Frontend/schedule/close.svg');
                background-size: 51px 51px;
              "
            ></button>
          </div>
          <!-- time & location -->
          <div class="mt-3">
            <p class="text-black text-base font-[350] truncate">
              {{ event.date }} {{ event.startTime }}-{{ event.endTime }}
            </p>
            <p class="text-black text-base font-[350] truncate">
              {{ event.location }}
            </p>
          </div>
          <!-- description -->
          <div class="mt-3">
            <p class="text-black sm:text-base text-base font-[400]">
              {{ event.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import SaveScheduleButton from "./SaveScheduleButton.vue";

const props = defineProps({
  events: {
    type: Array,
    required: true,
  },
  show: {
    type: Boolean,
    required: true,
  }
});

const { events } = props;
defineEmits(["close"]);
</script>
