<template>
  <section class="w-full lg:flex lg:justify-center lg:items-start">
    <aside class="sticky hidden lg:block top-10 right-10">
      <rightAside/>
    </aside>

    <main class="contentSize px-3">

      <!-- banner section -->
      <section class="z-10 my-20 animate-show" :class="zipStatus=='close'?'':'animate-hide'" id="banner">
        <banner class="z-10"/>
      </section>

      <!-- work examples -->

      <boxArch class="z-10 mt-32"/>

      <section class="w-full z-50 p-4 bg-gray-900 sm:bg-gray-950 border-t border-gray-800 sm:border-gray-900    transition-all duration-300 moveUpDown">

        <!-- <drawerArrow class="mx-auto mt-10 mb-20 animate-bounce"/> -->
  
        <contentTitle class="z-50"/>
        <!-- cardBox -->
        <section class="z-50 relative px-3 pb-4 pt-8 bg-purple-900 bg-opacity-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-4 rounded-md border-2 border-purple-900">
          <toProductsButton/>
          <loadingCard class="z-50" v-for="i in 4" v-if="!cardLoad"/>
          <card class="z-50" v-for="i in 4" v-else/>
        </section>

        <!-- team info -->
        <teamInfo class=""/>

        <!-- members section -->
        <section>
          <h2 class="text-2xl darkTextBg text-transparent text-center my-10 pb-2 border-b-2 border-blue-400">اعضای انجمن</h2>
          <div class="md:grid md:grid-cols-4 gap-3 flex items-center pb-2 overflow-x-scroll scrollDirection md:overflow-hidden">
            <member v-for="i in 4"/>
          </div>
        </section>
      </section>
    </main>

    <aside class="sticky hidden lg:block translate-y-9 top-10 left-10">
      <leftAside/>
    </aside>
  </section>
</template>

<script setup>
import banner from '@/components/banner.vue';
import rightAside from '../components/homeComponent/rightAside.vue';
import leftAside from '../components/homeComponent/leftAside.vue';
import boxArch from '../components/homeComponent/boxArch.vue';
import contentTitle from '../components/homeComponent/contentTitle.vue';
import loadingCard from '../components/icons/loadingCard.vue';
import toProductsButton from '../components/homeComponent/toProductsButton.vue'
import card from '../components/homeComponent/card.vue';
import teamInfo from '../components/homeComponent/teamInfo.vue';
import member from '../components/homeComponent/member.vue';
import {ref} from 'vue';


let cardLoad = ref(false);
setTimeout(() => {
  cardLoad.value = true;
}, 2000);

</script>

<style scoped>
.moveUpDown {
  animation: moveUpAndDown linear forwards;
  animation-timeline: view();
  transform: translateY(-9rem);
}
@keyframes moveUpAndDown {
  0%{
    transform: translateY(-9rem);
  }
  20%{
    transform: translateY(-17rem);
  }
}
.scrollDirection {
  direction: ltr;
}
</style>
