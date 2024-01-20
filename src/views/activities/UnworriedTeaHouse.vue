<template>
  <Breadcrumb />
  <ActivityContent :list=activityDetails.unworriedTeaHouse title="解憂茶軒" :img="`/BikeFestival17th-Frontend/public/${activities[6].img}`"/>
</template>

<script setup>
import ActivityContent from '../../components/ActivityContent.vue';
import activityDetails from '../../data/activityDetails.json';
import activities from '../../data/activities.json';
import Breadcrumb from '@/components/Breadcrumb.vue';
</script>