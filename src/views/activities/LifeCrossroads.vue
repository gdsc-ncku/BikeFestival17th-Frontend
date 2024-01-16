<template>
  <ActivityContent :list=activityDetails.lifeCrossroads title="人生叉路口"/>
</template>

<script setup>
import ActivityContent from '../../components/ActivityContent.vue';
import activityDetails from '../../data/activityDetails.json';
</script>