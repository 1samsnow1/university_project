<template>
    <article class="w-full flex flex-col justify-center items-center gap-4">
        <figure class="w-32 h-32 darkBgAnimation rounded-full bg-gray-700"></figure>
        <span class="w-full text-center text-yellow-200">نام عضو انجمن</span>
    </article>
</template>

<script setup>
</script>

<style scoped>
.darkBgAnimation {
    background-repeat: no-repeat;
    background-image: linear-gradient(#374151,#374151,#6b7280,#374151);
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