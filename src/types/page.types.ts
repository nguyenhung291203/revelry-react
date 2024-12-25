export interface PagingFilterResponse<T> {
  contents: T[]
  page: number
  pageSize: number
  total: number
  totalPages: number
}

export interface PagingFilterRequest {
  page: number
  size: number
  isPagingEnabled: boolean
  orders: Record<string, string>
}
