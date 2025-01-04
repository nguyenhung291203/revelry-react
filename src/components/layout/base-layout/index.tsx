import Header from '../header'
export default function BaseLayout({ children }) {
  return (
    <div className='bg-white'>
      <Header />
      {children}
    </div>
  )
}
