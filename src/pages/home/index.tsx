import { showNotification } from '@/services/NotificationService'
import Banner from './banner'

const HomePage = () => {
  return (
    <>
      <Banner />
      <button
        onClick={() =>
          showNotification({
            title: 'Đã lưu thành công',
            message: 'Tất cả thay đổi của bạn đã được lưu vào hệ thống',
            type: 'success'
          })
        }
        className='bg-emerald-500 hover:bg-emerald-600'
      >
        NÚt
      </button>
    </>
  )
}

export default HomePage
