import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { FaFlag, RiZhihuFill } from "oh-vue-icons/icons";

addIcons(FaFlag, RiZhihuFill);

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.component("v-icon", OhVueIcon);
app.use(router)

app.mount('#app')
