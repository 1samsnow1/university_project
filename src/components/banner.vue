<template>
    <section class="w-full relative h-60 sm:h-80 bg-blue-600
    flex justify-center items-center rounded-lg overflow-hidden">
        <div class="absolute left-0 animate-bounceUpAndDown bg-gray-200 w-2 h-4 rounded-full z-0"></div>
        <div class="absolute right-0 bg-gray-200 w-2 h-4 rounded-full z-0" :class="secondAnime==true?'animate-bounceUpAndDown':''"></div>
        <div class="bg-gray-900 sm:bg-gray-950 w-[98%] h-full z-10">
            <swiper-container Autoplay slides-per-view="1" speed="1000" loop="true" css-mode="true"
            class="w-11/12 mx-auto h-full">
                <swiper-slide class="">
                    <img src="@/assets/images/electronic-design-lab-1.jpg" class="w-full h-full rounded-lg" alt="labPic">
                </swiper-slide>

                <swiper-slide class="">
                    <img src="@/assets/images/labPic2.jpg" class="w-full h-full rounded-lg" alt="labPic">
                </swiper-slide>
            </swiper-container>
        </div>
    </section>
</template>

<script setup>
import {Autoplay} from 'swiper/modules';
import { ref } from 'vue';
let secondAnime = ref(false);
setTimeout(() => {
    secondAnime.value = true;
}, 300);
</script>