<template>
    <section class="contentSize bg-gray-500 shadow-sm shadow-gray-300 my-4 mb-6 sm:rounded-3xl animate-phoneExpandNavBar sm:animate-expandNavBar">
        <nav class="p-1 sm:px-5 text-gray-200">
            <ul class="flex justify-between items-center">
                <ul class="col-span-2 flex justify-start items-center gap-6">
                    <li v-for="item in list" class="sm:text-lg cursor-pointer hover:text-blue-300 transition-all duration-300">{{item}}</li>
                </ul>
                <li class="col-span-1 text-lg p-1 px-3 bg-gray-800 rounded-3xl cursor-pointer hover:bg-orange-800 transition-all duration-300 border border-blue-300">پنل ادمین</li>
            </ul>
        </nav>
    </section>
</template>

<script setup>
let list = ['اعضا','نمونه کارها','درباره ما'];
</script>