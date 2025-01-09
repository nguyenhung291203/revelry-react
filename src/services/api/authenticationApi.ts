import { api } from '../api'
import { LoginResponse, LoginRequest, RegisterRequest, ApiResponse } from '@/types'
export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<ApiResponse<LoginResponse>, LoginRequest>({
      query: (request) => ({
        url: '/authentication/login',
        method: 'POST',
        data: request
      })
    }),
    register: builder.mutation<LoginResponse, RegisterRequest>({
      query: (data) => ({
        url: '/authentication/register',
        method: 'POST',
        body: data
      })
    }),
    logout: builder.mutation<void, void>({
      query: () => ({
        url: '/authentication/logout',
        method: 'POST'
      })
    })
  })
})

export const { useLoginMutation, useRegisterMutation, useLogoutMutation } = authApi
