import { createApp } from 'vue'
import App from './App.vue'
//import 'element-plus/dist/index.css'
//import ElementPlus from 'element-plus'
import Home from "@components/Home.vue"
import Photograph from "@pages/photograph/index.vue"
import showImg from "@pages/showImg/index.vue"
import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
    { path: '/', component: Home },
    { path: '/photograph', component: Photograph },
    { path: '/showImg', component: showImg }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})


let app = createApp(App)
//app.use(ElementPlus)
app.use(router)
app.mount('#app')
