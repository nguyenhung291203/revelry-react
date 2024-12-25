import { PagingFilterRequest } from './page.types'

export interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
}

export interface ProductFilterRequest extends PagingFilterRequest {
  name: string
  isDeleted: boolean
  minPrice: number
  maxPrice: number
  categoryIds: string[]
}
