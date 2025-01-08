import { useState } from 'react'
import {
  ChevronDown,
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  Warehouse,
  Tags,
  Settings,
  Store,
  BarChart3,
  MenuIcon
} from 'lucide-react'

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [activeMenu, setActiveMenu] = useState('dashboard')
  const [expandedMenus, setExpandedMenus] = useState(['products'])

  const menuItems = [
    {
      id: 'dashboard',
      title: 'Tổng quan',
      icon: <LayoutDashboard className='w-5 h-5' />,
      href: '/admin/dashboard'
    },
    {
      id: 'products',
      title: 'Quản lý sản phẩm',
      icon: <Package className='w-5 h-5' />,
      href: '/admin/products',
      subMenus: [
        {
          id: 'all-products',
          title: 'Tất cả sản phẩm',
          href: '/admin/manager-products'
        },
        {
          id: 'add-product',
          title: 'Thêm sản phẩm',
          href: '/admin/manager-products/create-product'
        },
        {
          id: 'categories',
          title: 'Danh mục',
          href: '/admin/products/categories'
        }
      ]
    },
    {
      id: 'orders',
      title: 'Quản lý đơn hàng',
      icon: <ShoppingCart className='w-5 h-5' />,
      href: '/admin/orders',
      subMenus: [
        {
          id: 'all-orders',
          title: 'Tất cả đơn hàng',
          href: '/admin/orders/all'
        },
        { id: 'returns', title: 'Đơn hoàn trả', href: '/admin/orders/returns' }
      ]
    },
    {
      id: 'inventory',
      title: 'Kho hàng',
      icon: <Warehouse className='w-5 h-5' />,
      href: '/admin/inventory'
    },
    {
      id: 'marketing',
      title: 'Marketing',
      icon: <Tags className='w-5 h-5' />,
      href: '/admin/marketing',
      subMenus: [
        {
          id: 'promotions',
          title: 'Khuyến mãi',
          href: '/admin/marketing/promotions'
        },
        {
          id: 'vouchers',
          title: 'Mã giảm giá',
          href: '/admin/marketing/vouchers'
        }
      ]
    },
    {
      id: 'customers',
      title: 'Khách hàng',
      icon: <Users className='w-5 h-5' />,
      href: '/admin/customers'
    },
    {
      id: 'analytics',
      title: 'Phân tích bán hàng',
      icon: <BarChart3 className='w-5 h-5' />,
      href: '/admin/analytics'
    },
    {
      id: 'store-settings',
      title: 'Thiết lập cửa hàng',
      icon: <Store className='w-5 h-5' />,
      href: '/admin/store-settings'
    },
    {
      id: 'settings',
      title: 'Cài đặt',
      icon: <Settings className='w-5 h-5' />,
      href: '/admin/settings'
    }
  ]

  const handleNavigate = (href) => {
    window.location.href = href
  }

  const toggleMenu = (menuId) => {
    if (expandedMenus.includes(menuId)) {
      setExpandedMenus(expandedMenus.filter((id) => id !== menuId))
    } else {
      setExpandedMenus([...expandedMenus, menuId])
    }
  }

  return (
    <div className='flex h-screen'>
      <nav
        className={`
        bg-white 
        flex 
        flex-col 
        ${isCollapsed ? 'w-20' : 'w-64'} 
        transition-all 
        duration-300
      `}
      >
        {/* Header */}
        <div
          className='h-16 flex items-center justify-between px-4 cursor-pointer'
          onClick={() => handleNavigate('/admin/dashboard')}
        >
          {!isCollapsed && (
            <div className='flex items-center'>
              <span className='text-[#ee4d2d] font-bold text-xl'>Shopee Admin</span>
            </div>
          )}
          <button
            onClick={(e) => {
              e.stopPropagation()
              setIsCollapsed(!isCollapsed)
            }}
            className='p-2 hover:bg-gray-100 rounded-lg'
          >
            <MenuIcon className='w-5 h-5 text-gray-500' />
          </button>
        </div>

        {/* Navigation */}
        <div className='flex-1 overflow-y-auto'>
          {menuItems.map((item) => (
            <div key={item.id}>
              <div
                onClick={() => {
                  setActiveMenu(item.id)
                  if (item.subMenus) {
                    toggleMenu(item.id)
                  } else {
                    handleNavigate(item.href)
                  }
                }}
                className={`
                  flex items-center justify-between px-4 py-3 cursor-pointer
                  ${activeMenu === item.id ? 'bg-[#fef6f5] text-[#ee4d2d]' : 'text-gray-700 hover:bg-gray-50'}
                `}
              >
                <div className='flex items-center gap-3'>
                  {item.icon}
                  {!isCollapsed && <span className='font-medium'>{item.title}</span>}
                </div>
                {!isCollapsed && item.subMenus && (
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${expandedMenus.includes(item.id) ? 'rotate-180' : ''}`}
                  />
                )}
              </div>

              {/* SubMenus */}
              {!isCollapsed && item.subMenus && expandedMenus.includes(item.id) && (
                <div className='bg-gray-50'>
                  {item.subMenus.map((subMenu) => (
                    <div
                      key={subMenu.id}
                      onClick={() => handleNavigate(subMenu.href)}
                      className='pl-12 pr-4 py-2 cursor-pointer text-sm text-gray-700 hover:text-[#ee4d2d]'
                    >
                      {subMenu.title}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* User Profile */}
        <div className=' p-4 cursor-pointer' onClick={() => handleNavigate('/admin/profile')}>
          <div className='flex items-center gap-3'>
            <div className='w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center'>
              <span className='text-sm font-medium text-gray-600'>AD</span>
            </div>
            {!isCollapsed && (
              <div>
                <p className='text-sm font-medium text-gray-800'>Admin Shop</p>
                <p className='text-xs text-gray-500'>admin@shop.com</p>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Sidebar
