import { createApp } from 'vue'
import scrollReveal from 'scrollreveal'
import App from './App.vue'
import { pinia } from '@/stores'
import router from '@/router'

import 'uno.css'
import 'animate.css'

const app = createApp(App)

app.config.globalProperties.$scrollReveal = scrollReveal()

app.use(pinia)
app.use(router)

app.mount('#app')
