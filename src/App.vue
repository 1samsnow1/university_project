<template>
    <pageHeader/>
    
    <RouterView />

    <pageFooter/>
</template>

<script setup>
import { RouterView } from 'vue-router';
import pageHeader from '@/components/pageHeader.vue';
import pageFooter from './components/pageFooter.vue';


</script>

<style scoped>
</style>
