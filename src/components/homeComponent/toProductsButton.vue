<template>
    <router-link to="" class="absolute top-1 right-2 flex items-center cursor-pointer">
        <rightArrow/>
        <rightArrow class="transform translate-x-4 rotate-180"/>
        <span class="text-yellow-200 text-sm translate-x-4">مشاهده همه</span>
    </router-link>
</template>

<script setup>
import rightArrow from '../icons/rightArrow.vue';
import { RouterLink } from 'vue-router';
</script>