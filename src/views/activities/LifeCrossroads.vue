<template>
  <Breadcrumb />
  <ActivityContent :list=activityDetails.lifeCrossroads title="人生叉路口" :img="`/BikeFestival17th-Frontend/${activities[4].img}`"/>
</template>

<script setup>
import ActivityContent from '../../components/ActivityContent.vue';
import activityDetails from '../../data/activityDetails.json';
import activities from '../../data/activities.json';
import Breadcrumb from '@/components/Breadcrumb.vue';
</script>
