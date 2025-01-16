import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, InternalAxiosRequestConfig } from 'axios'
import { BaseQueryFn } from '@reduxjs/toolkit/query'
import { API_CONFIG } from '@/config/api.config'
import { tokenUtil } from '@/utils/tokenUtil'
import { ApiResponse, RefreshTokenResponse } from '@/types'

const axiosInstance: AxiosInstance = axios.create({
  baseURL: API_CONFIG.BASE_URL,
  timeout: API_CONFIG.TIMEOUT,
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true
})

axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = tokenUtil.getAccessToken()
    if (token) {
      config.headers[API_CONFIG.AUTH_HEADER] = `${API_CONFIG.TOKEN_TYPE} ${token}`
    }
    return config
  },
  (error: AxiosError) => Promise.reject(error)
)

let isRefreshing = false
let refreshSubscribers: ((token: string) => void)[] = []

const subscribeTokenRefresh = (cb: (token: string) => void) => {
  refreshSubscribers.push(cb)
}

const onTokenRefreshed = (token: string) => {
  refreshSubscribers.forEach((cb) => cb(token))
  refreshSubscribers = []
}

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error: AxiosError<ApiResponse<unknown>>) => {
    const originalRequest = error.config as AxiosRequestConfig & {
      _retry?: boolean
    }

    if (!originalRequest) {
      return Promise.reject(error)
    }

    if (error.response?.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        try {
          const token = await new Promise<string>((resolve) => {
            subscribeTokenRefresh((token: string) => {
              resolve(token)
            })
          })

          if (originalRequest.headers) {
            originalRequest.headers[API_CONFIG.AUTH_HEADER] = `${API_CONFIG.TOKEN_TYPE} ${token}`
          }
          return axiosInstance(originalRequest)
        } catch (err) {
          return Promise.reject(err)
        }
      }

      originalRequest._retry = true
      isRefreshing = true

      try {
        const refreshToken = tokenUtil.getRefreshToken()
        if (!refreshToken) {
          throw new Error('No refresh token available')
        }

        const { data } = await axios.post<ApiResponse<RefreshTokenResponse>>(
          `${API_CONFIG.BASE_URL}${API_CONFIG.REFRESH_URL}`,
          { refreshToken }
        )

        const { accessToken, refreshToken: newRefreshToken } = data.result

        tokenUtil.setAccessToken(accessToken)
        tokenUtil.setRefreshToken(newRefreshToken)

        if (originalRequest.headers) {
          originalRequest.headers[API_CONFIG.AUTH_HEADER] = `${API_CONFIG.TOKEN_TYPE} ${accessToken}`
        }

        onTokenRefreshed(accessToken)
        isRefreshing = false

        return axiosInstance(originalRequest)
      } catch (refreshError) {
        tokenUtil.clearAccessToken()
        tokenUtil.clearRefreshToken()
        isRefreshing = false
        // window.location.href = '/login'
        return Promise.reject(refreshError)
      }
    }

    return Promise.reject(error)
  }
)

export interface BaseQueryArgs {
  url: string
  method: AxiosRequestConfig['method']
  data?: AxiosRequestConfig['data']
  params?: AxiosRequestConfig['params']
  headers?: AxiosRequestConfig['headers']
}

export const axiosBaseQuery = (
  { baseUrl }: { baseUrl: string } = { baseUrl: '' }
): BaseQueryFn<BaseQueryArgs, unknown, ApiResponse<unknown>> => {
  return async ({ url, method, data, params, headers }) => {
    try {
      const response = await axiosInstance({
        url: baseUrl + url,
        method,
        data,
        params,
        headers
      })

      return { data: response.data }
    } catch (axiosError) {
      const err = axiosError as AxiosError<ApiResponse<unknown>>
      if (!err.response) {
        // Network error or other errors without response
        return {
          error: {
            status: 500,
            message: 'Network Error',
            result: null
          }
        }
      }
      // Return error in ApiResponse format
      return {
        error: err.response.data
      }
    }
  }
}
