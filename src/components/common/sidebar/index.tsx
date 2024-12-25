import { Link } from 'react-router-dom';

import { Home, Users, Settings, HelpCircle, Menu, Search, FileText, Layers, Layout, Salad } from 'lucide-react'
import { useState } from 'react';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false)

  const navItems = [
    {
      title: 'Dashboard',
      icon: <Home className='w-5 h-5' />,
      notifications: 3
    },
    { title: 'Quản lý hóa đơn', icon: <FileText className='w-5 h-5' /> },
    { title: 'Quản lý sản phẩm', icon: <Salad className='w-5 h-5' /> ,href:'/admin/manager-products'},
    {
      title: 'Quản lý danh mục sản phẩm',
      icon: <Layers className='w-5 h-5' />
    },
    { title: 'Quản lý bàn', icon: <Layout className='w-5 h-5' /> },
    { title: 'Users', icon: <Users className='w-5 h-5' /> },
    { title: 'Settings', icon: <Settings className='w-5 h-5' /> },
    { title: 'Help', icon: <HelpCircle className='w-5 h-5' /> }
  ]

  return (
    <nav
      className={`
      h-screen 
    bg-gradient-to-b from-gray-900 to-black
      text-gray-300
      transition-all 
      duration-300 
      shadow-2xl
      ${isCollapsed ? 'w-20' : 'w-72'}
      flex 
      flex-col
      
      left-0
      top-0
    `}
    >
      <div className='flex items-center justify-between p-6 border-b border-gray-800/50'>
        {!isCollapsed && (
          <div className='flex items-center gap-2'>
            <div className='w-8 h-8 bg-white rounded-lg flex items-center justify-center'>
              <span className='text-black font-bold text-xl'>A</span>
            </div>
            <h1 className='text-xl font-bold text-white'>Admin</h1>
          </div>
        )}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className='p-2 rounded-xl hover:bg-gray-800/50 transition-all duration-200'
        >
          <Menu className='w-5 h-5' />
        </button>
      </div>

      {!isCollapsed && (
        <div className='px-4 py-4'>
          <div className='flex items-center gap-2 px-4 py-2.5 bg-gray-800/30 rounded-xl'>
            <Search className='w-4 h-4 text-gray-400' />
            <input
              type='text'
              placeholder='Search...'
              className='bg-transparent border-none outline-none text-sm w-full text-gray-300 placeholder-gray-500'
            />
          </div>
        </div>
      )}

<div className='flex-1 py-4'>
        {navItems.map((item, index) => (
          <Link key={index} to={item.href}>
            <div className='group relative flex items-center px-4 py-3 cursor-pointer hover:bg-gray-800/30 transition-all duration-200'>
              <div className={`flex items-center gap-4 px-4 ${!isCollapsed ? 'w-full' : 'justify-center'}`}>
                <div className='relative'>
                  {item.icon}
                  {item.notifications && (
                    <span className='absolute -top-1 -right-1 w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center text-xs'>
                      {item.notifications}
                    </span>
                  )}
                </div>
                {!isCollapsed && <span className='font-medium'>{item.title}</span>}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Footer */}
      <div className='border-t border-gray-800/50 p-4'>
        <div className='flex items-center gap-4 px-4 py-3 cursor-pointer hover:bg-gray-800/30 rounded-xl transition-all duration-200'>
          <div className='w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center'>
            <span className='text-sm font-medium text-white'>JD</span>
          </div>
          {!isCollapsed && (
            <div className='flex-1'>
              <p className='text-sm font-medium text-white'>John Doe</p>
              <p className='text-xs text-gray-500'>Admin</p>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Sidebar
