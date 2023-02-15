import { createApp } from 'vue'

import App from './App.vue'
import { pinia } from '@/stores'
import router from '@/router'
import 'uno.css'

const app = createApp(App)

app.use(pinia)
app.use(router)

app.mount('#app')
