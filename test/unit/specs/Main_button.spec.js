import Vue from 'vue'
import MainButton from '@/components/main_button/Main_button.vue'

describe('Main_button.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(MainButton)
    const vm = new Constructor().$mount()
    console.log('class', vm.$el)
    expect(
      (<MainButton />).find(<TextButton/>).textContent)
      .toEqual('Log in with Facebook')
  })
})
