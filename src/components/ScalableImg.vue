<template>
    <label class="group">
        <img class="h-full w-full sm:hover:scale-110 group-has-[:checked]:sm:scale-100 cursor-pointer group-has-[:checked]:sm:fixed group-has-[:checked]:sm:h-[80vmin] group-has-[:checked]:sm:w-[80vw] group-has-[:checked]:sm:top-[9rem] group-has-[:checked]:sm:left-[10vw] z-10 object-contain" :src="src">
        <div class="h-screen w-screen group-has-[:checked]:sm:bg-[#3336] fixed top-0 left-0 pointer-events-none" ></div>
        <input type="checkbox" class="hidden">
    </label>
</template>

<script setup>
    import { defineProps } from "vue";
    const props = defineProps({
        src: {
            type: String,
        }
    });
</script>
