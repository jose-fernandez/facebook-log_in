import { RESET_STATE } from './dashboard_constants'
import { navigate_to } from '../../routes/routes_actions'
import { LOGIN } from '../../routes/routes_constant'

import FB from '../../services/facebook.js'

const reset_state = context => {
  context.commit(RESET_STATE)
}

const logout_fb = () => {
  (async () => {
    await FB.logout()
  })()
}

const logout = context => {
  logout_fb()
  reset_state(context)
  navigate_to(context, LOGIN)
}

export { logout }
