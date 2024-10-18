<template>
    <section class="w-full bg-gradient-to-b from-transparent to-gray-900 pb-20 pt-5">
        <div class="contentSize flex flex-col sm:flex-row gap-4 justify-between items-start">
            <workPlaceInfo/>
            <socialAddress/>
        </div>
    </section>
</template>

<script setup>
import workPlaceInfo from './footerComponent/workPlaceInfo.vue';
import socialAddress from './footerComponent/socialAddress.vue';
</script>