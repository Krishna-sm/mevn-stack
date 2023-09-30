<script setup>
import { RouterLink } from 'vue-router';
import {computed} from 'vue';
import {useBlogStore} from '../stores/blogStore'
const blogStore = useBlogStore();

const data = computed(()=>blogStore.blogs)
</script>

<template>
  <main>
    <!-- <h1 class="text-red-500 bg-gray-900">this is home page</h1> -->
    <h1 class="text-center border-b-1 border-indigo-500 text-6xl md:text-7xl">Blogs</h1>

    <section class="py-24 ">
      <div v-for="(item,index) in data" :key="index" class="shadow duration-300 transition-all hover:shadow-xl mx-auto w-[90%] mt-4 md:w-1/2 py-10 pt-4 px-5">
            <h1 class="font-bold text-4xl ">{{ item.title }}</h1>
            <p class="text-xl font-thin"   v-html="item.content"/>
            <div class="flex justify-end px-10">
              <router-link :to="`blog/${item._id}`" class=" bg-indigo-500 text-white rounded-md px-12 py-2 font-thin text-2xl ">Explore </router-link>
            </div>
      </div>
    </section>

  </main>
</template>
