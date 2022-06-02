import axios from 'axios'
import {Message} from 'element-ui'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 5000
})

service.interceptors.request.use(
  config => {
    return config
  }, err => {
    Message.error(err)
    return Promise.reject(err)
  }
)

service.interceptors.response.use(
  response => {
    const res = response.data;
    console.log(res)
    return res
  },
  error => {
    Message.error(error)
    return Promise.reject(error)
  }
)


export default service
