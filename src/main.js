import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'
import VueDarkMode from '@vue-a11y/dark-mode'

//import LoadScript from 'vue-plugin-load-script';
 
Vue.use(VueDarkMode);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
