<template>
  <h1 class="text-3xl font-bold">參加資訊</h1>
  <h1 class="text-3xl font-bold">參加資訊</h1>
  <h1 class="text-3xl font-bold">參加資訊</h1>
  <h1 class="text-3xl font-bold">參加資訊</h1>

  <div class="flex flex-col space-y-4">
    <ScheduleCardSingle
      v-for="item in event"
      :key="item.id"
      :id="item.id"
      :project="item.project"
      :description="item.description"
      :name="item.name"
      :date="item.date"
      :startTime="item.startTime"
      :endTime="item.endTime"
      :speaker="item.speaker"
      :location="item.location"
    />
  </div>
</template>


<script setup>
import event from '../data/event.json';
import ScheduleCardSingle from '../components/ScheduleCardSingle.vue';

</script>

