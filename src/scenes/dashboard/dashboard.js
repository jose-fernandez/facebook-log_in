import { mapGetters, mapActions } from 'vuex'

import { LOGIN } from '../../routes/routes_constant'
import { Wrapper, NavBar } from './dashboard_styles'
import MainText from '../../components/main_text/Main_text.vue'
import LogoutButton from '../../components/logout_button/Logout_button.vue'

export default {
  components: {
    Wrapper,
    MainText,
    NavBar,
    LogoutButton
  },
  computed: {
    ...mapGetters([
      'authenticated',
      'user_profile'
    ])
  },
  methods: {
    ...mapActions([
      'navigate_to',
      'logout'
    ])
  },
  created () {
    if (!this.authenticated) this.navigate_to(LOGIN)
  }
}
