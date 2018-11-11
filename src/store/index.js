import Vue from 'vue'
import Vuex from 'vuex'

import {
  request_permissions,
  save_token
} from '../scenes/log_in/log_in_actions'
import {
  REQUEST_PERMISSIONS,
  SAVE_TOKEN,
  SAVE_PROFILE
} from '../scenes/log_in/log_in_mutations'

Vue.use(Vuex)

const state = {
  user: {
    token_saved: Boolean,
    authenticated: Boolean,
    profile: Object
  }
}

export default new Vuex.Store({
  state,
  getters: {
    authenticated: state => state.user.authenticated
  },
  actions: {
    request_permissions,
    save_token
  },
  mutations: {
    REQUEST_PERMISSIONS,
    SAVE_TOKEN,
    SAVE_PROFILE
  }
})
