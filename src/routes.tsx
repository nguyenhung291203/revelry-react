import { Route, Routes } from 'react-router-dom'
import { ManagerProducts, CreateProduct } from '@/pages'
import { ReactNode } from 'react'

interface RouteConfig {
  path: string
  element: ReactNode
  exact?: boolean
}

// Define your route configuration
const routes: RouteConfig[] = [
  {
    path: '/admin/manager-products',
    element: <ManagerProducts />
  },
  {
    path: '/admin/manager-products/create-product',
    element: <CreateProduct />
  }
]

export default function RouteConfiguration() {
  return (
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
    </Routes>
  )
}
