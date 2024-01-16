<template>
  <ActivityContent :list=activityDetails.mainStage title="主舞台〈曦瓣〉"/>
</template>

<script setup>
import ActivityContent from '../../components/ActivityContent.vue';
import activityDetails from '../../data/activityDetails.json';
</script>