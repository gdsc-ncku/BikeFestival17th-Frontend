<template>
   <Breadcrumb />
  <ActivityContent :list=activityDetails.immersiveExperience title="沉浸式體驗" />
</template>

<script setup>
import ActivityContent from '../../components/ActivityContent.vue';
import activityDetails from '../../data/activityDetails.json';
import Breadcrumb from '@/components/Breadcrumb.vue';
</script>
