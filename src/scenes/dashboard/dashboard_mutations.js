import { initialState } from '../../store'

const RESET_STATE = (state) => {
  Object.assign(state, _.cloneDeep(initialState))
}

export { RESET_STATE }
