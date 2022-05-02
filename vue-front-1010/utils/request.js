import axios from 'axios'
import cookie from "js-cookie"

// 创建axios实例
const service = axios.create({
  baseURL: 'http://localhost:9001', // api的base_url
  timeout: 20000 // 请求超时时间
})

// http request 拦截器
service.interceptors.request.use(
  config => {
  //debugger
  // 判断cookie中是否有以guli_token命名的值
  if (cookie.get('guli_token')) {
    // 有的话 将其放到header中
    config.headers.token = cookie.get('guli_token');
    // config.headers['token'] = cookie.get('guli_token');
  }
  // }
    return config
  },
  err => {
  return Promise.reject(err);
})


export default service