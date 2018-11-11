import { mapActions, mapGetters } from 'vuex'

import { DASHBOARD } from '../../routes/routes_constant'
import { Wrapper, WrapperButton, WrapperError } from './log_in_styles'
import MainButton from '../../components/main_button/Main_button.vue'
import ErrorText from '../../components/error_text/Error_text.vue'

export default {
  components: {
    Wrapper,
    WrapperButton,
    MainButton,
    ErrorText,
    WrapperError
  },
  computed: {
    ...mapGetters([
      'authenticated',
      'auth_failed'
    ])
  },
  methods: {
    ...mapActions([
      'request_permissions',
      'navigate_to',
      'load_fb_sdk'
    ])
  },
  created () {
    this.load_fb_sdk()
    if (this.authenticated) this.navigate_to(DASHBOARD)
  },
  watch: {
    authenticated () {
      if (this.authenticated) this.navigate_to(DASHBOARD)
    }
  }
}
