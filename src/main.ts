import './assets/main.css'

import { createApp } from 'vue'
import { router } from './router'
import { DataLoaderPlugin } from 'unplugin-vue-router/data-loaders'
import App from './App.vue'

createApp(App).use(DataLoaderPlugin, { router }).mount('#app')
