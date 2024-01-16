<template>
  <ActivityContent :list=activityDetails.departmentExpo title="科系博覽"/>
</template>

<script setup>
import ActivityContent from '../../components/ActivityContent.vue';
import activityDetails from '../../data/activityDetails.json';
</script>