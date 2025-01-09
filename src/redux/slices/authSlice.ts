import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { LoginResponse } from '@/types'
import { AccountResponse } from '@/types/account.types'
import { tokenUtil } from '@/utils/tokenUtil'
interface AuthState {
  account: AccountResponse
  isAuthenticated: boolean
}

const initialState: AuthState = {
  account: null,

  isAuthenticated: tokenUtil.hasAccessToken()
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ response: LoginResponse }>) => {
      const { account, accessToken, refreshToken } = action.payload.response
      state.account = account
      state.isAuthenticated = true
      tokenUtil.setAccessToken(accessToken)
      tokenUtil.setRefreshToken(refreshToken)
    },
    logout: (state) => {
      state.account = null
      tokenUtil.clearAccessToken()
      tokenUtil.clearRefreshToken()
    }
  }
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer
