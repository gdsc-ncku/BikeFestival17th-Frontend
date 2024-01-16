<template>
  <Breadcrumb />
  <ActivityContent :list=activityDetails.educationalGuide title="升學指南" />
</template>

<script setup>
import ActivityContent from '../../components/ActivityContent.vue';
import activityDetails from '../../data/activityDetails.json';
import Breadcrumb from '@/components/Breadcrumb.vue';
</script>
