import Vue from 'vue'
import VueLodash from 'vue-lodash'

import Router from './routes/Router.vue'
import { store } from './store'
import router from './routes/routes'

Vue.use(VueLodash)

new Vue({
  el: '#facebook_login',
  store,
  router,
  render: h => h(Router)
})
