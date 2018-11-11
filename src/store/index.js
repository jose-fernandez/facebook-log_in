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
import { logout } from '../scenes/dashboard/dashboard_actions'
import { RESET_STATE } from '../scenes/dashboard/dashboard_mutations'

Vue.use(Vuex)

export const initialState = {
  user: {
    token_saved: false,
    authenticated: false,
    profile: {},
    auth_failed: false
  }
}

const state = _.cloneDeep(initialState)

export const store = new Vuex.Store({
  state,
  getters: {
    authenticated: state => state.user.authenticated,
    auth_failed: state => state.user.auth_failed,
    user_profile: state => state.user.profile
  },
  actions: {
    request_permissions,
    save_token,
    navigate_to,
    logout
  },
  mutations: {
    REQUEST_PERMISSIONS,
    SAVE_TOKEN,
    SAVE_PROFILE,
    RESET_STATE
  }
})
