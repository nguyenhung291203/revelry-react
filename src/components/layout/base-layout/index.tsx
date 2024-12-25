import { Sidebar } from '../../common'

export default function BaseLayout({ children }) {
  return (
    <div className='flex'>
      <Sidebar />
      <div
        className='
                    flex-1 
                    p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12
                    h-screen 
                    overflow-y-auto
                    bg-gradient-to-b from-gray-800 to-black    
                    shadow-xl
                '
      >
        {children}
      </div>
    </div>
  )
}
