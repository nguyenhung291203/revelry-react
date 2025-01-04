import { useState, useEffect } from 'react'
import { ShoppingBag, User, Menu, X, ChefHat, Plus, Minus, Trash2, LogIn } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [hoveredItem, setHoveredItem] = useState(null)

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

  const cartItems = [
    {
      id: 1,
      title: 'Double Burger',
      price: 28.0,
      quantity: 1,
      image: '/api/placeholder/80/80'
    },
    {
      id: 2,
      title: 'Cheese Burger',
      price: 20.0,
      quantity: 1,
      image: '/api/placeholder/80/80'
    }
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
      className={`
        fixed top-0 left-0 right-0 z-50 
        transition-all duration-500 
        ${isScrolled ? 'py-4 bg-white/90 backdrop-blur-md shadow-lg' : 'py-6 bg-transparent'}
      `}
    >
      <div className='container mx-auto px-4'>
        <div className='flex items-center justify-between'>
          {/* Logo */}
          <motion.a
            href='/'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='relative z-10 flex items-center space-x-2'
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className={`p-2 rounded-xl ${isScrolled ? 'bg-orange-100' : 'bg-white/10'}`}
            >
              <ChefHat className={`w-8 h-8 ${isScrolled ? 'text-orange-500' : 'text-gray-600'}`} />
            </motion.div>
            <span className={`text-xl font-bold ${isScrolled ? 'text-gray-800' : 'text-gray-600'}`}>Gourmet</span>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className='hidden lg:block'>
            <ul className='flex items-center space-x-12'>
              {menuItems.map((item, index) => (
                <motion.li
                  key={index}
                  onHoverStart={() => setHoveredItem(index)}
                  onHoverEnd={() => setHoveredItem(null)}
                >
                  <a
                    href={item.link}
                    className={`
                      text-lg font-medium 
                      transition-all duration-300 
                      relative px-2 py-1
                      ${isScrolled ? 'text-gray-800 hover:text-orange-500' : 'text-gray-600 hover:text-orange-400'}
                    `}
                  >
                    {item.title}
                    {hoveredItem === index && (
                      <motion.div
                        layoutId='underline'
                        className='absolute -bottom-1 left-0 right-0 h-0.5 bg-orange-500'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      />
                    )}
                  </a>
                </motion.li>
              ))}
            </ul>
          </nav>

          {/* Right Side Icons */}
          <div className='flex items-center space-x-8'>
            {/* User Icon */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`
                hidden lg:flex items-center space-x-2 
                transition-colors duration-300
                ${isScrolled ? 'text-gray-800 hover:text-orange-500' : 'text-gray-600 hover:text-orange-400'}
              `}
            >
              <LogIn className='w-6 h-6' />
            </motion.button>

            {/* Cart Icon */}
            <div className='relative'>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsCartOpen(!isCartOpen)}
                className={`
                  flex items-center space-x-2
                  transition-colors duration-300
                  ${isScrolled ? 'text-gray-800 hover:text-orange-500' : 'text-gray-600 hover:text-orange-400'}
                `}
              >
                <ShoppingBag className='w-6 h-6' />
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className='absolute -top-2 -right-2 bg-orange-500 text-gray-600 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center'
                >
                  2
                </motion.span>
              </motion.button>

              {/* Cart Dropdown */}
              <AnimatePresence>
                {isCartOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className='absolute right-0 mt-6 w-96 bg-white rounded-2xl shadow-2xl p-6'
                  >
                    <div className='flex justify-between items-center mb-6'>
                      <h3 className='text-xl font-semibold text-gray-800'>Your Cart</h3>
                      <motion.button
                        whileHover={{ scale: 1.1, rotate: 90 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setIsCartOpen(false)}
                        className='text-gray-400 hover:text-gray-600'
                      >
                        <X className='w-5 h-5' />
                      </motion.button>
                    </div>

                    {cartItems.map((item) => (
                      <motion.div
                        key={item.id}
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className='flex items-center gap-4 mb-4 p-3 hover:bg-gray-50 rounded-xl transition-all duration-300'
                      >
                        <img src={item.image} alt={item.title} className='w-20 h-20 rounded-xl object-cover' />
                        <div className='flex-1'>
                          <h6 className='font-medium text-gray-800'>{item.title}</h6>
                          <span className='text-orange-500 font-semibold'>${item.price.toFixed(2)}</span>

                          <div className='flex items-center gap-4 mt-2'>
                            <div className='flex items-center gap-2 bg-gray-100 rounded-lg p-1'>
                              <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className='p-1 hover:text-orange-500'
                              >
                                <Minus className='w-4 h-4' />
                              </motion.button>
                              <span className='w-8 text-center font-medium'>{item.quantity}</span>
                              <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className='p-1 hover:text-orange-500'
                              >
                                <Plus className='w-4 h-4' />
                              </motion.button>
                            </div>
                            <motion.button
                              whileHover={{ scale: 1.1, color: '#ef4444' }}
                              whileTap={{ scale: 0.9 }}
                              className='text-gray-400 hover:text-red-500'
                            >
                              <Trash2 className='w-4 h-4' />
                            </motion.button>
                          </div>
                        </div>
                      </motion.div>
                    ))}

                    <motion.div layout className='border-t border-gray-100 mt-4 pt-4'>
                      <div className='flex justify-between mb-6'>
                        <span className='text-lg font-medium'>Total:</span>
                        <span className='text-lg text-orange-500 font-semibold'>$48.00</span>
                      </div>
                      <motion.div className='flex gap-4' whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <a
                          href='/cart'
                          className='w-full py-3 text-center bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-medium hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl'
                        >
                          Checkout Now
                        </a>
                      </motion.div>
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
                ${isScrolled ? 'text-gray-800 hover:text-orange-500' : 'text-gray-600 hover:text-orange-400'}
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
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className='lg:hidden mt-4 overflow-hidden'
            >
              <ul className='py-4 space-y-4 bg-white'>
                {menuItems.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <a
                      href={item.link}
                      className={`
                        block text-lg font-medium px-4 py-2 rounded-lg
                        transition-colors duration-300
                        ${
                          isScrolled
                            ? 'text-gray-800 hover:text-orange-500 hover:bg-gray-50'
                            : 'text-gray-800 hover:text-orange-400 hover:bg-white/10'
                        }
                      `}
                    >
                      {item.title}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}

export default Header
