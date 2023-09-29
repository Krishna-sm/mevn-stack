<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <main>
    <!-- <h1 class="text-red-500 bg-gray-900">this is home page</h1> -->
    <h1 class="text-center border-b-1 border-indigo-500 text-6xl md:text-7xl">Blogs</h1>

    <section class="py-24">
      <div v-for="i in 10" :key="i" class="shadow duration-300 transition-all hover:shadow-xl mx-auto w-[90%] mt-4 md:w-1/2 py-10 pt-4 px-5">
            <h1 class="font-bold text-4xl ">Lorem ipsum dolor sit amet.</h1>
            <p class="text-xl font-thin">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quibusdam eius animi atque quidem. Quod explicabo consequatur delectus iste quibusdam nulla? Modi consequuntur quia tenetur alias nihil reprehenderit saepe, ipsa fuga mollitia, consectetur qui debitis aliquid, nesciunt est ea tempore dolorem ratione vero a veniam.</p>
            <div class="flex justify-end px-10">
              <router-link :to="`blog/${i}`" class=" bg-indigo-500 text-white rounded-md px-12 py-2 font-thin text-2xl ">Explore </router-link>
            </div>
      </div>
    </section>

  </main>
</template>
