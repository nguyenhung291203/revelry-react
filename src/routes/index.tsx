import { createBrowserRouter } from 'react-router-dom'
import HomePage from '@/pages/home'
import { AuthLayout, BaseLayout } from '@/components/layout'
import { LoginPage, RegisterPage } from '@/pages'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <BaseLayout />,
      children: [
        {
          index: true,
          element: <HomePage />
        }
      ]
    },
    {
      path: '/',
      element: <AuthLayout />,
      children: [
        {
          path: '/login',
          element: <LoginPage />
        },
        {
          path: '/register',
          element: <RegisterPage />
        }
      ]
    }
  ],
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true
    }
  }
)

export default router
