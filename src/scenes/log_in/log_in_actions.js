import {
  REQUEST_PERMISSIONS,
  SAVE_TOKEN,
  SAVE_PROFILE
} from './log_in_constants'
import { api, redirect, website } from '../../services/api'
import { navigate_to } from '../../routes/routes_actions'

import FB from '../../services/facebook.js'

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

const load_fb_sdk = () => {
  (async () => {
    FB.init({
      appId: 753872014974769,
      autoLogAppEvents: true,
      xfbml: true,
      version: 'v3.2'
    })
  })()
}

const connect = (context, payload) => {
  context.commit(REQUEST_PERMISSIONS, payload.authResponse)
  save_token(context)
  user_data(context)
}

const request_permissions = context => {
  (async () => {
    const authResponse = await FB.getLoginStatus()
    if (authResponse.status === 'connected') {
      connect(context, authResponse)
    } else {
      await FB.login()
      .then(res => {
        connect(context, res)
      })
      .catch((res) => {
        context.commit(REQUEST_PERMISSIONS, res.authResponse)
      })
    }
  })()
}

const user_data = (context) => {
  (async () => {
    await FB.me().then(payload => {
      context.commit(SAVE_PROFILE, payload)
    })
  })()
}

export {
  request_permissions,
  save_token,
  navigate_to,
  load_fb_sdk
}
