import { api } from '../api'
import { LoginResponse, LoginRequest, RegisterRequest, ApiResponse, LoginWithSocialRequest } from '@/types'
export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<ApiResponse<LoginResponse>, LoginRequest>({
      query: (request) => ({
        url: '/auth/login',
        method: 'POST',
        data: request
      })
    }),
    register: builder.mutation<LoginResponse, RegisterRequest>({
      query: (data) => ({
        url: '/auth/register',
        method: 'POST',
        data: data
      })
    }),
    logout: builder.mutation<void, void>({
      query: () => ({
        url: '/auth/logout',
        method: 'POST'
      })
    }),
    loginWithSocial: builder.mutation<ApiResponse<LoginResponse>, LoginWithSocialRequest>({
      query: (request) => ({
        url: `/auth/social/login`,
        method: 'POST',
        data: request
      })
    })
  })
})

export const { useLoginMutation, useRegisterMutation, useLogoutMutation, useLoginWithSocialMutation } = authApi
