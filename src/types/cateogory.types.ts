import { PagingFilterRequest } from './page.types'

export interface Category {
  id: string
  name: string
  description: string
  image: string
}

export interface CategoryFilterRequest extends PagingFilterRequest {
  name?: string
}
