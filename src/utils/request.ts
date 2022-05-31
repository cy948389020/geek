import axios from 'axios'
import store from '@/store'
import { Toast } from 'antd-mobile'
import { customHistory } from './history'

// 获取环境变量中配置的 url 地址
// 本地演示使用
// const baseURL =
//   process.env.NODE_ENV === 'development' ? '/api' : process.env.REACT_APP_URL

export const request = axios.create({
  baseURL: 'http://toutiao.itheima.net/v1_0',
  // 如果本地开发服务器和线上的真正服务器都统一代理了 /api，那么，此处就直接使用 /api 即可
  // baseURL: '/api',
  // baseURL,
  timeout: 5000,
})

//请求拦截器
request.interceptors.request.use((config) => {
  // console.log(config.url)
  // 获取token
  const {
    login: { token },
  } = store.getState()
  // console.log(token)
  // 除了登录请求外，其他请求统一添加 token
  if (!config.url?.startsWith('/authorizations')) {
    // 使用 非空断言 来去掉 headers 类型中的 undefined 类型
    config.headers!.Authorization = `Bearer ${token}`
  }
  return config
})

// 响应拦截器
request.interceptors.response.use(undefined, (error) => {
  // console.log(error)
  // 如果网络超时
  if (!error.response) {
    Toast.show({
      content: '网络超时',
      duration: 1000,
    })
    return Promise.reject(error)
  }
  // 判断是否是登录过期
  if (error.response.status === 401) {
    Toast.show({
      content: '用户登录信息超时，请重新登录',
      duration: 1000,
      afterClose: () => {
        customHistory.push('/login', { from: customHistory.location.pathname })
      },
    })
  }
  // 触发退出action，清除信息
  // store.dispatch(logout())
  return Promise.reject(error)
})
