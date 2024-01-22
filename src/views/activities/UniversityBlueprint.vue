<template>
  <Breadcrumb />
  <ActivityContent :list=activityDetails.universityBlueprint title="大學藍圖" :img="`/BikeFestival17th-Frontend/public/${activities[2].img}`"/>
</template>

<script setup>
import ActivityContent from '../../components/ActivityContent.vue';
import activityDetails from '../../data/activityDetails.json';
import activities from '../../data/activities.json';
import Breadcrumb from '@/components/Breadcrumb.vue';
</script>
