import { createApp } from 'vue'
import App from './App.vue'
import directives from '../src/directives/index'
import JsonViewer from './index'
import "./styles/index.css";

createApp(App).use(directives).use(JsonViewer).mount('#app')
