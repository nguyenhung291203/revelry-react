import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { LoginResponse } from '@/types'
import { AccountResponse } from '@/types/account.types'
import { tokenUtil } from '@/utils/tokenUtil'
interface AuthState {
  account: AccountResponse
  accessToken: string
  refreshToken: string
}

const initialState: AuthState = {
  account: null,
  accessToken: null,
  refreshToken: null
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<{ response: LoginResponse }>) => {
      const { account, accessToken, refreshToken } = action.payload.response
      state.account = account
      state.accessToken = accessToken
      state.refreshToken = refreshToken
      tokenUtil.setAccessToken(accessToken)
      tokenUtil.setRefreshToken(refreshToken)
    },
    logout: (state) => {
      state.account = null
      state.accessToken = null
      state.refreshToken = null
      tokenUtil.clearAccessToken()
      tokenUtil.clearRefreshToken()
    }
  }
})

export const { setCredentials, logout } = authSlice.actions
export default authSlice.reducer
