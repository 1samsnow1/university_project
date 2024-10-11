<template>
    <section class="w-full bg-gradient-to-b from-transparent to-gray-900 py-20">
        <div class="contentSize flex justify-between items-start">
            <workPlaceInfo/>
            <socialAddress/>
        </div>
    </section>
</template>

<script setup>
import workPlaceInfo from './footerComponent/workPlaceInfo.vue';
import socialAddress from './footerComponent/socialAddress.vue';
</script>