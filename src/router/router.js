import Main from "@/pages/Main";
import {createRouter, createWebHistory} from "vue-router";
import Greeting from "@/pages/Greeting";

const routes = [
    {
        path: '/',
        component: Greeting
    },
    {
        path: '/main',
        component: Main
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router