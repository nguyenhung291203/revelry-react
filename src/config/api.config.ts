export const API_CONFIG = {
  BASE_URL: 'http://localhost:8000/api/v1',
  TIMEOUT: 10000,
  REFRESH_URL: '/auth/refresh-token',
  AUTH_HEADER: 'Authorization',
  TOKEN_TYPE: 'Bearer'
} as const
