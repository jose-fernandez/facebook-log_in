import axios from 'axios'

const get = async (url, params) => {
  return await new Promise((resolve, reject) => {
    axios.get(url, {
      params
    }).then(res => {
      resolve(res)
    }).catch((err) => {
      reject(err)
    })
  })
}

const post = async (url, body) => {
  return await new Promise((resolve, reject) => {
    axios.post(url, body).then(res => {
      resolve(res)
    }).catch((err) => {
      reject(err)
    })
  })
}

export { get, post }
