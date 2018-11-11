import router from './routes'

const navigate_to = (context, address) => {
  router.push({ name: address })
}

export { navigate_to }
