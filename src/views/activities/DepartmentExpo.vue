<template>
  <Breadcrumb />
  <ActivityContent :list="activityDetails.departmentExpo" title="科系博覽" :img="`/BikeFestival17th-Frontend/${activities[1].img}`"/>
</template>

<script setup>
import ActivityContent from '../../components/ActivityContent.vue';
import activityDetails from '../../data/activityDetails.json';
import activities from '../../data/activities.json';
import Breadcrumb from '@/components/Breadcrumb.vue';
</script>
