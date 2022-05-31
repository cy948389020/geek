import { Token } from '@/types/data'

const GEEK_TOKEN = 'geek_h5_Token'

// 创建 获取 token
export const getToken = () => {
  return localStorage.getItem(GEEK_TOKEN)
}
// 创建 设置 token
export const setToken = (token: Token) => {
  return localStorage.setItem(GEEK_TOKEN, JSON.stringify(token))
}
// 创建 清除 token
export const clearToken = () => {
  return localStorage.removeItem(GEEK_TOKEN)
}
// 创建 根据 token 判断是否登录
export const isAuth = () => !!getToken()
