<template>
  <Breadcrumb />
  <ActivityContent :list=activityDetails.immersiveExperience title="沉浸式體驗" :img="`/BikeFestival17th-Frontend/${activities[5].img}`"/>
</template>

<script setup>
import ActivityContent from '../../components/ActivityContent.vue';
import activityDetails from '../../data/activityDetails.json';
import activities from '../../data/activities.json';
import Breadcrumb from '@/components/Breadcrumb.vue';
</script>
