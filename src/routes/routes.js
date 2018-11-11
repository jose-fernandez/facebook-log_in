import Vue from 'vue'
import VueRouter from 'vue-router'

import LogIn from '../scenes/log_in/Log_in.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: LogIn },
  { path: '/dashboard', component: LogIn }
]

export default new VueRouter({
  routes
})
