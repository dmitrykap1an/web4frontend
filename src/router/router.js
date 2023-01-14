import Main from "@/pages/Main";
import {createRouter, createWebHistory} from "vue-router";
import Greeting from "@/pages/Greeting";
import userRegistration from "@/components/UserRegistration";
import userAuthentication from "@/components/UserAuthentication";
import isRegistered from "@/pages/isRegistered";

const routes = [
    {
        path: '/',
        component: isRegistered
    },
    {
        path: '/greeting',
        component: Greeting
    },
    {
        path: '/main',
        component: Main
    },
    {
        path: '/registration',
        component: userRegistration
    },
    {
        path: '/authentication',
        component: userAuthentication
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router