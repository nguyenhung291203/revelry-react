import { createApi } from '@reduxjs/toolkit/query/react'
import { axiosBaseQuery } from './api/axiosBaseQuery'
import { API_CONFIG } from '@/config/api.config'

export const api = createApi({
  baseQuery: axiosBaseQuery({
    baseUrl: API_CONFIG.BASE_URL
  }),
  endpoints: () => ({}),
  tagTypes: ['Auth', 'User', 'Products']
})
