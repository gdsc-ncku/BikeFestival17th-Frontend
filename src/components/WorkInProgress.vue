<template>
  <div class="layout_content h-96 flex flex-col justify-center items-center">
    <div class="flex items-center">
      <div class="flex flex-col">
        <div class="w-24 h-6 relative overflow-hidden -translate-x-3">
          <span class="inline-block w-24 h-1 bg-content absolute animate-speed-line line-1"></span>
        </div>
        <div class="w-24 h-6 relative overflow-hidden translate-x-3">
          <span class="inline-block w-24 h-1 bg-content absolute animate-speed-line line-2"></span>
        </div>
        <div class="w-24 h-6 relative overflow-hidden -translate-x-6">
          <span class="inline-block w-24 h-1 bg-content absolute animate-speed-line line-3"></span>
        </div>
      </div>
      <img class="w-[200px] ml-5" :src="animated_bicycle" alt="animated_bicycle">
    </div>
    <h1 class="md:text-4xl text-xl text-content">哎呀! 開發團隊還在趕路中......(⑉꒦ິ^꒦ິ⑉)</h1>
  </div>
</template>

<script setup>
import animated_bicycle from '@/assets/animated_bicycle.gif'
</script>

<style>
@keyframes speedLineToLeft {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.animate-speed-line {
  animation: speedLineToLeft 0.5s linear infinite;
}
.animate-speed-line.line-1 {
  animation-delay: 0s;
}
.animate-speed-line.line-2 {
  animation-delay: 0.1s;
}
.animate-speed-line.line-3 {
  animation-delay: 0.2s;
}

</style>
