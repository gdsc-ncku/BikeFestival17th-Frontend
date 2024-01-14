<template>
  <NavBar />
  <router-view></router-view>
</template>

<script setup>
import NavBar from './components/NavBar.vue';

const props = defineProps({
  theme: {
    type: String,
    default: 'light', // dark
  },
});
</script>
