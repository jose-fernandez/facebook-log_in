import 'babel-polyfill'
import Vue from 'vue'

import Router from './routes/Router.vue'
import store from './store'
import router from './routes/routes'

new Vue({
  el: '#facebook_login',
  store,
  router,
  render: h => h(Router)
})
