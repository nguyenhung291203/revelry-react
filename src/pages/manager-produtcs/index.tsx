import { useEffect, useState } from 'react'
import { Pagination } from '../../components/common'
import { CiCirclePlus } from 'react-icons/ci'
import { useGetProductsMutation } from '@/features/products/productApi'
import { Product, ProductFilterRequest, ApiResponse, PagingFilterResponse } from '@/types'

const ManagerProducts: React.FC = () => {
  // Update state to store the entire PagingFilterResponse, not just products
  const [productsResponse, setProductsResponse] = useState<PagingFilterResponse<Product>>({
    contents: [],
    page: 1,
    pageSize: 10,
    total: 0,
    totalPages: 0
  })

  const [getProducts, { isLoading, data, error }] = useGetProductsMutation()
  console.log('Data:', data)

  const handlePageChange = (page: number) => {
    console.log('Page:', page)
    const filterRequest: ProductFilterRequest = {
      page: page,
      size: 10,
      isPagingEnabled: true,
      orders: {} // Nếu có thứ tự sắp xếp, bổ sung ở đây
    }
    getProducts(filterRequest) // Gọi API khi thay đổi trang
  }

  useEffect(() => {
    // Load initial products (mới nhất hoặc sản phẩm mặc định)
    const filterRequest: ProductFilterRequest = {
      page: 1,
      size: 10,
      isPagingEnabled: true,
      orders: {}
    }
    getProducts(filterRequest)
  }, [getProducts])

  useEffect(() => {
    if (data) {
      // Update the state with the entire PagingFilterResponse
      const productsData: PagingFilterResponse<Product> = (data as ApiResponse<PagingFilterResponse<Product>>).result
      setProductsResponse(productsData)
    }
  }, [data])

  return (
    <>
      <h1 className='text-3xl text-left font-bold text-gray-100 mb-1'>Món ăn</h1>
      <div className='text-sm text-left text-gray-100 mb-4'>Quản lý món ăn</div>
      <div className='container mx-auto p-2 text-gray-200'>
        <div className='flex flex-col sm:flex-row mb-6 items-start justify-start sm:justify-between space-y-4 sm:space-y-0 sm:space-x-2 w-full'>
          <input
            type='text'
            placeholder='Lọc sản phẩm theo tên'
            className='px-3 py-2 border border-gray-600 rounded-lg w-full sm:w-48 text-sm'
          />
          <div>
            <button className='flex items-center px-4 py-2 bg-white text-gray-800 border-2 border-gray-800 rounded-lg text-sm hover:bg-gray-200 transition duration-200 min-w-[160px] max-w-[220px] sm:min-w-[160px]'>
              <CiCirclePlus className='mr-2 w-4 h-4' />
              Thêm sản phẩm
            </button>
          </div>
        </div>

        {/* Bảng sản phẩm với responsive */}
        <div className='overflow-x-auto'>
          <table className='table-auto w-full border border-gray-800 rounded-2xl'>
            <thead>
              <tr className='bg-gray-600'>
                <th className='px-4 py-2 text-left text-white'>Image</th>
                <th className='px-4 py-2 text-left text-white'>Name</th>
                <th className='px-4 py-2 text-left text-white'>Description</th>
                <th className='px-4 py-2 text-left text-white'>Price</th>
                <th className='px-4 py-2 text-left text-white'>Status</th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <tr>
                  <td colSpan={5} className='text-center py-4'>
                    Loading...
                  </td>
                </tr>
              ) : error ? (
                <tr>
                  <td colSpan={5} className='text-center py-4 text-red-600'>
                    Error loading products
                  </td>
                </tr>
              ) : (
                productsResponse.contents.map((product: Product) => (
                  <tr key={product.id} className='hover:bg-gray-800 hover:text-white'>
                    <td className='px-4 py-2'>
                      <img src={product.image} alt={product.name} className='w-10 h-10 object-cover rounded' />
                    </td>
                    <td className='px-4 py-2'>{product.name}</td>
                    <td className='px-4 py-2'>{product.description}</td>
                    <td className='px-4 py-2'>{product.price}</td>
                    <td
                      className={`px-4 py-2 font-medium ${product.status === 'Available' ? 'text-green-600' : 'text-red-600'}`}
                    >
                      {product.status}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <Pagination
          totalPages={productsResponse.totalPages}
          currentPage={productsResponse.page}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  )
}

export default ManagerProducts
