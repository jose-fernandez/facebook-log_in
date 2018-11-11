import { RESET_STATE } from './dashboard_constants'
import { navigate_to } from '../../routes/routes_actions'
import { LOGIN } from '../../routes/routes_constant'

const reset_state = context => {
  context.commit(RESET_STATE)
}

const logout = context => {
  reset_state(context)
  navigate_to(context, LOGIN)
}

export { logout }
