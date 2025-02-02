import { AccountResponse } from './account.types'

export interface LoginResponse {
  account: AccountResponse
  accessToken: string
  refreshToken: string
}

export interface LoginRequest {
  username: string
  password: string
}

export interface LoginWithSocialRequest {
  email: string
  image: string
  phoneNumber: string
  fullName: string
  token: string
  provider: 'LOCAL' | 'GOOGLE' | 'FACEBOOK'
}

export interface RegisterRequest {
  username: string
  phoneNumber: string
  email: string
  fullName: string
  password: string
  confirmPassword: string
  terms: boolean
}

export interface RefreshTokenResponse {
  accessToken: string
  refreshToken: string
}
