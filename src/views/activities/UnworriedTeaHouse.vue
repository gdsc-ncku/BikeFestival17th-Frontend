<template>
  <ActivityContent :list=activityDetails.unworriedTeaHouse title="解憂茶軒" />
</template>

<script setup>
import ActivityContent from '../../components/ActivityContent.vue';
import activityDetails from '../../data/activityDetails.json';
</script>