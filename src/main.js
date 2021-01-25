import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Before you create app
Vue.config.devtools = true;
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
