import React from 'react'
import { Chrome, Facebook } from 'lucide-react'

interface AuthLayoutProps {
  children: React.ReactNode
  title?: string
  subtitle?: string
}

const AuthLayout: React.FC<AuthLayoutProps> = ({
  children,
  title = 'Chào mừng trở lại',
  subtitle = 'Hãy bắt đầu hành trình của bạn với chúng tôi'
}) => {
  const handleGoogleLogin = () => {
    console.log('Logging in with Google')
  }

  const handleFacebookLogin = () => {
    console.log('Logging in with Facebook')
  }

  return (
    <div className='min-h-screen flex bg-gradient-to-br from-orange-50 via-white to-orange-50'>
      <div className='hidden lg:flex lg:w-1/2 relative overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-r from-orange-600/30 to-orange-800/30 backdrop-blur-sm z-10' />
        <img
          src='https://askbootstrap.com/preview/osahan-eat/theme-sidebar/img/banner-img.jpg'
          alt='Healthy Food'
          className='w-full h-full object-cover transform scale-110 hover:scale-105 transition-all duration-1000 ease-out'
        />
        <div className='absolute inset-0 z-20'>
          <div className='h-full flex flex-col justify-end p-12 text-white'>
            <h2 className='text-4xl font-bold mb-4 animate-slide-up'>{title}</h2>
            <p className='text-lg opacity-90 animate-slide-up-delay'>{subtitle}</p>
            <div className='mt-8 flex space-x-4 animate-fade-in-delay'>
              <div className='h-1 w-12 bg-white/60 rounded-full' />
              <div className='h-1 w-12 bg-white/30 rounded-full' />
              <div className='h-1 w-12 bg-white/30 rounded-full' />
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Content */}
      <div className='flex-1 flex flex-col justify-center items-center p-6 sm:p-12'>
        <div className='w-full max-w-md space-y-8'>
          {/* Main form content */}
          <div
            className='bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl shadow-orange-500/10 p-8 space-y-8
                       transform hover:shadow-orange-500/20 transition-all duration-300 ease-out'
          >
            {children}

            {/* Divider */}
            <div className='relative'>
              <div className='absolute inset-0 flex items-center'>
                <div className='w-full border-t border-gray-300'></div>
              </div>
              <div className='relative flex justify-center text-sm'>
                <span className='px-2 bg-white text-gray-500'>Hoặc tiếp tục với</span>
              </div>
            </div>

            {/* Social Login */}
            <div className='grid grid-cols-2 gap-4'>
              <button
                onClick={handleGoogleLogin}
                className='flex items-center justify-center px-4 py-3 space-x-2 bg-white border border-gray-300 rounded-xl
                         hover:bg-gray-50 transition-all duration-200 group
                         transform hover:-translate-y-0.5'
              >
                <Chrome className='h-5 w-5 text-red-500' />
                <span className='text-sm font-medium text-gray-700 group-hover:text-gray-900'>Google</span>
              </button>

              <button
                onClick={handleFacebookLogin}
                className='flex items-center justify-center px-4 py-3 space-x-2 bg-white border border-gray-300 rounded-xl
                         hover:bg-gray-50 transition-all duration-200 group
                         transform hover:-translate-y-0.5'
              >
                <Facebook className='h-5 w-5 text-blue-600' />
                <span className='text-sm font-medium text-gray-700 group-hover:text-gray-900'>Facebook</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthLayout
