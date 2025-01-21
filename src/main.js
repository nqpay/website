import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import './style.css'
import App from './App.vue'
import Home from './components/Home.vue'
import PrivacyPolicy from './components/PrivacyPolicy.vue'

const app = createApp(App)

const router = new createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home},
        { path: '/privacy-policy', component: PrivacyPolicy },
        { path: '/:pathMatch(.*)*', redirect: '/' },
    ],
})
  
app.use(router)
app.mount('#app')
