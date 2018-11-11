import { MainButton, TextButton } from './logout_button_component'

export default {
  components: {
    MainButton,
    TextButton
  },
  props: {
    text: String,
    action: Function
  }
}
