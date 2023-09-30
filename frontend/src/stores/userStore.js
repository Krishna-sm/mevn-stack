import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const userStore = defineStore('user',{
    state:()=>{
        return{
            user:null
        }
    },
    actions:{
        setUser(user){
            this.user = user
        }
    }
})
