import Vue from 'vue'
import Vuex from 'vuex'

import {
  request_permissions,
  save_token,
  navigate_to
} from '../scenes/log_in/log_in_actions'
import {
  REQUEST_PERMISSIONS,
  SAVE_TOKEN,
  SAVE_PROFILE
} from '../scenes/log_in/log_in_mutations'

Vue.use(Vuex)

const state = {
  user: {
    token_saved: false,
    authenticated: false,
    profile: {}
  }
}

export default new Vuex.Store({
  state,
  getters: {
    authenticated: state => state.user.authenticated,
    user_profile: state => state.user.profile
  },
  actions: {
    request_permissions,
    save_token,
    navigate_to
  },
  mutations: {
    REQUEST_PERMISSIONS,
    SAVE_TOKEN,
    SAVE_PROFILE
  }
})
