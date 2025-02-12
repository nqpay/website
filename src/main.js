import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import './style.css'
import App from './App.vue'
import Home from './components/Home.vue'
import PrivacyPolicy from './components/PrivacyPolicy.vue'
import TermsAndServices from './components/TermsAndServices.vue'
import JoinForm from './components/JoinForm.vue'
import Onboarding from './components/Onboarding.vue'

const app = createApp(App)

const router = new createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/join', component: JoinForm },
    { path: '/onboarding', component: Onboarding },
    { path: '/privacy-policy', component: PrivacyPolicy },
    { path: '/terms-and-services', component: TermsAndServices },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
})

app.use(router)
app.mount('#app')
