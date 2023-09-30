<script setup>
import {  RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import {onMounted} from 'vue'
import axios from 'axios'
import {useBlogStore} from './stores/blogStore'

const blogStore = useBlogStore();

const fetchBlogs = async()=>{
  try{
        const res =  await axios.get(`http://localhost:8000/api/v1/post`);
        const data = await res.data;
        // console.log(data);
        blogStore.setBlogs(data.posts);
  }catch(e){
    console.log(e)
  }
}

onMounted(async()=>{
 await fetchBlogs()
})




</script>

<template>
  <Navbar/>
  <RouterView />
</template>

<style scoped>

</style>
