import { mapGetters, mapActions } from 'vuex'

import { LOGIN } from '../../routes/routes_constant'
import { Wrapper } from './dashboard_styles'
import MainText from '../../components/main_text/Main_text.vue'

export default {
  components: {
    Wrapper,
    MainText
  },
  computed: {
    ...mapGetters([
      'authenticated',
      'user_profile'
    ])
  },
  methods: {
    ...mapActions([
      'navigate_to'
    ])
  },
  created () {
    if (!this.authenticated) this.navigate_to(LOGIN)
  }
}
