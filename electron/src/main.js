import { createApp } from 'vue'
import App from './App.vue'
import { Quasar , Notify} from 'quasar'
// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'

import 'quasar/src/css/index.sass'
import './assets/main.css'

import router from './router'


const myApp = createApp(App);
myApp.use(router)
myApp.use(Quasar,{
  plugins: {
    Notify
  },
})
myApp.mount('#app');