<template>
    <section class="contentSize bg-purple-800 bg-opacity-15 border-2 border-purple-800 border-x-0 my-4 mb-6 sm:rounded-3xl animate-phoneExpandNavBar sm:animate-expandNavBar">
        <nav class="p-1 sm:px-5 text-gray-200">
            <ul class="flex justify-between items-center">
                <ul class="col-span-2 flex justify-start items-center gap-6">
                    <li v-for="item in list" class="sm:text-lg cursor-pointer hover:text-yellow-200 transition-all duration-300">{{item}}</li>
                </ul>
                <li class="col-span-1 text-lg p-1 px-3 bg-gray-800 bg-opacity-5 rounded-3xl cursor-pointer hover:bg-blue-200 hover:text-gray-800 transition-all duration-300 border border-x-0 border-blue-400">پنل ادمین</li>
            </ul>
        </nav>
    </section>
</template>

<script setup>
let list = ['اعضا','نمونه کارها','درباره ما'];
</script>