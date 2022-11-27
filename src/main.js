import Vue from 'vue'
import moment from 'moment'
import App from './App.vue'
import router from './router'
import store from '@/store'
import '@/plugins/vuetify'
import '@u-iris/iris-front-ui'
import '@u-iris/iris-front-ui/dist/iris-front-ui.css'
import i18n from '@/plugins/i18n'
Vue.config.productionTip = false

Vue.filter('formatDate', value => {
  if (value) {
    return moment(String(value)).format('DD/MM/YYYY HH:mm')
  }
})

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
