import Vue from 'vue'
import App from './App.vue'
import store from './store'
import './registerServiceWorker'

import iView from 'iview'

Vue.config.productionTip = false

Vue.use(iView)

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
