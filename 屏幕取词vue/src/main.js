import { createApp } from 'vue'
import App from './App.vue'
import directives from '../src/directives/index'
const test = require('vue')

createApp(App).use(directives).mount('#app')
