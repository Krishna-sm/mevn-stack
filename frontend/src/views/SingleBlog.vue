<template>
    <div v-if="loading">
       loading.....
    </div>
    <div v-else>
     <pre>
        {{ post }}
     </pre>
     <section>
                <div class="py-24">
                    <h1 class="text-4xl tet-center ">{{ post.post.title }}</h1>
                    <small>@{{ post.post.user.email }}</small>
                    <img :src="`http://localhost:8000/static/`+post.post.image" />
                </div>
     </section>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import {toast} from 'vue3-toastify';
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