import { createApp } from 'vue'
import Formation from "./components/Formation.vue"
import App from './App.vue'

const app = createApp(App)
app.component("formation-display",Formation)
app.mount('#app')
