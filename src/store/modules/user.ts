import { defineStore } from 'pinia'
import { reqLogin } from '@/api/user'
import { loginForm, loginResponseData } from '@/api/user/type'
import { UserState } from './types/type'
import { SET_TOKEN, GET_TOKEN } from '@/utils/token'

let useUserStore = defineStore('User', {
  state: (): UserState => {
    return {
      token: GET_TOKEN()
    }
  },
  actions: {
    async userLogin(data: loginForm) {
      let res: loginResponseData = await reqLogin(data)
      if (res.code === 200) {
        this.token = res.data.token as string
        SET_TOKEN(res.data.token as string)
        return 'ok'
      } else {
        return Promise.reject(new Error(res.data.message))
      }
    }
  },
  getters: {}
})

export default useUserStore