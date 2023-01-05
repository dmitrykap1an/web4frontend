import { createApp } from 'vue'
import App from '@/App'
import router from "@/router/router";
import store from '@/vuex/vuex'

createApp(App).use(store)
    .use(router)
    .use(store)
    .mount('#app')
