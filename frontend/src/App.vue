<script setup>
import {  RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import {onMounted} from 'vue'
import axios from 'axios'
import {useBlogStore} from './stores/blogStore'
import { userStore } from './stores/userStore'

const blogStore = useBlogStore();
const useuserStore= userStore();

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


const fetchUser = async(token)=>{
  try{
        const res =  await axios.get(`http://localhost:8000/api/v1/profile`,{
          headers:{
            'Authorization':`Bearer ${token}`
          }
        });
        const data = await res.data;
        console.log(data);
        useuserStore.setUser(data);
  }catch(e){
    console.log(e)
  }
}

onMounted(async()=>{
 await fetchBlogs()
 const token = localStorage.getItem("token");
 if(token){
  await fetchUser(token);
 }
})





</script>

<template>
  <Navbar/>
  <RouterView />
</template>

<style scoped>

</style>
