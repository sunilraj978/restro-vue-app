import AddResPage from '@/components/AddResPage.vue'
import HomePage from '@/components/HomePage.vue'
import LoginPage from '@/components/LoginPage.vue'
import SignUp from '@/components/SignUp.vue'
import UpdateResPage from '@/components/UpdateResPage.vue'
import { createRouter, createWebHistory } from 'vue-router'


const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: HomePage
    },
    {
        path: '/sign-up',
        name: 'SignUp',
        component: SignUp
    },
    {
        path:'/login',
        name :"LoginPage",
        component:LoginPage
    },
    {
        path:'/add-res',
        name :"AddResPage",
        component:AddResPage
    },
    {
        path:'/update-res/:id',
        name :"UpdateResPage",
        component:UpdateResPage
    }
]


const router = createRouter(
    {
        history: createWebHistory(), routes
    }
)

export default router