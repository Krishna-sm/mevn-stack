import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const userStore = defineStore('user',{
    state:()=>{
        return{
            user:null,
            token:localStorage.getItem("token") || ''
        }
    },
    actions:{
        setUser(user){
            this.user = user
        },
        setToken(token){
            localStorage.setItem("token",token);
            this.token = token
        },
        logoutButton(){
            localStorage.removeItem("token");
            this.token = '';
        }
    }
})
