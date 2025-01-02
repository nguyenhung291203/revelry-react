import { Sidebar } from '../../common'

export default function BaseLayout({ children }) {
  return (
    <div className='flex'>
      <Sidebar />
      <div
        className='
                    flex-1 
                    p-2 sm:p-6 md:p-8 lg:p-10 xl:p-8
                    h-screen 
                    overflow-y-auto
                    bg-gray-100
                    shadow-xl
                '
      >
        {children}
      </div>
    </div>
  )
}
