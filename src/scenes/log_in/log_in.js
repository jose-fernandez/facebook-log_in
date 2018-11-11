import { mapActions, mapGetters } from 'vuex'

import { DASHBOARD } from '../../routes/routes_constant'
import { Wrapper, WrapperButton } from './log_in_styles'
import MainButton from '../../components/main_button/Main_button.vue'

export default {
  components: {
    Wrapper,
    WrapperButton,
    MainButton
  },
  computed: {
    ...mapGetters([
      'authenticated'
    ])
  },
  methods: {
    ...mapActions([
      'request_permissions',
      'navigate_to'
    ])
  },
  created () {
    if (this.authenticated) this.navigate_to(DASHBOARD)
  },
  watch: {
    authenticated () {
      if (this.authenticated) this.navigate_to(DASHBOARD)
    }
  }
}
