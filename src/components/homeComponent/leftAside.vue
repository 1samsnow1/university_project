<template>
    <div>
        <drawerArrow @click="drawerToggle()" class="cursor-pointer" :class="drawerStatus=='close'?'animate-bounce':'transform rotate-180'"/>
        <leftSideMenu class="z-10 mt-2 rounded-full py-1 overflow-hidden" :class="drawerStatus=='close'?'animate-closeSideMenu':'animate-openSideMenu'"/>
    </div>
</template>

<script setup>
import drawerArrow from './leftAsideComponent/drawerArrow.vue';
import leftSideMenu from './leftAsideComponent/leftSideMenu.vue';
import { ref } from 'vue';

let drawerStatus = ref('close');
const drawerToggle = ()=>{
    if(drawerStatus.value=='close'){
        drawerStatus.value = 'open';
    }else {
        drawerStatus.value ='close';
    }
}
</script>