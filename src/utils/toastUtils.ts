// toastUtils.ts
import { NotificationColors } from '@/types/notification.types'
import { FaCheckCircle, FaTimesCircle, FaInfoCircle, FaExclamationTriangle } from 'react-icons/fa'

export const NOTIFICATION_ICONS = {
  success: FaCheckCircle,
  error: FaTimesCircle,
  info: FaInfoCircle,
  warning: FaExclamationTriangle
} as const

export const NOTIFICATION_COLORS: NotificationColors = {
  success: {
    background: 'bg-gradient-to-r from-emerald-50 to-green-50',
    border: 'border-emerald-500',
    text: 'text-emerald-900',
    iconBackground: 'bg-gradient-to-br from-emerald-200 to-green-200',
    focusRing: 'focus:ring-emerald-500'
  },
  error: {
    background: 'bg-gradient-to-r from-rose-50 to-red-50',
    border: 'border-rose-500',
    text: 'text-rose-900',
    iconBackground: 'bg-gradient-to-br from-rose-200 to-red-200',
    focusRing: 'focus:ring-rose-500'
  },
  info: {
    background: 'bg-gradient-to-r from-blue-50 to-indigo-50',
    border: 'border-blue-500',
    text: 'text-blue-900',
    iconBackground: 'bg-gradient-to-br from-blue-200 to-indigo-200',
    focusRing: 'focus:ring-blue-500'
  },
  warning: {
    background: 'bg-gradient-to-r from-amber-50 to-orange-50',
    border: 'border-amber-500',
    text: 'text-amber-900',
    iconBackground: 'bg-gradient-to-br from-amber-200 to-orange-200',
    focusRing: 'focus:ring-amber-500'
  }
} as const
