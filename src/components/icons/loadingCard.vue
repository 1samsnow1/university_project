<template>
    <article class="w-full h-40 border-2 border-gray-950 bg-blue-950 darkBgAnimation sm:h-72 relative overflow-hidden rounded-md">
        <img class="w-full h-full sm:h-72 z-10 absolute" src="@/assets/images/loadingCardImg2.png" alt="zipPng">
    </article>
</template>

<script setup>
</script>

<style scoped>
.darkBgAnimation {
    background-repeat: no-repeat;
    background-image: linear-gradient(#172554,#172554,#1d4ed8,#172554);
    animation: movingBg 3s infinite;
}
@keyframes movingBg {
    0%{
        background-size: 100% 0%; 
    }
    100%{ 
        background-size: 100% 500%;
    }
}
</style>