<template>
    <div>
        <zipImage @click="zipButton()" class="z-20 cursor-pointer" :class="zipStatus=='close'?'animate-closeZip':'animate-openZip'"/>
        <rightSideMenu class="z-10 mt-2 rounded-full py-1 overflow-hidden" :class="zipStatus=='close'?'animate-closeSideMenu':'animate-openSideMenu'"/>
    </div>
</template>

<script setup>
import zipImage from './rightAsideComponent/zipImage.vue';
import rightSideMenu from './rightAsideComponent/rightSideMenu.vue';
import { ref } from 'vue';

let zipStatus = ref('close');

const zipButton = ()=>{
    if(zipStatus.value=='close'){
        zipStatus.value = 'open';
    }else {
        zipStatus.value = 'close';
    }
}
</script>