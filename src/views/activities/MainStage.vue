<template>
  <Breadcrumb />
  <ActivityContent :list=activityDetails.mainStage title="主舞台〈曦瓣〉" :img="`/BikeFestival17th-Frontend/${activities[0].img}`"/>
</template>

<script setup>
import ActivityContent from '../../components/ActivityContent.vue';
import activityDetails from '../../data/activityDetails.json';
import activities from '../../data/activities.json';
import Breadcrumb from '@/components/Breadcrumb.vue';
</script>
