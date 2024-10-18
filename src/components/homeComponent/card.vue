<template>
    <router-link to="/productDetail/1">
        <article class="flex flex-col justify-center items-center gap-2 bg-gray-800 sm:bg-gray-900 bg-opacity-10 sm:p-1 rounded-md shadow-sm shadow-purple-400 cursor-pointer group sm:hover:-translate-y-4 transition-all duration-300">
            <figure class="w-full h-32 overflow-hidden rounded-md sm:h-40 sm:group-hover:-translate-y-4 transition-all duration-300">
                <img class="w-full h-full" src="@/assets/images/lampImage.png" alt="sample_image">
            </figure>
            <h3 class="text-yellow-100 sm:text-lg">نام نمونه کار</h3>
            <p class="text-gray-200 text-sm -translate-y-1">توضیحات نمونه کار</p>
            <span class="w-11/12 text-center text-sm sm:text-base rounded-sm bg-blue-400 mb-1 sm:scale-y-0 sm:group-hover:scale-y-100 transition-all duration-300">مشاهده</span>
        </article>
    </router-link>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>