import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import '@fortawesome/fontawesome-free/css/all.css'
import VueObserveVisibility from 'vue-observe-visibility'

const app = createApp(App)
app.use(router)
app.directive('observe-visibility', VueObserveVisibility)
app.mount('#app')
