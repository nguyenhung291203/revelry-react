// src/routes.tsx
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ManagerProducts } from '@/pages'
import { ReactNode } from 'react'

// Define the interface for the route configuration
interface RouteConfig {
  path: string // Path for the route
  element: ReactNode // Component to be rendered
  exact?: boolean // Optional: whether the route matches exactly
}

// Define your route configuration
const routes: RouteConfig[] = [
  {
    path: '/admin/manager-products',
    element: <ManagerProducts />,
    
  }
  // You can add more routes here
]

// Exporting routes for dynamic rendering in App.tsx or elsewhere
export default function RouteConfiguration() {
  return (
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
    </Routes>
  )
}
