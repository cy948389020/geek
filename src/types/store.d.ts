import { Token } from './data'

import { ThunkAction } from 'redux-thunk'
import store from '../store'

// Redux 应用的状态
export type RootState = ReturnType<typeof store.getState>

// 第一个类型参数：thunk action 返回值类型
// 第二个类型参数：Redux 状态的类型
// 第三个类型参数：thunk街action 额外参数的类型
// 第四个类型参数：Redux 中所有 action 的类型
export type RootThunkAction = ThunkAction<void, RootState, unknown, RootAction>

// 项目中所有 action 的类型
type RootAction = LoginAction | ArticleAction

// -------------------- Redux 对象形式的 action 的类型 ---------------------------

// 登录相关的 action 类型
export type LoginAction = {
  type: 'login/token'
  payload: Token
}
// 文章相关的 action 类型
export type ArticleAction = {
  type: 'article/token'
  payload: {}
}
