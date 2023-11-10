import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

import NewPlayer from './components/NewPlayer.vue'

const router = createRouter({
  history: createWebHistory(),
  routes:[
    {path:"/newplayer",component: NewPlayer}
  ]
})

const app = createApp(App)
app.use(router);

app.mount('#app')
