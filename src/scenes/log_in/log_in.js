import { mapActions, mapGetters } from 'vuex'

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
      'request_permissions'
    ])
  }
}
