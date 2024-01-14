<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="bg-primary lg:hidden border-b-2 border-white p-4 flex justify-end">
        <a href="#"><img src="../assets/top-arrow.svg" alt="go to top"></a>
    </div>
    <div class="bg-primary text-white py-12 lg:text-xl text-sm">
        <div class="max-w-[1200px] mx-auto my-0 flex lg:justify-between justify-around">
            <div class="lg:block flex flex-col items-center">
                <img src="../assets/footer-logo.png" alt="logo" class="lg:block hidden">
                <img src="../assets/footer-logo-yellow.png" alt="logo" class="lg:hidden">
                <p class="font-bold lg:text-white text-tertiary lg:text-xl text-base my-2">第17屆大學科系博覽會</p>
                <div class="flex">
                    <a href="https://www.facebook.com/NCKUbikefestival/?locale=zh_TW" target="_blank"><img src="../assets/facebook.png" alt="facebook" class="mr-3"></a>
                    <a href="https://www.instagram.com/nckubike_official/" target="_blank"><img src="../assets/instagram.png" alt="instagram" class="mr-3"></a>
                    <a href="https://www.youtube.com/@user-ss2sl8nu8l" target="_blank"><img src="../assets/youtube.png" alt="youtube"></a>
                </div>
            </div>
            <div class="lg:flex hidden">
                <RouterLink to="/about">關於單車節</RouterLink>
                <p>　｜　</p>
                <RouterLink to="/info">參加資訊</RouterLink>
            </div>
            <div class="lg:flex hidden">
                <RouterLink to="/activities">主題活動</RouterLink>
                <p>　｜　</p>
                <RouterLink to="/forum">知識論壇</RouterLink>
            </div>
            <div class="lg:flex hidden">
                <RouterLink to="/partners">合作夥伴</RouterLink>
                <p>　｜　</p>
                <RouterLink to="/souvenir">紀念品小鋪</RouterLink>
            </div>
            <div class="lg:hidden flex flex-col items-end justify-between">
                <div class="flex">
                    <RouterLink to="/about">關於單車節</RouterLink>
                    <p>　｜　</p>
                    <RouterLink to="/info">參加資訊</RouterLink>
                </div>
                <div class="flex">
                    <RouterLink to="/activities">主題活動</RouterLink>
                    <p>　｜　</p>
                    <RouterLink to="/forum">知識論壇</RouterLink>
                </div>
                <div class="flex">
                    <RouterLink to="/souvenir">紀念品小鋪</RouterLink>
                    <p>　｜　</p>
                    <RouterLink to="/partners">合作夥伴</RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>