import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ChevronRight,
  Star,
  Clock,
  MapPin,
  UtensilsCrossed,
  ChefHat,
  Coffee,
  Wine,
  Soup,
  Award,
  Phone
} from 'lucide-react'

const Banner = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const getIconSize = () => {
    if (windowWidth < 640) return 'w-6 h-6'
    if (windowWidth < 1024) return 'w-8 h-8'
    return 'w-10 h-10'
  }

  const getCircleSize = () => {
    if (windowWidth < 640) return { width: 280, height: 280 }
    if (windowWidth < 1024) return { width: 400, height: 400 }
    return { width: 500, height: 500 }
  }

  const floatingIcons = [
    {
      icon: <ChefHat className={getIconSize()} />,
      color: 'bg-orange-50',
      label: 'Master Chefs',
      gradient: 'from-orange-400/20 to-orange-600/20'
    },
    {
      icon: <Wine className={getIconSize()} />,
      color: 'bg-red-50',
      label: 'Fine Wines',
      gradient: 'from-red-400/20 to-red-600/20'
    },
    {
      icon: <Coffee className={getIconSize()} />,
      color: 'bg-yellow-50',
      label: 'Fresh Brews',
      gradient: 'from-yellow-400/20 to-yellow-600/20'
    },
    {
      icon: <Soup className={getIconSize()} />,
      color: 'bg-orange-50',
      label: 'Gourmet Soups',
      gradient: 'from-orange-400/20 to-orange-600/20'
    },
    {
      icon: <Award className={getIconSize()} />,
      color: 'bg-red-50',
      label: 'Award Winning',
      gradient: 'from-red-400/20 to-red-600/20'
    },
    {
      icon: <UtensilsCrossed className={getIconSize()} />,
      color: 'bg-yellow-50',
      label: 'Premium Service',
      gradient: 'from-yellow-400/20 to-yellow-600/20'
    }
  ]

  const circleSize = getCircleSize()
  const orbitRadius = windowWidth < 640 ? 140 : windowWidth < 1024 ? 200 : 250

  return (
    <div className='relative min-h-screen overflow-hidden '>
      {/* Dynamic background effect - only on desktop */}
      {windowWidth >= 1024 && (
        <div
          className='absolute inset-0 opacity-50 transition-opacity duration-300'
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(251, 146, 60, 0.15), transparent 25%)`
          }}
        />
      )}

      {/* Decorative Elements */}
      <div className='absolute inset-0'>
        {[...Array(windowWidth < 640 ? 10 : 30)].map((_, i) => (
          <motion.div
            key={i}
            className='absolute w-1 h-1 md:w-2 md:h-2 bg-gradient-to-r from-orange-200 to-red-200 rounded-full'
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 0),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 0),
              scale: 0
            }}
            animate={{
              y: [0, -20, 0],
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20 relative'>
        <div className='flex flex-col lg:flex-row items-center gap-8 lg:gap-16'>
          {/* Left Content Section */}
          <div className='flex-1 z-10 text-center lg:text-left'>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              {/* Rating Badge */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className='inline-flex items-center bg-white/80 backdrop-blur-xl px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 rounded-2xl shadow-xl mb-6 sm:mb-8 border border-orange-100'
              >
                <div className='flex space-x-1'>
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 2,
                        delay: i * 0.1,
                        repeat: Infinity,
                        repeatType: 'reverse'
                      }}
                    >
                      <Star className='w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-yellow-400' fill='currentColor' />
                    </motion.div>
                  ))}
                </div>
                <span className='text-sm sm:text-base lg:text-lg text-gray-800 font-semibold ml-2 sm:ml-3 lg:ml-4'>
                  4.9 Exceptional Rating
                </span>
              </motion.div>

              {/* Title */}
              <motion.h1
                className='text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight'
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Taste the
                <motion.span
                  className='block bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 text-transparent bg-clip-text'
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'linear'
                  }}
                >
                  Extraordinary
                </motion.span>
              </motion.h1>

              {/* Description */}
              <motion.p
                className='text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-600 mb-8 sm:mb-10 lg:mb-12 max-w-xl lg:max-w-2xl mx-auto lg:mx-0 leading-relaxed'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Embark on a culinary journey where each dish tells a story. Our internationally acclaimed chefs craft
                extraordinary experiences using the world's finest ingredients.
              </motion.p>

              {/* Feature Badges */}
              <div className='flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 lg:gap-6 mb-8 sm:mb-10 lg:mb-12'>
                {['Open 24/7', 'Prime Location', 'Quick Contact'].map((feature, index) => (
                  <motion.div
                    key={feature}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className='flex items-center bg-gradient-to-br from-white/80 to-orange-50/80 backdrop-blur-xl 
                             px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 rounded-xl lg:rounded-2xl shadow-lg lg:shadow-xl 
                             border border-orange-100'
                  >
                    {index === 0 ? (
                      <Clock className='w-5 h-5 sm:w-6 sm:h-6 text-orange-500 mr-2 sm:mr-3' />
                    ) : index === 1 ? (
                      <MapPin className='w-5 h-5 sm:w-6 sm:h-6 text-orange-500 mr-2 sm:mr-3' />
                    ) : (
                      <Phone className='w-5 h-5 sm:w-6 sm:h-6 text-orange-500 mr-2 sm:mr-3' />
                    )}
                    <span className='text-sm sm:text-base lg:text-lg font-medium'>{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className='flex flex-col sm:flex-row justify-center lg:justify-start gap-4 sm:gap-6 lg:gap-8'>
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: '0 20px 40px -15px rgba(249, 115, 22, 0.4)'
                  }}
                  whileTap={{ scale: 0.95 }}
                  className='px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 bg-gradient-to-r from-orange-500 via-red-500 
                           to-orange-500 text-white rounded-xl lg:rounded-2xl font-semibold text-base sm:text-lg 
                           shadow-xl lg:shadow-2xl flex items-center justify-center'
                >
                  <span>Reserve Your Table</span>
                  <motion.div
                    className='ml-2 sm:ml-3'
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: 'easeInOut'
                    }}
                  >
                    <ChevronRight className='w-5 h-5 sm:w-6 sm:h-6' />
                  </motion.div>
                </motion.button>
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: '0 20px 40px -15px rgba(0, 0, 0, 0.1)'
                  }}
                  whileTap={{ scale: 0.95 }}
                  className='px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 bg-white/80 backdrop-blur-xl text-orange-500 
                           rounded-xl lg:rounded-2xl font-semibold text-base sm:text-lg shadow-lg lg:shadow-xl 
                           border border-orange-100 hover:bg-white transition-all duration-300'
                >
                  Explore Menu
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Right Icon Section */}
          <div className='flex-1 z-10 mt-8 lg:mt-0'>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className='relative'
            >
              {/* Main Circle */}
              <motion.div
                animate={{
                  y: [-10, 10, -10],
                  rotate: [0, 2, -2, 0]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 6,
                  ease: 'easeInOut'
                }}
                className='relative z-20 flex justify-center items-center mx-auto'
                style={{
                  width: circleSize.width,
                  height: circleSize.height
                }}
              >
                <div
                  className='absolute inset-0 bg-gradient-to-br from-orange-100 via-white to-orange-200 rounded-full 
                              shadow-[0_0_50px_rgba(251,146,60,0.2)]'
                />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 40,
                    repeat: Infinity,
                    ease: 'linear'
                  }}
                  className='w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 text-orange-500'
                >
                  <ChefHat className='w-full h-full' />
                </motion.div>
              </motion.div>

              {/* Floating Icons */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
                className='absolute top-0 left-0 w-full h-full'
              >
                {floatingIcons.map((item, index) => (
                  <motion.div
                    key={index}
                    className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
                    style={{
                      transform: `rotate(${index * 60}deg) translateY(-${orbitRadius}px) rotate(-${index * 60}deg)`
                    }}
                    onHoverStart={() => setHoveredIcon(index)}
                    onHoverEnd={() => setHoveredIcon(null)}
                  >
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className={`relative w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 
                              bg-gradient-to-br ${item.gradient} backdrop-blur-xl 
                              rounded-2xl lg:rounded-3xl shadow-xl lg:shadow-2xl 
                              p-3 sm:p-4 lg:p-5 flex items-center justify-center 
                              text-orange-500 border border-orange-100 
                              transition-all duration-300 ease-in-out`}
                    >
                      {item.icon}
                      <AnimatePresence>
                        {hoveredIcon === index && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className='absolute -bottom-8 sm:-bottom-10 whitespace-nowrap 
                                   bg-white/90 backdrop-blur-xl px-3 sm:px-4 py-1 sm:py-2 
                                   rounded-lg lg:rounded-xl text-xs sm:text-sm lg:text-base 
                                   font-medium text-gray-800 shadow-lg lg:shadow-xl'
                          >
                            {item.label}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Additional Decorative Elements */}
              <div className='absolute inset-0 z-10'>
                <motion.div
                  animate={{
                    boxShadow: [
                      '0 0 40px rgba(251,146,60,0.2)',
                      '0 0 60px rgba(251,146,60,0.3)',
                      '0 0 40px rgba(251,146,60,0.2)'
                    ]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                  className='absolute inset-0 rounded-full'
                />
              </div>
            </motion.div>

            {/* Mobile Experience Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className='mt-8 lg:mt-12 text-center lg:text-left'
            >
              <div
                className='inline-flex items-center justify-center bg-gradient-to-r from-orange-100 to-red-100 
                          px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base text-orange-600 font-medium'
              >
                <Star className='w-4 h-4 sm:w-5 sm:h-5 mr-2' fill='currentColor' />
                Exceptional Dining Experience
              </div>
            </motion.div>
          </div>
        </div>

        {/* Responsive Bottom Navigation - Mobile Only */}
        <motion.div
          className='fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-xl border-t border-orange-100 p-4 lg:hidden z-50'
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className='flex justify-around items-center max-w-md mx-auto'>
            <motion.button whileTap={{ scale: 0.95 }} className='flex flex-col items-center text-orange-500'>
              <Phone className='w-6 h-6 mb-1' />
              <span className='text-xs'>Call Now</span>
            </motion.button>
            <motion.button whileTap={{ scale: 0.95 }} className='flex flex-col items-center text-orange-500'>
              <MapPin className='w-6 h-6 mb-1' />
              <span className='text-xs'>Location</span>
            </motion.button>
            <motion.button whileTap={{ scale: 0.95 }} className='flex flex-col items-center text-orange-500'>
              <UtensilsCrossed className='w-6 h-6 mb-1' />
              <span className='text-xs'>Menu</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Banner
