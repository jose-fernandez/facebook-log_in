import {
  REQUEST_PERMISSIONS,
  SAVE_TOKEN,
  SAVE_PROFILE
} from './log_in_constants'
import { api, redirect } from '../../services/api'
import router from '../../routes/routes'
import { DASHBOARD } from '../../routes/routes_constant'

const save_token = (context) => {
  api.get(redirect, DASHBOARD).then(payload => {
    context.commit(SAVE_TOKEN, payload)
  }).catch((payload) => {
    context.commit(SAVE_TOKEN, payload)
  })
}

const navigate_to = (context, address) => {
  router.push({ name: address })
}

const request_permissions = context => {
  FB.login(function (response) {
    context.commit(REQUEST_PERMISSIONS, response.authResponse)
    if (response.authResponse) {
      save_token(context)
      user_data(context)
    }
  }, { scope: 'email' })
}

const user_data = (context) => {
  FB.api('/me', function (payload) {
    context.commit(SAVE_PROFILE, payload)
  })
}

export {
  request_permissions,
  save_token,
  navigate_to
}
