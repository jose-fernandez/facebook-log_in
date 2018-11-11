import {
  REQUEST_PERMISSIONS,
  SAVE_TOKEN,
  SAVE_PROFILE
} from './log_in_constants'
import { api, redirect, website } from '../../services/api'
import { navigate_to } from '../../routes/routes_actions'

const save_token = (context) => {
  const body = {
    url: website,
    status_code: 200
  }
  api.get(redirect, body)
  .then(payload => {
    context.commit(SAVE_TOKEN, payload)
  })
  .catch((payload) => {
    context.commit(SAVE_TOKEN)
  })
}

const request_permissions = context => {
  FB.login(res => {
    context.commit(REQUEST_PERMISSIONS, res.authResponse)
    if (res.authResponse) {
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
