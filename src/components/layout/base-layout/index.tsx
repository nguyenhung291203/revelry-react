import { Outlet } from 'react-router'
import Header from '../header'
const BaseLayout = () => {
  return (
    <div className='bg-gradient-to-br from-orange-50 via-white to-red-50'>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  )
}
export default BaseLayout
