<template>
  <ActivityContent :list=activityDetails.universityBlueprint title="大學藍圖" />
</template>

<script setup>
import ActivityContent from '../../components/ActivityContent.vue';
import activityDetails from '../../data/activityDetails.json';
</script>