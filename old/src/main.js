import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/icon-fonts/fontawesome-5.0.6/css/fontawesome-all.min.css'
import './assets/icon-fonts/flat-icon/flaticon.css'
/* eslint-disable */
import './assets/js/jquery-2.1.4.min.js'
// import './assets/js/plugins.js'
import './assets/js/main.js'
/* eslint-enable */

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
