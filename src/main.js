import { createApp } from 'vue'
import App from './App.vue'
import { Quasar } from 'quasar'
// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'
// Import Quasar css
import 'quasar/src/css/index.sass'
import './assets/main.css'

import router from './router'


const myApp = createApp(App);
myApp.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
})
myApp.use(router)
myApp.mount('#app');