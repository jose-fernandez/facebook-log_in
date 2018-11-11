import axios from 'axios'

const get = async (url, param) => {
  return await new Promise((resolve, reject) => {
    axios.get(url, {
      params: {
        url: param,
        status_code: 200
      }
    }).then(response => {
      resolve(response)
    }).catch((err) => {
      reject(err)
    })
  })
}

export { get }
