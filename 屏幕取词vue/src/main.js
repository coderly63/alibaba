import { createApp } from 'vue'
import App from './App.vue'
import directives from '../src/directives/index'

createApp(App).use(directives).mount('#app')
