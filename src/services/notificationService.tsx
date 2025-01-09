import { toast, ToastOptions } from 'react-toastify'
import { CheckCircle2, XCircle, AlertCircle, InfoIcon, XIcon } from 'lucide-react'

interface NotificationProps {
  title?: string
  message: string
  type?: 'success' | 'error' | 'info' | 'warning'
  duration?: number
}

const CloseButton = ({ closeToast }: { closeToast?: () => void }) => (
  <button
    onClick={closeToast}
    className='absolute right-2 top-2 p-1 rounded-full hover:bg-black/10 transition-colors focus:outline-none'
    aria-label='Close'
  >
    <XIcon size={16} className='text-gray-500 hover:text-gray-700' />
  </button>
)

const NotificationContent: React.FC<{ title?: string; message: string; type: string }> = ({ title, message, type }) => {
  const Icon = () => {
    switch (type) {
      case 'success':
        return <CheckCircle2 className='text-emerald-500 shrink-0' size={30} />
      case 'error':
        return <XCircle className='text-rose-500 shrink-0' size={30} />
      case 'warning':
        return <AlertCircle className='text-amber-500 shrink-0' size={30} />
      default:
        return <InfoIcon className='text-sky-500 shrink-0' size={30} />
    }
  }

  return (
    <div className='flex items-start gap-3 min-w-[300px] pr-6'>
      <div className='mt-1'>
        <Icon />
      </div>
      <div className='flex-1'>
        {title && <h4 className='font-semibold text-gray-900 text-sm mb-1'>{title}</h4>}
        <p className='text-gray-600 text-sm leading-relaxed'>{message}</p>
      </div>
    </div>
  )
}

const getBackgroundColor = (type: string) => {
  switch (type) {
    case 'success':
      return 'bg-emerald-50'
    case 'error':
      return 'bg-rose-50'
    case 'warning':
      return 'bg-amber-50'
    default:
      return 'bg-sky-50'
  }
}

// Tùy chỉnh gradient cho progress bar
const getProgressBarStyles = (type: string) => {
  const baseStyle = 'Toastify__progress-bar Toastify__progress-bar--animated Toastify__progress-bar--controlled'

  const gradients = {
    success: 'from-emerald-400 via-emerald-500 to-teal-500',
    error: 'from-rose-400 via-rose-500 to-red-500',
    warning: 'from-amber-400 via-amber-500 to-orange-500',
    info: 'from-sky-400 via-sky-500 to-blue-500'
  }

  return `${baseStyle} !h-1 !opacity-100 !bottom-0 bg-gradient-to-r ${gradients[type as keyof typeof gradients] || gradients.info}`
}

const defaultOptions: ToastOptions = {
  position: 'top-right',
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  closeButton: CloseButton,
  className: '!rounded-lg !p-4 !min-h-0 shadow-lg shadow-black/10 transition-all',
  bodyClassName: '!p-0 !m-0',
  progressClassName: 'transition-all',
  style: { background: '' }
}

export const showNotification = ({ title, message, type = 'info', duration = 3000 }: NotificationProps) => {
  const options = {
    ...defaultOptions,
    autoClose: duration,
    className: `${defaultOptions.className} ${getBackgroundColor(type)}`,
    progressClassName: getProgressBarStyles(type)
  }

  toast(<NotificationContent title={title} message={message} type={type} />, options)
}
