import { Chrome, Facebook } from 'lucide-react'
import { Outlet } from 'react-router'

interface AuthLayoutProps {
  children?: React.ReactNode
  title?: string
  subtitle?: string
}

const AuthLayout: React.FC<AuthLayoutProps> = ({
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
    <div className='min-h-screen flex flex-col lg:flex-row bg-gradient-to-br from-orange-50 via-white to-orange-50'>
      {/* Left side - Enhanced Banner */}
      <div className='hidden lg:block lg:w-1/2 lg:h-screen lg:sticky lg:top-0 relative overflow-hidden'>
        {/* Background gradient animation */}
        <div
          className='absolute inset-0 bg-gradient-to-r from-orange-600/40 via-orange-700/40 to-orange-800/40 
                       animate-gradient-x backdrop-blur-sm z-10'
        />

        {/* Floating shapes for depth */}
        <div className='absolute inset-0 z-20'>
          <div className='absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-float-slow' />
          <div className='absolute bottom-40 right-20 w-40 h-40 bg-orange-500/10 rounded-full blur-2xl animate-float' />
        </div>

        {/* Main image with enhanced animation */}
        <img
          src='/api/placeholder/800/600'
          alt='Healthy Food'
          className='w-full h-full object-cover animate-ken-burns'
        />

        {/* Content overlay with animations */}
        <div className='absolute inset-0 z-30'>
          <div className='h-full flex flex-col justify-end p-8 lg:p-12 text-white'>
            <div className='space-y-4 animate-fade-in-up'>
              <h2
                className='text-4xl lg:text-5xl font-bold leading-tight 
                           animate-character-fade transition-all duration-700 hover:text-orange-100'
              >
                {title}
              </h2>
              <p
                className='text-lg lg:text-xl opacity-90 font-light
                          animate-character-fade delay-200'
              >
                {subtitle}
              </p>

              {/* Animated indicators */}
              <div className='flex space-x-4 pt-4'>
                <div className='h-1.5 w-16 bg-white/80 rounded-full animate-pulse delay-0' />
                <div className='h-1.5 w-16 bg-white/60 rounded-full animate-pulse delay-150' />
                <div className='h-1.5 w-16 bg-white/40 rounded-full animate-pulse delay-300' />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Content */}
      <div className='flex-1 flex flex-col justify-center items-center p-4 sm:p-6 lg:p-12'>
        <div className='w-full max-w-md space-y-6'>
          <div
            className='bg-white/90 backdrop-blur-xl rounded-3xl shadow-xl shadow-orange-500/10 
                         p-6 sm:p-8 space-y-6 transform hover:shadow-orange-500/20 
                         transition-all duration-300 ease-out hover:-translate-y-1'
          >
            <Outlet />

            <div className='relative py-3'>
              <div className='absolute inset-0 flex items-center'>
                <div className='w-full border-t border-gray-200'></div>
              </div>
              <div className='relative flex justify-center text-sm'>
                <span className='px-4 bg-white text-gray-500'>Hoặc tiếp tục với</span>
              </div>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
              <button
                onClick={handleGoogleLogin}
                className='flex items-center justify-center px-4 py-3 space-x-3 bg-white border border-gray-200 
                         rounded-xl hover:bg-gray-50 transition-all duration-200 group
                         transform hover:-translate-y-0.5 hover:shadow-md'
              >
                <Chrome className='h-5 w-5 text-red-500 transition-transform duration-200 group-hover:scale-110' />
                <span className='text-sm font-medium text-gray-700 group-hover:text-gray-900'>Google</span>
              </button>

              <button
                onClick={handleFacebookLogin}
                className='flex items-center justify-center px-4 py-3 space-x-3 bg-white border border-gray-200 
                         rounded-xl hover:bg-gray-50 transition-all duration-200 group
                         transform hover:-translate-y-0.5 hover:shadow-md'
              >
                <Facebook className='h-5 w-5 text-blue-600 transition-transform duration-200 group-hover:scale-110' />
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
