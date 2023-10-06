<template>
   <h1 v-if="loading">loading..</h1>
   <slot v-if="!loading"></slot>
</template>
<script setup>
import {ref,onMounted} from 'vue';
import {useRouter} from 'vue-router';
import {userStore } from '../stores/userStore'
const loading = ref(true);
const useUserStore = userStore();
const router = useRouter()
onMounted(()=>{
   if(useUserStore.user){
      loading.value =false;
   }else{
      router.push("/")
   }
})

</script>

<style lang="scss" scoped>

</style>