import { Token } from '@/types/data'
import { RootThunkAction } from '@/types/store'
import { setToken } from '@/utils/auth'
import { request } from '@/utils/request'

type LoginParams = {
  mobile: string
  code: string
}

type LoginResponse = {
  message: string
  data: Token
}

export const login = (data: LoginParams): RootThunkAction => {
  return async (dispatch) => {
    const res = await request.post<LoginResponse>('/authorizations', data)

    const { data: token } = res.data
    setToken(token)
    console.log(token)

    dispatch({ type: 'login/token', payload: token })
  }
}
