import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index.js'
import store from '@/state/index.js'
import '../src/assets/styles/index.scss'



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
 
}).$mount('#app')
