<template>
  <NavBar />
  <router-view></router-view>
  <Footer />
</template>

<script setup>
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';

const props = defineProps({
  theme: {
    type: String,
    default: 'light', // dark
  },
});
</script>
