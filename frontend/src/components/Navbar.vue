<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
        <header class="shadow">
          <nav class="w-full md:w-[80%] mx-auto flex flex-col text-center  md:flex-row  justify-center  items-center md:justify-between py-4 px-2 f-1">
            <router-link to="/" class="text-3xl md:text-4xl">iBlog</router-link>
            <ul class="flex space-x-4 text-2xl items-center">
              <li>
                <router-link to="/">Home</router-link>
              </li>
              <li>
                <router-link to="/about">About</router-link>
              </li>
              <li>
                <router-link :to="{name:'Contact'}">Contact</router-link>
              </li>
              <li class="bg-indigo-500 hover:bg-indigo-600 cursor-pointer px-5 py-2 md:px-12 md:py-3 rounded-md text-white">
                <router-link to="/login">Login</router-link>
              </li>
            </ul>
          </nav>
        </header>
</template>