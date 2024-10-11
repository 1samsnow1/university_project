<template>
  <main class="contentSize px-3 mb-20">
    <section class="z-10" :class="zipStatus=='close'?'animate-show':'animate-hide'" id="banner">
      <banner class="z-10"/>
    </section>

    <section class="w-full z-50 mt-4" :class="zipStatus=='close'?'animate-closeZip':'animate-openZip'">

      <div class="thisBg w-full h-10"></div>

      <div class="w-full h-2 bg-gray-950" id="mainContent"></div>
      <div class="w-full bg-gray-950">
        <zipImage class="z-50" :class="zipStatus=='close'?'animate-show':'animate-hide'"/>
      </div>
      <div class="thisBg2 w-full sm:h-10 h-20"></div>
    </section>

    <!-- work examples -->
    <section class="w-full mt-4 -translate-y-20" :class="zipStatus=='open'?'animate-showContent':'animate-hide'">

      <drawerArrow class="mx-auto mt-10 mb-20 animate-bounce"/>
      
      <contentTitle/>
      <!-- cardBox -->
      <section class="px-3 py-6 bg-purple-900 bg-opacity-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-4 rounded-md border-2 border-purple-900">
        <loadingCard v-for="i in 4" v-if="!cardLoad"/>
        <card v-for="i in 4" v-else/>
      </section>

      <!-- team info -->
      <teamInfo class=""/>

      <!-- members section -->
       <section class="">
          <h2 class="text-2xl darkTextBg text-transparent text-center my-10 pb-2 border-b-2 border-blue-400">اعضای انجمن</h2>
          <div class="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-3">
            <member v-for="i in 4"/>
          </div>
       </section>
    </section>
  </main>
</template>

<script setup>
import banner from '@/components/banner.vue';
import zipImage from '../components/homeComponent/zipImage.vue';
import contentTitle from '../components/homeComponent/contentTitle.vue';
import drawerArrow from '../components/icons/drawerArrow.vue';
import loadingCard from '../components/icons/loadingCard.vue';
import card from '../components/homeComponent/card.vue';
import teamInfo from '../components/homeComponent/teamInfo.vue';
import member from '../components/homeComponent/member.vue';
import {ref , onMounted} from 'vue';
let zipStatus = ref('close');
let cardLoad = ref(false);
setTimeout(() => {
  cardLoad.value = true;
}, 2000);

onMounted(()=>{
  if(window.scrollY > 670){
    zipStatus.value = 'open';
  };


  const observer =new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
      if(entry.intersectionRatio>0){
        if(zipStatus.value == 'close'){
          zipStatus.value = 'open';
        }else {
          zipStatus.value = 'close';
        }
        console.log(zipStatus.value)
      }
    })
  },
  {
    rootMargin: '0px 0px -50% 0px'
  }
)
  observer.observe(document.querySelector("#mainContent"));
})
</script>

<style scoped>
.thisBg{ 
  background-image: linear-gradient(transparent,#030712);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.thisBg2{ 
  background-image: linear-gradient(#030712,transparent);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.darkTextBg {
    background-image: linear-gradient(90deg,#2563eb,#bfdbfe,#2563eb,#2563eb);
    background-clip: text;
    background-repeat: no-repeat;
    animation: textBg 4s ease-in infinite;
}
@keyframes textBg {
    0%{
        background-size: 100% 100%;
    }
    100% {
        background-size: 400% 100%;
    }
}
</style>
