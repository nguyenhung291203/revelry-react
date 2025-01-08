import Header from '../header'
export default function BaseLayout({ children }) {
  return (
    <div className='bg-gradient-to-br from-orange-50 via-white to-red-50'>
      <Header />
      {children}
    </div>
  )
}
