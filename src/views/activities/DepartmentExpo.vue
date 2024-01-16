<template>
  <Breadcrumb />
  <ActivityContent :list=activityDetails.departmentExpo title="科系博覽"/>
</template>

<script setup>
import ActivityContent from '../../components/ActivityContent.vue';
import activityDetails from '../../data/activityDetails.json';
import Breadcrumb from '@/components/Breadcrumb.vue';
</script>
