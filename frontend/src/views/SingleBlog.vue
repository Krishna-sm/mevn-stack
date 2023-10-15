<template>
    <div v-if="loading">
       loading.....
    </div>
    <section class="w-full md:w-[70%] mx-auto flex flex-col gap-12" v-else>
    

                <div class="py-10 relative px- h-[50vh]">
                    <img   :src="post.image" class="w-full h-full object-cover"/>
                    <div class="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-[50%] flex-col">
                        <h1 class="text-5xl md:9xl text-white text-start">{{ post.post.title }}</h1>
                        <p class="text-lg md:text-xl text-white">{{ post.post.description }}</p>
                        <small class="text-lg text-white">@{{ post.post.user.name }}</small>
                        
                    </div>
                </div>
                <div class="py-10">
                   <MarkdownData :content="post.post.content" />
                </div>
     


    </section>
</template>

<script setup>
import { useRoute } from 'vue-router';
import {toast} from 'vue3-toastify';
import MarkdownData from '../components/MarkdownData.vue'
import axios from 'axios'
import{ref,onMounted} from 'vue'
        const router = useRoute();
        const post = ref(null);
        const loading = ref(true)
    const fetchData = async(id)=>{
        try{
                const response = await axios.get(`http://localhost:8000/api/v1/post/${id}`);
                const data = await response.data;
                post.value = data;
        }
        catch(e){
            toast.error(e.response.data.message)
        }
    }

    onMounted(async()=>{
        if(router.params && router.params.id){
            await fetchData(router.params.id);
            loading.value = false
        }else{
            post.value = {msg:"something went wrong :("}
        }
    })

</script>

<style lang="scss" scoped>

</style>