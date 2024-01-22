<template>
  <Breadcrumb />
  <ActivityContent :list=activityDetails.educationalGuide title="升學指南" :img="`/BikeFestival17th-Frontend/public/${activities[3].img}`"/>
</template>

<script setup>
import ActivityContent from '../../components/ActivityContent.vue';
import activityDetails from '../../data/activityDetails.json';
import activities from '../../data/activities.json';
import Breadcrumb from '@/components/Breadcrumb.vue';
</script>
