<template>
    <div class="max-w-[1200px] flex flex-wrap lg:justify-between justify-center mt-16">
        <div v-for="(item, index) in memberInfo" :key=index class="w-[362px] h-[177px] border border-content rounded-[40px] bg-white flex p-6 items-center justify-between mb-7">
            <div class="lg:w-[100px] lg:h-[100px] w-[80px] h-[80px] rounded-full bg-gray-500"></div>
            <div class="lg:w-[200px] w-[160px]">
                <p class="text-primary text-xs mb-2">{{ item.department }}・{{ item.class }}</p>
                <p class="text-content font-bold text-xl mb-2">{{ item.name }}</p>
                <p class="text-content text-xs mb-2">{{ item.tags }}</p>
                <p class="text-content text-xs font-bold">♫ {{ item.song }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import memberInfo from "../data/memberInfo.json";
</script>