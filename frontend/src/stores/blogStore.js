import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useBlogStore = defineStore('blog',{
    state:()=>{
        return{
            blogs:[]
        }
    },
    actions:{
        setBlogs(blogs){
            this.blogs = blogs
        }
    }
})
