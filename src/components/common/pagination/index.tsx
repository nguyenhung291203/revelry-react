import React from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa' // Thêm thư viện icons để sử dụng

// Định nghĩa các prop kiểu dữ liệu
interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page)
    }
  }

  // Hàm để hiển thị các trang giới hạn số lượng trang hiển thị
  const getPageNumbers = () => {
    const maxPageButtons = 5 // Số lượng trang tối đa hiển thị
    if (totalPages <= maxPageButtons) {
      return Array.from({ length: totalPages }, (_, index) => index + 1)
    }

    const pageNumbers = []
    const halfVisiblePages = Math.floor(maxPageButtons / 2)

    // Nếu đang ở đầu danh sách các trang
    if (currentPage <= halfVisiblePages) {
      for (let i = 1; i <= maxPageButtons; i++) {
        pageNumbers.push(i)
      }
    }
    // Nếu đang ở cuối danh sách các trang
    else if (currentPage > totalPages - halfVisiblePages) {
      for (let i = totalPages - maxPageButtons + 1; i <= totalPages; i++) {
        pageNumbers.push(i)
      }
    }
    // Nếu trang hiện tại ở giữa
    else {
      for (let i = currentPage - halfVisiblePages; i <= currentPage + halfVisiblePages; i++) {
        pageNumbers.push(i)
      }
    }

    return Array.from(new Set(pageNumbers)) // Lọc các giá trị trùng lặp nếu có
  }

  return (
    <div className='flex justify-end mt-6 items-center space-x-2'>
      {/* Prev button */}
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        className='rounded-xl w-[42px] h-[42px] text-white bg-gray-600 hover:bg-gray-700 disabled:bg-gray-400 flex items-center justify-center transition duration-300'
        disabled={currentPage === 1}
      >
        <FaChevronLeft className='w-3 h-3' />
      </button>

      {/* Page number buttons */}
      {getPageNumbers().map((page) => (
        <button
          key={page}
          onClick={() => handlePageChange(page)}
          className={`w-[42px] h-[42px] text-white ${currentPage === page ? 'bg-gray-600' : 'bg-gray-600'} rounded-xl hover:bg-gray-700 transition duration-300 flex items-center justify-center`}
        >
          {page}
        </button>
      ))}

      {/* Next button */}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        className='rounded-xl w-[42px] h-[42px] text-white bg-gray-600 hover:bg-gray-700 disabled:bg-gray-400 flex items-center justify-center transition duration-300'
        disabled={currentPage === totalPages}
      >
        <FaChevronRight className='w-3 h-3' />
      </button>
    </div>
  )
}

export default Pagination
