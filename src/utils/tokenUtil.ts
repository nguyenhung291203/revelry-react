const ACCESS_TOKEN_KEY = 'access_token'
const REFRESH_TOKEN_KEY = 'refresh_token'

export const tokenUtil = {
  /**
   * Lưu access token vào localStorage.
   * @param accessToken Chuỗi access token.
   */
  setAccessToken(accessToken: string): void {
    localStorage.setItem(ACCESS_TOKEN_KEY, accessToken)
  },

  /**
   * Lưu refresh token vào localStorage.
   * @param refreshToken Chuỗi refresh token.
   */
  setRefreshToken(refreshToken: string): void {
    localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken)
  },

  /**
   * Lấy access token từ localStorage.
   * @returns Chuỗi access token hoặc null nếu không tồn tại.
   */
  getAccessToken(): string | null {
    return localStorage.getItem(ACCESS_TOKEN_KEY)
  },

  /**
   * Lấy refresh token từ localStorage.
   * @returns Chuỗi refresh token hoặc null nếu không tồn tại.
   */
  getRefreshToken(): string | null {
    return localStorage.getItem(REFRESH_TOKEN_KEY)
  },

  /**
   * Xóa access token khỏi localStorage.
   */
  clearAccessToken(): void {
    localStorage.removeItem(ACCESS_TOKEN_KEY)
  },

  /**
   * Xóa refresh token khỏi localStorage.
   */
  clearRefreshToken(): void {
    localStorage.removeItem(REFRESH_TOKEN_KEY)
  },

  /**
   * Kiểm tra xem access token có tồn tại hay không.
   * @returns True nếu access token tồn tại, ngược lại false.
   */
  hasAccessToken(): boolean {
    return localStorage.getItem(ACCESS_TOKEN_KEY) !== null
  },

  /**
   * Kiểm tra xem refresh token có tồn tại hay không.
   * @returns True nếu refresh token tồn tại, ngược lại false.
   */
  hasRefreshToken(): boolean {
    return localStorage.getItem(REFRESH_TOKEN_KEY) !== null
  }
}
