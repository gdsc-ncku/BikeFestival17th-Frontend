<template>
  <ActivityContent :list=activityDetails.educationalGuide title="升學指南" />
</template>

<script setup>
import ActivityContent from '../../components/ActivityContent.vue';
import activityDetails from '../../data/activityDetails.json';
</script>