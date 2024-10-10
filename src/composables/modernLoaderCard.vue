<template>
    <article class="w-full h-72 relative bg-blue-950 darkBgAnimation rounded-lg flex justify-between items-center overflow-hidden shadow-md shadow-gray-950">

        <div class="w-full h-full bg-zinc-900">
            
        </div>

        <div class="w-32 h-full flex justify-between items-center">
            <div class="w-10 h-full bg-zinc-900">

            </div>

            <div class="w-6 h-full">
                <div class="w-10 h-full bg-zinc-900 absolute top-0 right-8"></div>
                <div class="w-10 h-10 bg-zinc-900 absolute -top-5 right-4 transfrom rotate-45"></div>
                <div class="w-10 h-10 bg-zinc-900 absolute top-2 -right-8 transfrom rotate-45"></div>
                <div class="w-4 h-[232px] bg-zinc-900 absolute top-[28px] right-0"></div>
                <div class="w-10 h-10 bg-zinc-900 absolute bottom-2 -right-8 transfrom rotate-45"></div>
                <div class="w-10 h-10 bg-zinc-900 absolute -bottom-5 right-4 transfrom rotate-45"></div>
            </div>
        </div>

    </article>
</template>

<script setup>

</script>

<style scoped>
article , div {
    direction: ltr
}


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