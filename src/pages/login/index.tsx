import { useState } from 'react'
import { Mail, Lock, Facebook, Chrome } from 'lucide-react'
import { Link } from 'react-router-dom'

const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsLoading(false)
  }

  return (
    <div className='w-full max-w-md space-y-8'>
      {/* Header */}
      <div className='text-center space-y-2'>
        <h2
          className='text-3xl font-bold bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent
                          animate-fade-in'
        >
          Đăng nhập
        </h2>
        <p className='text-gray-600 animate-fade-in-delay'>Đăng nhập vào tài khoản của bạn để tiếp tục</p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className='space-y-6'>
        {/* Email field */}
        <div className='space-y-2 group'>
          <label
            htmlFor='email'
            className='block text-sm font-medium text-gray-700 group-focus-within:text-orange-600
                                              transition-colors duration-200'
          >
            Địa chỉ email
          </label>
          <div className='relative'>
            <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
              <Mail className='h-5 w-5 text-gray-400 group-focus-within:text-orange-500 transition-colors duration-200' />
            </div>
            <input
              id='email'
              name='email'
              type='email'
              required
              className='block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl
                           focus:border-orange-500 hover:border-orange-300 
                           transition-all duration-200 bg-white/50 backdrop-blur-sm
                           focus:outline-none'
              placeholder='Nhập email của bạn'
            />
          </div>
        </div>

        {/* Password field */}
        <div className='space-y-2 group'>
          <label
            htmlFor='password'
            className='block text-sm font-medium text-gray-700 group-focus-within:text-orange-600
                                                transition-colors duration-200'
          >
            Mật khẩu
          </label>
          <div className='relative'>
            <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
              <Lock className='h-5 w-5 text-gray-400 group-focus-within:text-orange-500 transition-colors duration-200' />
            </div>
            <input
              id='password'
              name='password'
              type='password'
              required
              className='block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl
                           focus:border-orange-500 hover:border-orange-300
                           transition-all duration-200 bg-white/50 backdrop-blur-sm
                           focus:outline-none'
              placeholder='Nhập mật khẩu'
            />
          </div>
        </div>

        {/* Remember me and Forgot password */}
        <div className='flex items-center justify-between'>
          <div className='flex items-center'>
            <input
              id='remember-me'
              name='remember-me'
              type='checkbox'
              className='h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded
                           transition-colors duration-200'
            />
            <label htmlFor='remember-me' className='ml-2 block text-sm text-gray-700'>
              Ghi nhớ đăng nhập
            </label>
          </div>
          <a
            href='#'
            className='text-sm font-medium text-orange-600 hover:text-orange-500
                                  transition-colors duration-200 hover:underline'
          >
            Quên mật khẩu?
          </a>
        </div>

        {/* Submit button */}
        <button
          type='submit'
          disabled={isLoading}
          className='w-full relative flex justify-center py-3 px-4 border border-transparent rounded-xl
                       text-sm font-medium text-white overflow-hidden group
                       bg-gradient-to-r from-orange-500 to-orange-600
                       hover:from-orange-600 hover:to-orange-700
                       focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500
                       transform hover:-translate-y-0.5 transition-all duration-200'
        >
          <span className='relative'>
            {isLoading ? (
              <div className='h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin' />
            ) : (
              'Đăng nhập'
            )}
          </span>
        </button>
      </form>

      {/* Sign up link */}
      <div className='text-center mt-8'>
        <p className='text-sm text-gray-600'>
          Chưa có tài khoản?{' '}
          <Link
            to='/register'
            className='font-medium text-orange-600 hover:text-orange-500
                                transition-colors duration-200 hover:underline'
          >
            Đăng ký ngay
          </Link>
        </p>
      </div>
    </div>
  )
}

export default LoginPage
