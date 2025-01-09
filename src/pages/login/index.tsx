import { Lock, CircleUser } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { ApiResponse, LoginRequest } from '@/types'
import { VALIDATIONS } from '@/constants'
import { tokenUtil } from '@/utils/tokenUtil'
import { useLoginMutation } from '@/services/api/authenticationApi'
import { showNotification } from '@/services/NotificationService'
import { useAuth } from '@/hooks'
const fields = [
  {
    id: 'username',
    name: 'username',
    type: 'text',
    placeholder: 'Nhập tài khoản của bạn',
    label: 'Tài khoản',
    icon: CircleUser,
    validation: VALIDATIONS.USERNAME_VALIDATION,
    autocomplete: 'username'
  },
  {
    id: 'password',
    name: 'password',
    type: 'password',
    placeholder: 'Tạo mật khẩu mới',
    label: 'Mật khẩu',
    icon: Lock,
    validation: VALIDATIONS.PASSWORD_VALIDATION,
    autocomplete: 'new-password'
  }
]

const LoginPage = () => {
  const navigate = useNavigate()
  const [login, { isLoading, error }] = useLoginMutation()
  const { handleLogin } = useAuth()
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm<LoginRequest>()
  useEffect(() => {
    if (error && 'result' in error) {
      const apiError = error as ApiResponse<Record<string, string>>
      if (apiError.code == 422) {
        Object.entries(apiError.result).forEach(([field, message]) => {
          setError(field as keyof LoginRequest, {
            type: 'server',
            message: message as string
          })
        })
      }
    }
  }, [error, setError])

  const onSubmit = async (request: LoginRequest) => {
    const { result } = await login(request).unwrap()
    handleLogin(result)
    showNotification({
      type: 'success',
      title: 'Đăng nhập thành công',
      message: 'Chào mừng bạn trở lại'
    })
    navigate('/')
  }

  return (
    <div className='w-full max-w-md space-y-8 relative'>
      {/* Decorative background effects */}
      <div className='absolute -top-10 -right-10 w-72 h-72 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob' />
      <div className='absolute -bottom-8 -left-10 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000' />

      {/* Header */}
      <div className='text-center space-y-2 relative'>
        <h2 className='text-4xl font-bold bg-gradient-to-r from-orange-600 via-orange-500 to-orange-700 bg-clip-text text-transparent animate-gradient'>
          Đăng nhập
        </h2>
        <p className='text-gray-600 animate-fade-up'>Đăng nhập vào tài khoản của bạn để tiếp tục</p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className='space-y-6 relative backdrop-blur-sm'>
        {fields.map(({ id, name, type, placeholder, label, icon: Icon, validation, autocomplete }, index) => (
          <div key={id} className='space-y-2 group animate-fade-up' style={{ animationDelay: `${index * 100}ms` }}>
            <label
              htmlFor={id}
              className={`block text-sm font-medium transition-all duration-300 
                ${
                  errors[name]
                    ? 'text-red-500 group-focus-within:text-red-600 group-hover:text-red-600'
                    : 'text-gray-700 group-focus-within:text-orange-600 group-hover:text-orange-600'
                }`}
            >
              {label}
            </label>
            <div className='relative group'>
              <div className='absolute z-2 inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                <Icon
                  className={`h-5 w-5 ${
                    errors[name] ? 'text-red-500' : 'text-gray-400'
                  } group-hover:scale-110 group-focus-within:scale-110 transition-all duration-300`}
                />
              </div>
              <input
                id={id}
                name={name}
                type={type}
                placeholder={placeholder}
                autoComplete={autocomplete}
                className={`block w-full pl-10 pr-3 py-3 border-2 rounded-xl focus:ring-2  
                        transition-all duration-300 bg-white/70 backdrop-blur-sm focus:outline-none
                        transform group-hover:-translate-y-0.5
                        ${
                          errors[name]
                            ? 'focus:ring-red-200 focus:border-red-500 hover:border-red-300 group-hover:shadow-lg group-hover:shadow-red-100 border-red-300'
                            : 'focus:ring-orange-200 focus:border-orange-500 hover:border-orange-300 group-hover:shadow-lg group-hover:shadow-orange-100 border-gray-300'
                        }`}
                {...register(name as keyof LoginRequest, validation)}
              />
            </div>
            {errors[name] && <p className='text-red-500 text-sm animate-shake'>{errors[name].message}</p>}
          </div>
        ))}

        {/* Remember me and Forgot password */}
        <div className='flex items-center justify-between animate-fade-up' style={{ animationDelay: '300ms' }}>
          <div className='flex items-center'>
            <input
              id='remember-me'
              name='remember-me'
              type='checkbox'
              className='h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded
                cursor-pointer transition-all duration-300 hover:scale-110'
            />
            <label htmlFor='remember-me' className='ml-2 block text-sm text-gray-700'>
              Ghi nhớ đăng nhập
            </label>
          </div>
          <a
            href='#'
            className='text-sm font-medium text-orange-600 hover:text-orange-500
              transition-all duration-300 relative after:absolute after:left-0 
              after:bottom-0 after:h-0.5 after:w-0 hover:after:w-full 
              after:bg-orange-500 after:transition-all after:duration-300'
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
            bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 
            bg-size-200 bg-pos-0 hover:bg-pos-100 
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 
            transform hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-200
            transition-all duration-300 animate-fade-up'
          style={{ animationDelay: '400ms' }}
        >
          <span className='relative flex items-center'>
            {isLoading ? (
              <div className='h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin' />
            ) : (
              <>
                <span className='mr-2'>Đăng nhập</span>
                <span className='group-hover:translate-x-1 transition-transform duration-300'>→</span>
              </>
            )}
          </span>
        </button>
      </form>

      {/* Sign up link */}
      <div className='text-center mt-8 animate-fade-up' style={{ animationDelay: '700ms' }}>
        <p className='text-sm text-gray-600'>
          Chưa có tài khoản?{' '}
          <Link
            to='/register'
            className='font-medium text-orange-600 hover:text-orange-500 
              transition-all duration-300 relative after:absolute after:left-0 
              after:bottom-0 after:h-0.5 after:w-0 hover:after:w-full 
              after:bg-orange-500 after:transition-all after:duration-300'
          >
            Đăng ký ngay
          </Link>
        </p>
      </div>
    </div>
  )
}

export default LoginPage
