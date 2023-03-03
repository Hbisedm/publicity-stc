import { createApp } from 'vue'
import scrollReveal from 'scrollreveal'
import Carousel from 'vue-devui-carousel'
import App from './App.vue'
import { pinia } from '@/stores'
import router from '@/router'
import 'vue-devui-carousel/dist/style.css'

import 'uno.css'
import 'animate.css'

const app = createApp(App)

app.config.globalProperties.$scrollReveal = scrollReveal()

app.use(pinia)
app.use(router)
app.use(Carousel)

app.mount('#app')
