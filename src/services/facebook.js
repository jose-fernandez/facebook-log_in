'use strict'

class Facebook {
  getScript () {
    return new Promise((resolve) => {
      if (window.FB) {
        resolve(window.FB)
      }

      const id = 'facebook-jssdk'
      const fjs = document.querySelectorAll('script')[0]
      if (document.getElementById(id)) {
        return
      }

      const js = document.createElement('script')
      js.id = id
      js.src = '//connect.facebook.net/en_EN/sdk.js'

      js.addEventListener('load', () => {
        Object.assign(this, {
          AppEvents: window.FB.AppEvents,
          Canvas: window.FB.Canvas,
          Event: window.FB.Event,
          Frictionless: window.FB.Frictionless,
          XFBML: window.FB.XFBML
        })

        resolve(window.FB)
      })

      fjs.parentNode.insertBefore(js, fjs)
    })
  }

  init (params = {}) {
    return new Promise(async (resolve) => {
      const FB = await this.getScript()
      FB.init(params)

      resolve(FB)
    })
  }

  api (...params) {
    return new Promise(async (resolve) => {
      const FB = await this.getScript()

      const callback = (response) => {
        resolve(response)
      }

      if (params.length > 3) {
        params = params.slice(0, 3)
      }

      params.push(callback)

      FB.api(...params)
    })
  }

  ui (params) {
    return new Promise(async (resolve) => {
      const FB = await this.getScript()

      FB.ui(params, (response) => {
        resolve(response)
      })
    })
  }

  getLoginStatus () {
    return new Promise(async (resolve) => {
      const FB = await this.getScript()

      FB.getLoginStatus((response) => {
        resolve(response)
      })
    })
  }

  login (params = { scope: 'public_profile,email' }) {
    return new Promise(async (resolve, reject) => {
      const FB = await this.getScript()

      FB.login((res) => {
        if (res.authResponse) resolve(res)
        reject(res)
      }, params)
    })
  }

  logout () {
    return new Promise(async (resolve) => {
      const FB = await this.getScript()

      FB.logout((response) => {
        resolve(response)
      })
    })
  }

  getAuthResponse () {
    return new Promise(async (resolve) => {
      const FB = await this.getScript()

      resolve(FB.getAuthResponse())
    })
  }

  me () {
    return new Promise(async (resolve) => {
      const me = await this.api('/me?fields=name,email,gender,verified,link')

      resolve(me)
    })
  }
}

const facebook = new Facebook()

export default facebook
