<template>
  <div class="about">
        <Form :on-submit="onSubmitHandler" :validation-schema="validationSchema" 
        :initial-values="initialValues" class="w-[90%] mt-12 md:w-1/2  mx-auto flex py-24 flex-col px-10 bg-gray-200 rounded-md">
          <h1 class="text-center font-semibold text-5xl placeholder:font-normal f-1">Login </h1>
         
          <div class="mb-3 w-full">
            <label class="text-start">Email <span class="text-red-500">*</span></label>
            <Field name="email" type="text" placeholder="Enter EMail Address" class="outline-none border-none w-full text-xl rounded-md shadow-md py-3 px-4 font-serif"/>
            <p class="text-red-500">
              <ErrorMessage name="email"/>
            </p>
          </div>
          <div class="mb-3 w-full">
            <label class="text-start">Password <span class="text-red-500">*</span></label>
            <Field name="password" type="text" placeholder="Enter Password" class="outline-none border-none w-full text-xl rounded-md shadow-md py-3 px-4 font-serif placeholder:font-normal"/>
            <p class="text-red-500">
              <ErrorMessage name="password"/>
            </p>
          </div>
          <div class="mb-3 w-full flex justify-center">
            <button class="bg-indigo-500 hover:bg-indigo-600 cursor-pointer px-12 py-3 rounded-md text-white text-2xl f-1">Login</button>
          </div>
          <div class="mb-3">
            <p class="text-center text-lg">Don't Have An Account <span class="text-indigo-500"><router-link to="/register">Sign Up ?</router-link></span></p>
          </div>
        </Form>
  </div>
</template>
<script setup>
import { RouterLink } from 'vue-router';
import {Form,Field,ErrorMessage} from 'vee-validate';
import * as yup from 'yup';

const validationSchema = yup.object({
  email:yup.string().email("plese enter valid email").required("Email is required"),
  password:yup.string().min(5,"password is grater than 5 characters").required("password is required"),
})

const initialValues ={
  email:'',
  password:""
}

const onSubmitHandler =(e,{resetForm})=>{
  alert(JSON.stringify(e))
}

</script>
