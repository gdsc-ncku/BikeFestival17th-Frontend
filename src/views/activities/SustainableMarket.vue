<template>
  <Breadcrumb />
  <ActivityContent :list=activityDetails.sustainableMarket title="告別前任永續市集" :img="`/BikeFestival17th-Frontend/public/${activities[7].img}`"/>
</template>

<script setup>
import ActivityContent from '../../components/ActivityContent.vue';
import activityDetails from '../../data/activityDetails.json';
import activities from '../../data/activities.json';
import Breadcrumb from '@/components/Breadcrumb.vue';
</script>
