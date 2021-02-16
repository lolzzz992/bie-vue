import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)

import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
