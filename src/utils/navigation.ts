import { useNavigate } from 'react-router-dom'

interface NavigateOptions {
  replace?: boolean // Thay thế URL hiện tại trong lịch sử thay vì thêm mới
  state?: Record<string, unknown> // Dữ liệu muốn truyền khi điều hướng
}

const useNavigation = () => {
  const navigate = useNavigate()

  /**
   * Điều hướng đến một route cụ thể.
   * @param path - Đường dẫn muốn điều hướng.
   * @param options - Các tùy chọn điều hướng.
   */
  const goTo = (path: string, options?: NavigateOptions) => {
    navigate(path, options)
  }

  return { goTo }
}

export default useNavigation
