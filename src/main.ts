import { createApp } from 'vue'
import App from './App.vue'
//import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'
import Home from "@components/Home.vue"
import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
    { path: '/', component: Home },
]
const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})


let app = createApp(App)
//app.use(ElementPlus)
app.use(router)
app.mount('#app')
