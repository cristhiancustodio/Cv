import './assets/css/style.css'
import './assets/css/Bootstrap/icon.css'
import './assets/js/Bootstrap/bootstrap.bundle.min.js'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
