<template>
  <div class="about">
        <div class="w-[90%] mt-12 md:w-1/2  mx-auto flex py-24 flex-col px-10 bg-gray-200 rounded-md">
          <h1 class="text-center font-semibold text-5xl f-1">Register </h1>
          <div class="mb-3 w-full">
            <label class="text-start">Name <span class="text-red-500">*</span></label>
            <input type="text" class="outline-none border-none w-full text-xl rounded-md shadow-md py-3 px-4 font-serif">
          </div>
          <div class="mb-3 w-full">
            <label class="text-start">Email <span class="text-red-500">*</span></label>
            <input type="text" class="outline-none border-none w-full text-xl rounded-md shadow-md py-3 px-4 font-serif">
          </div>
          <div class="mb-3 w-full">
            <label class="text-start">Password <span class="text-red-500">*</span></label>
            <input type="text" class="outline-none border-none w-full text-xl rounded-md shadow-md py-3 px-4 font-serif">
          </div>
          <div class="mb-3 w-full flex justify-center">
            <button class="bg-indigo-500 hover:bg-indigo-600 cursor-pointer px-12 py-3 rounded-md text-white text-2xl f-1">Login</button>
          </div>
          <div class="mb-3">
            <p class="text-center text-lg">Already Have An Account <span class="text-indigo-500"><router-link to="/login">Sign In ?</router-link></span></p>
          </div>
        </div>
  </div>
</template>
<script setup>
import { RouterLink } from 'vue-router';
</script>
