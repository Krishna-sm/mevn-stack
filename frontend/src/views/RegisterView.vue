<template>
  <div class="about">
        <Form :on-submit="onSubmitHandler" :validation-schema="validationSchema" 
        :initial-values="initialValues" class="w-[90%] mt-12 md:w-1/2  mx-auto flex py-24 flex-col px-10 bg-gray-200 rounded-md">
          <h1 class="text-center font-semibold text-5xl f-1">Register </h1>
          <div class="mb-3 w-full">
            <label class="text-start">Name <span class="text-red-500">*</span></label>
            <Field name="name"  type="text" placeholder="Enter Name" class="outline-none border-none w-full text-xl rounded-md shadow-md py-3 px-4 font-serif placeholder:font-normal"/>
            <p class="text-red-500">
              <ErrorMessage name="name"/>
            </p>
          </div>
          <div class="mb-3 w-full">
            <label class="text-start">Email <span class="text-red-500">*</span></label>
            <Field name="email" type="text" placeholder="Enter Email Address" class="outline-none border-none w-full text-xl rounded-md shadow-md py-3 px-4 font-serif placeholder:font-normal"/>
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
            <button class="bg-indigo-500 hover:bg-indigo-600 cursor-pointer px-12 py-3 rounded-md text-white text-2xl f-1">Register</button>
          </div>
          <div class="mb-3">
            <p class="text-center text-lg">Already Have An Account <span class="text-indigo-500"><router-link to="/login">Sign In ?</router-link></span></p>
          </div>
        </Form>
  </div>
</template>
<script setup>
import { RouterLink } from 'vue-router';
import {Form,Field,ErrorMessage} from 'vee-validate';
import * as yup from 'yup';
import {toast} from 'vue3-toastify'
import axios from 'axios'
import {useRouter} from 'vue-router'
const router = useRouter()

const validationSchema = yup.object({
  name:yup.string().required("Name is required"),
  email:yup.string().email("plese enter valid email").required("Email is required"),
  password:yup.string().min(5,"password is grater than 5 characters").required("password is required"),
})

const initialValues ={
  name:"",
  email:'',
  password:""
}

const onSubmitHandler =async(e,{resetForm})=>{
  try{
        const res = await axios.post(`http://localhost:8000/api/v1/register`,e);
        const data = await res.data;
        toast.success(data?.msg);
        resetForm();
        router.push('/login')
  }catch(e){
    toast.error(e?.response?.data?.message);
  }
}

</script>
