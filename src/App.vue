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
  console.log(data.data);
  console.log(data.msg);
};

const props = defineProps({
  theme: {
    type: String,
    default: 'light', // dark
  },
});
</script>
