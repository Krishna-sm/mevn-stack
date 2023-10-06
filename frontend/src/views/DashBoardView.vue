<script setup>
import {ref} from 'vue';
import ProtectedLayout from '../layout/ProtectedLayout.vue'
const text =ref('')
</script>

<template>
    <ProtectedLayout>
                <section class="section w-full mx-auto py-24 px-5 min-h-screen bg-red-500">
                    <div class="mx-3 px-14 flex flex-col space-y-4 ">
                        <div class="mb-3 flex flex-col  space-y-2">
                            <label>Title</label>
                            <input class="ouline-none border-none w-full py-3 px-2 rounded-md " />
                        </div>
                        <div class="mb-3 flex flex-col  space-y-2">
                            <label>Slug</label>
                            <input class="ouline-none border-none w-full py-3 px-2 rounded-md " />
                        </div>
                        <div class="mb-3 flex flex-col  space-y-2">
                            <label>Desciption</label>
                            <input class="ouline-none border-none w-full py-3 px-2 rounded-md " />
                        </div>
                        <div class="mb-3 flex flex-col  space-y-2">
                            <label>Image</label>
                            <input  type="file" class="ouline-none border-none w-full py-3 px-2 rounded-md " />
                        </div>
                        <div class="mb-3 flex flex-col  space-y-2">
                            <label>Content</label>
                            <v-md-editor v-model="text" height="400px"></v-md-editor>
                        </div>
                        <div class="mb-3 flex justify-center  space-y-2">
                          <button class="px-12 py-3 bg-purple-500 hover:bg-purple-600 duration-300 transtion-all rounded-lg text-white">Submit</button>
                        </div>
                    </div>

                </section>
    </ProtectedLayout>
</template>