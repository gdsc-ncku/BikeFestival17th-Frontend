<template>
  <NavBar />
  <router-view></router-view>
  <Footer />
  <Dialog />
</template>

<script setup>
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';
import Dialog from './components/Dialog.vue';

const props = defineProps({
  theme: {
    type: String,
    default: 'light', // dark
  },
});
</script>
