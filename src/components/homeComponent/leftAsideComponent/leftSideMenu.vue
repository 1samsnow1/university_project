<template>
    <nav>
        <ul class="flex flex-col items-center gap-3 text-red-500">
            <li v-for="item in news">
                {{ item.content }}
            </li>
        </ul>
    </nav>
</template>

<script setup>
let news = [
    {content:'خبر1'},
    {content:'خبر2'}
]
</script>