<script setup>
import Footer from './components/Footer.vue';

</script>
<template>
  <nav>
    <ol>
      <li><router-link to="/">首頁</router-link></li>
      <li><router-link to="/about">關於單車節</router-link></li>
      <li><router-link to="/info">參加資訊</router-link></li>
      <li><router-link to="/activities">主題活動</router-link></li>
      <li><router-link to="/forum">知識論壇</router-link></li>
      <li><router-link to="/partners">合作夥伴</router-link></li>
      <li><router-link to="/souvenir">紀念品預購</router-link></li>
    </ol>
  </nav>
  <router-view></router-view>
  <Footer />
</template>

