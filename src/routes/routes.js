import Vue from 'vue'
import VueRouter from 'vue-router'

import LogIn from '../scenes/log_in/Log_in.vue'
import Dashboard from '../scenes/dashboard/Dashboard.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: LogIn, name: 'login' },
  { path: '/dashboard', component: Dashboard, name: 'dashboard' }
]

export default new VueRouter({
  routes
})
