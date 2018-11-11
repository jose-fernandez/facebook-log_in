import { MainButton, TextButton } from './main_button_component'

export default {
  components: {
    MainButton,
    TextButton
  },
  props: {
    text: String,
    action: Function,
    authenticated: [Function, Boolean]
  }
}
