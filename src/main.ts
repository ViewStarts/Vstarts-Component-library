import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Antd from 'ant-design-vue'

// import App from './App.vue'
import lijun from './views/lijun.vue'
import router from './router'

const app = createApp(lijun)

app.use(createPinia())
app.use(router)
app.use(Antd)
app.mount('#app')
