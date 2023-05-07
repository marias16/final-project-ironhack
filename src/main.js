import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import { useUsersStore } from './stores/users.js'
import './assets/main.css'


const app = createApp(App)

const pinia = createPinia()
app.use(pinia)

const store = useUsersStore()
app.use(store)

app.use(router)
app.mount('#app')