import { createApp } from 'vue'
import { store } from './store/index'

import App from './App.vue'
import './index.css'

createApp(App)
    .use(store)
    .mount('#app')
