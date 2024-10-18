<template>
  <section class="contentSize px-2 sm:px-0 my-20">
    <article class="w-full flex flex-col md:flex-row justify-between items-center gap-4 bg-opacity-10 bg-purple-900 rounded-md p-1 shadow-sm shadow-purple-400">

      <div class="w-60">
        <swiper-container slides-per-view="1" speed="500" loop="true" css-mode="true" :pagination="{ clickable: true }">

          <swiper-slide class="w-full -translate-y-5">
            <img class="w-full h-full" src="@/assets/images/redlamp.png" alt="lampImage">
          </swiper-slide>

          <swiper-slide class="w-full -translate-y-5">
            <img class="w-full h-full" src="@/assets/images/grayLamp.png" alt="lampImage">
          </swiper-slide>
        </swiper-container>
      </div>

      <div class="flex flex-col justify-start items-start gap-5">
        <h3 class="text-lg text-blue-400 text-right" >نام نمونه کار</h3>
        <div class="text-yellow-100 text-justify pl-2">
          <span class="">
            توضیحات: لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
          </span>
        </div>
      </div>  

    </article>
  </section>
</template>

<script setup>
 import {Pagination} from 'swiper/modules';
</script>