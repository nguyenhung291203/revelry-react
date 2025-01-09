import { useState, useEffect } from 'react'
import {
  ShoppingBag,
  Menu,
  X,
  ChefHat,
  Plus,
  Minus,
  Trash2,
  LogIn,
  LogOut,
  UserCircle,
  Heart,
  Clock,
  Settings,
  Gift
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const [hoveredItem, setHoveredItem] = useState(null)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { title: 'Home', link: '/' },
    { title: 'Menu', link: '/menu' },
    { title: 'About', link: '/about' },
    { title: 'Contact', link: '/contact' }
  ]

  const userMenuItems = [
    { icon: UserCircle, title: 'Profile', link: '/profile' },
    { icon: Heart, title: 'Favorites', link: '/favorites' },
    { icon: Clock, title: 'Order History', link: '/orders' },
    { icon: Settings, title: 'Settings', link: '/settings' },
    { icon: LogOut, title: 'Logout', link: '/logout' }
  ]

  const cartItems = [
    {
      id: 1,
      title: 'Double Burger',
      price: 28.0,
      quantity: 1,
      image: '/api/placeholder/80/80',
      description: 'With extra cheese and special sauce'
    },
    {
      id: 2,
      title: 'Cheese Burger',
      price: 20.0,
      quantity: 1,
      image: '/api/placeholder/80/80',
      description: 'Classic cheese with fresh vegetables'
    }
  ]

  const slideInVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        type: 'spring',
        stiffness: 100,
        damping: 10
      }
    })
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className={`
        fixed top-0 left-0 right-0 z-50 
        transition-all duration-700 ease-in-out
        ${isScrolled ? 'py-3 bg-white/95 backdrop-blur-lg shadow-lg' : 'py-6 bg-transparent'}
      `}
    >
      <div className='container mx-auto px-4 md:px-6 lg:px-8'>
        <div className='flex items-center justify-between'>
          {/* Logo - Same as before */}
          <motion.a
            href='/'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='relative z-10 flex items-center space-x-3'
          >
            <motion.div
              animate={{
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className={`p-2 rounded-xl transition-colors duration-300 ${
                isScrolled ? 'bg-orange-100' : 'bg-white/20 backdrop-blur-sm'
              }`}
            >
              <ChefHat
                className={`w-8 h-8 transition-colors duration-300 ${isScrolled ? 'text-orange-500' : 'text-gray-700'}`}
              />
            </motion.div>
            <span
              className={`text-xl font-bold transition-colors duration-300 ${
                isScrolled ? 'text-gray-800' : 'text-gray-700'
              }`}
            >
              Gourmet
            </span>
          </motion.a>

          {/* Desktop Navigation - Same as before */}
          <nav className='hidden lg:block'>
            <ul className='flex items-center space-x-12'>
              {menuItems.map((item, index) => (
                <motion.li
                  key={index}
                  custom={index}
                  variants={slideInVariants}
                  initial='hidden'
                  animate='visible'
                  onHoverStart={() => setHoveredItem(index)}
                  onHoverEnd={() => setHoveredItem(null)}
                >
                  <a
                    href={item.link}
                    className={`
                      text-lg font-medium 
                      transition-all duration-300 
                      relative px-3 py-2 rounded-lg
                      ${isScrolled ? 'text-gray-800 hover:text-orange-500' : 'text-gray-700 hover:text-orange-400'}
                    `}
                  >
                    {item.title}
                    {hoveredItem === index && (
                      <motion.div
                        layoutId='underline'
                        className='absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500'
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        transition={{
                          type: 'spring',
                          stiffness: 300,
                          damping: 30
                        }}
                      />
                    )}
                  </a>
                </motion.li>
              ))}
            </ul>
          </nav>

          {/* Right Side Icons */}
          <div className='flex items-center space-x-6 md:space-x-8'>
            {/* User Menu */}
            <div className='relative hidden lg:block'>
              {isLoggedIn ? (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className={`
                    flex items-center space-x-2 p-2 rounded-full
                    transition-colors duration-300
                    ${
                      isScrolled
                        ? 'text-gray-800 hover:text-orange-500 hover:bg-orange-50'
                        : 'text-gray-700 hover:text-orange-400 hover:bg-white/10'
                    }
                  `}
                >
                  <UserCircle className='w-6 h-6' />
                </motion.button>
              ) : (
                <Link to='/login'>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`
                    flex items-center space-x-2 p-2 rounded-full
                    transition-colors duration-300
                    ${
                      isScrolled
                        ? 'text-gray-800 hover:text-orange-500 hover:bg-orange-50'
                        : 'text-gray-700 hover:text-orange-400 hover:bg-white/10'
                    }
                  `}
                  >
                    <LogIn className='w-6 h-6' />
                    <span className='font-medium'>Login</span>
                  </motion.button>
                </Link>
              )}

              {/* User Dropdown Menu */}
              <AnimatePresence>
                {isUserMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 10 }}
                    transition={{ type: 'spring', duration: 0.3 }}
                    className='absolute right-0 mt-4 w-64 bg-white rounded-2xl shadow-xl p-3'
                  >
                    {userMenuItems.map((item, index) => (
                      <motion.a
                        key={index}
                        href={item.link}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className='flex items-center space-x-3 px-4 py-3 rounded-xl hover:bg-orange-50 transition-colors duration-300'
                      >
                        <item.icon className='w-5 h-5 text-gray-600' />
                        <span className='text-gray-700'>{item.title}</span>
                      </motion.a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Cart Icon */}
            <div className='relative'>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsCartOpen(!isCartOpen)}
                className={`
                  flex items-center space-x-2 rounded-full p-2
                  transition-colors duration-300
                  ${
                    isScrolled
                      ? 'text-gray-800 hover:text-orange-500 hover:bg-orange-50'
                      : 'text-gray-700 hover:text-orange-400 hover:bg-white/10'
                  }
                `}
              >
                <ShoppingBag className='w-6 h-6' />
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className='absolute -top-2 -right-2 bg-orange-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center'
                >
                  2
                </motion.span>
              </motion.button>

              {/* Enhanced Cart Dropdown */}
              <AnimatePresence>
                {isCartOpen && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 10 }}
                    transition={{ type: 'spring', duration: 0.3 }}
                    className='absolute right-0 mt-6 w-96 bg-white rounded-2xl shadow-2xl p-6'
                  >
                    <div className='flex justify-between items-center mb-6'>
                      <div>
                        <h3 className='text-xl font-semibold text-gray-800'>Your Cart</h3>
                        <p className='text-sm text-gray-500 mt-1'>2 items in cart</p>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.1, rotate: 90 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setIsCartOpen(false)}
                        className='text-gray-400 hover:text-gray-600 p-2 rounded-full hover:bg-gray-100'
                      >
                        <X className='w-5 h-5' />
                      </motion.button>
                    </div>

                    <div className='space-y-4 max-h-[400px] overflow-y-auto pr-2 -mr-2'>
                      {cartItems.map((item, index) => (
                        <motion.div
                          key={item.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className='flex gap-4 p-4 hover:bg-gray-50 rounded-xl transition-all duration-300 group'
                        >
                          <motion.div whileHover={{ scale: 1.05 }} className='relative'>
                            <img src={item.image} alt={item.title} className='w-20 h-20 rounded-xl object-cover' />
                            <motion.div
                              initial={{ opacity: 0 }}
                              whileHover={{ opacity: 1 }}
                              className='absolute inset-0 bg-black/40 rounded-xl flex items-center justify-center'
                            >
                              <Gift className='w-6 h-6 text-white' />
                            </motion.div>
                          </motion.div>
                          <div className='flex-1'>
                            <div className='flex justify-between items-start'>
                              <div>
                                <h6 className='font-medium text-gray-800'>{item.title}</h6>
                                <p className='text-sm text-gray-500 mt-1'>{item.description}</p>
                              </div>
                              <motion.button
                                whileHover={{ scale: 1.2, color: '#ef4444' }}
                                whileTap={{ scale: 0.9 }}
                                className='text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                              >
                                <Trash2 className='w-4 h-4' />
                              </motion.button>
                            </div>

                            <div className='flex items-center justify-between mt-3'>
                              <div className='flex items-center gap-2 bg-gray-100 rounded-lg p-1'>
                                <motion.button
                                  whileHover={{ scale: 1.2 }}
                                  whileTap={{ scale: 0.9 }}
                                  className='p-1 hover:text-orange-500'
                                >
                                  <Minus className='w-4 h-4' />
                                </motion.button>
                                <span className='w-8 text-center font-medium'>{item.quantity}</span>
                                <motion.button
                                  whileHover={{ scale: 1.2 }}
                                  whileTap={{ scale: 0.9 }}
                                  className='p-1 hover:text-orange-500'
                                >
                                  <Plus className='w-4 h-4' />
                                </motion.button>
                              </div>
                              <span className='text-lg text-orange-500 font-semibold'>${item.price.toFixed(2)}</span>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    <motion.div layout className='border-t border-gray-100 mt-6 pt-4'>
                      {/* Cart Summary */}
                      <div className='space-y-3 mb-6'>
                        <div className='flex justify-between text-gray-600'>
                          <span>Subtotal</span>
                          <span>$48.00</span>
                        </div>
                        <div className='flex justify-between text-gray-600'>
                          <span>Delivery Fee</span>
                          <span>$2.00</span>
                        </div>
                        <div className='flex justify-between text-gray-600'>
                          <span>Discount</span>
                          <span className='text-green-500'>-$5.00</span>
                        </div>
                        <div className='flex justify-between text-lg font-semibold'>
                          <span>Total</span>
                          <span className='text-orange-500'>$45.00</span>
                        </div>
                      </div>

                      {/* Promo Code Input */}
                      <div className='mb-6'>
                        <div className='flex gap-2'>
                          <input
                            type='text'
                            placeholder='Enter promo code'
                            className='flex-1 px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:border-orange-500 transition-colors duration-300'
                          />
                          <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className='px-4 py-2 bg-gray-100 text-gray-600 rounded-xl hover:bg-gray-200 transition-colors duration-300'
                          >
                            Apply
                          </motion.button>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className='space-y-3'>
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className='w-full py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-medium hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-orange-200'
                        >
                          Checkout Now • $45.00
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setIsCartOpen(false)}
                          className='w-full py-3 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200 transition-all duration-300'
                        >
                          Continue Shopping
                        </motion.button>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors duration-300
                ${
                  isScrolled
                    ? 'text-gray-800 hover:text-orange-500 hover:bg-orange-50'
                    : 'text-gray-700 hover:text-orange-400 hover:bg-white/10'
                }
              `}
            >
              {isMenuOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: 1,
                height: 'auto',
                transition: {
                  height: { type: 'spring', stiffness: 100, damping: 20 },
                  opacity: { duration: 0.2 }
                }
              }}
              exit={{
                opacity: 0,
                height: 0,
                transition: {
                  height: { type: 'spring', stiffness: 100, damping: 20 },
                  opacity: { duration: 0.2 }
                }
              }}
              className='lg:hidden mt-4 overflow-hidden'
            >
              <div className='py-4 px-3 bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl'>
                {/* Mobile Menu Items */}
                <ul className='space-y-2'>
                  {menuItems.map((item, index) => (
                    <motion.li key={index} custom={index} variants={slideInVariants} initial='hidden' animate='visible'>
                      <a
                        href={item.link}
                        className={`
                          block text-lg font-medium px-4 py-3 rounded-xl
                          transition-all duration-300
                          ${
                            isScrolled
                              ? 'text-gray-800 hover:text-orange-500 hover:bg-orange-50'
                              : 'text-gray-800 hover:text-orange-400 hover:bg-white/20'
                          }
                        `}
                      >
                        {item.title}
                      </a>
                    </motion.li>
                  ))}
                </ul>

                {/* Mobile User Menu */}
                <div className='mt-4 pt-4 border-t border-gray-100'>
                  {isLoggedIn ? (
                    <>
                      {userMenuItems.map((item, index) => (
                        <motion.a
                          key={index}
                          href={item.link}
                          custom={index + menuItems.length}
                          variants={slideInVariants}
                          initial='hidden'
                          animate='visible'
                          className='flex items-center space-x-3 px-4 py-3 rounded-xl hover:bg-orange-50 transition-colors duration-300'
                        >
                          <item.icon className='w-5 h-5 text-gray-600' />
                          <span className='text-gray-700'>{item.title}</span>
                        </motion.a>
                      ))}
                    </>
                  ) : (
                    <Link to='/login'>
                      <motion.button
                        variants={slideInVariants}
                        initial='hidden'
                        animate='visible'
                        className='w-full flex items-center justify-center space-x-2 px-4 py-3 bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition-colors duration-300'
                      >
                        <LogIn className='w-5 h-5' />
                        <span>Login</span>
                      </motion.button>
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}

export default Header
