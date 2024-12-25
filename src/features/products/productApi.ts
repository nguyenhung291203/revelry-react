import { api } from '@/api/api'
import { Product, ApiResponse, PagingFilterResponse, ProductFilterRequest } from '@/types'

export const productApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.mutation<ApiResponse<PagingFilterResponse<Product>>, ProductFilterRequest>({
      query: (request: ProductFilterRequest) => ({
        url: `/products/filter`,
        method: 'POST',
        body: request
      })
    }),
    getProductById: builder.query<ApiResponse<Product>, string>({
      query: (id: string) => `/products/${id}`
    }),
    createProduct: builder.mutation<ApiResponse<Product>, unknown>({
      query: (request: unknown) => ({
        url: `/products`,
        method: 'POST',
        body: request
      })
    })
  })
})

export const { useGetProductsMutation, useGetProductByIdQuery, useCreateProductMutation } = productApi
