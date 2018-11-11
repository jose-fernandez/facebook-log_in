const SAVE_TOKEN = (state, payload) => {
  state.user.token_saved = !!payload
}

const SAVE_PROFILE = (state, payload) => {
  state.user.profile = payload
}

const REQUEST_PERMISSIONS = (state, payload) => {
  state.user.authenticated = !!payload
}

export {
  REQUEST_PERMISSIONS,
  SAVE_TOKEN,
  SAVE_PROFILE
}
