import { createApp } from 'vue'

import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import App from './App.vue'
import { pinia } from '@/stores'
import router from '@/router'
import 'uno.css'

const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(Antd)

app.mount('#app')
