<template>
    <RouterLink :to="link" class="w-[21.1875rem] h-[14rem] bg-[#E1E1E1] rounded-[0.3125rem] mt-[8.1875rem] relative">
        <div class="title bg-secondary px-[1.3125rem] pt-[0.8125rem] pb-[0.75rem] text-xl relative rounded-[0.3125rem]">
            <div class="font-bold text-right text-content" :class="titleSize">{{ title }}</div>
            <!-- <div class="font-bold text-right text-content" :class="titleSize">{{ title }}</div> -->
            <div class="absolute bottom-[calc(100%_+_0.44rem)] left-[2.25rem] text-white text-justify">#{{ class_ }}</div>
        </div>
        <div class="text-content mt-4 ml-[0.94rem] mr-[1.69rem] text-sm">{{ context }}</div>
        <div class="text-white text-center py-[0.38rem] bg-[#5A5A5A] rounded-bl-[0.3125rem] rounded-br-[0.3125rem] absolute w-full bottom-0 text-sm">發佈於 {{ timestamp }}</div>
    </RouterLink>
</template>

<script setup>
    const props = defineProps({
        class_: {
            type: String,
            default: "Class",
        },
        title: {
            type: String,
            default: "Title",
        },
        titleSize: {
            type: String,
            default: "",
        },
        context: {
            type: String,
            default: "context. abcdefg."
        },
        timestamp: {
            type: String,
            default: "yyyy-mm-dd"
        },
        link: {
            type: String,
            default: ""
        },
    });
</script>

<style scoped>
    .title::before {
        content: "";
        position: absolute;
        top: calc(50% - 9.875rem);
        left: calc(50% - 9.875rem);
        width: 19.75rem;
        height: 19.75rem;
        background-color: var(--Primary-900, #FF7B1A);
        z-index: -1;
        border-radius: 50%;
        border: 6.31353rem solid black;
    }

    .text-content {
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
</style>
