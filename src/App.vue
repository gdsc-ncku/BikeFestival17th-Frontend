<template>
  <NavBar />
  <router-view></router-view>
  <Footer />
</template>

<script setup>
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';
import { onMounted } from 'vue';
import {profile} from "@/api/user";

onMounted(() => {
  auth()
});

const auth = async () => {
  const data = await profile();
  if (data.success) {
    // set user info in pinia store
  } else {
    // try to refresh token
    // if success, call profile again and set user info in pinia store if the call is success
    // if failed, do nothing
  }
};

const props = defineProps({
  theme: {
    type: String,
    default: 'light', // dark
  },
});
</script>
