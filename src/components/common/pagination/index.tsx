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
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        className='rounded-full w-10 h-10 text-white bg-[#ee4d2d] hover:bg-[#fce9e1] disabled:bg-[#f7f7f7] flex items-center justify-center transition duration-300'
        disabled={currentPage === 1}
      >
        <FaChevronLeft className='w-4 h-4' />
      </button>

      {getPageNumbers().map((page) => (
        <button
          key={page}
          onClick={() => handlePageChange(page)}
          className={`w-10 h-10 text-white ${currentPage === page ? 'bg-[#ee4d2d] font-semibold' : 'bg-gray-600'} rounded-full hover:bg-[#fce9e1] transition duration-300 flex items-center justify-center`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => handlePageChange(currentPage + 1)}
        className='rounded-full w-10 h-10 text-white bg-[#ee4d2d] hover:bg-[#fce9e1] disabled:bg-[#f7f7f7] flex items-center justify-center transition duration-300'
        disabled={currentPage === totalPages}
      >
        <FaChevronRight className='w-4 h-4' />
      </button>
    </div>
  )
}

export default Pagination
