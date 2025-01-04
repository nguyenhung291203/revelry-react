import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ChevronRight,
  Star,
  Clock,
  Phone,
  MapPin,
  UtensilsCrossed,
  ChefHat,
  Coffee,
  Wine,
  Soup,
  Award
} from 'lucide-react'

const Banner = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null)

  const floatingIcons = [
    {
      icon: <ChefHat className='w-8 h-8' />,
      color: 'bg-orange-50',
      label: 'Master Chefs'
    },
    {
      icon: <Wine className='w-8 h-8' />,
      color: 'bg-red-50',
      label: 'Fine Wines'
    },
    {
      icon: <Coffee className='w-8 h-8' />,
      color: 'bg-yellow-50',
      label: 'Fresh Brews'
    },
    {
      icon: <Soup className='w-8 h-8' />,
      color: 'bg-orange-50',
      label: 'Gourmet Soups'
    },
    {
      icon: <Award className='w-8 h-8' />,
      color: 'bg-red-50',
      label: 'Award Winning'
    },
    {
      icon: <UtensilsCrossed className='w-8 h-8' />,
      color: 'bg-yellow-50',
      label: 'Premium Service'
    }
  ]

  const backgroundVariants = {
    animate: {
      backgroundPosition: ['0% 0%', '100% 100%'],
      transition: {
        duration: 20,
        ease: 'linear',
        repeat: Infinity,
        repeatType: 'reverse'
      }
    }
  }

  return (
    <div
      className='relative min-h-screen overflow-hidden'
      style={{
        background: 'linear-gradient(-45deg, #fff1f2, #fff7ed, #fef3c7, #ffedd5)',
        backgroundSize: '400% 400%'
      }}
    >
      <motion.div className='absolute inset-0 z-0' variants={backgroundVariants} animate='animate' />

      {/* Enhanced Decorative Elements */}
      <div className='absolute inset-0 z-0'>
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className='absolute w-2 h-2 bg-orange-200 rounded-full'
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
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

      <div className='container mx-auto px-4 py-20 relative'>
        <div className='flex flex-col lg:flex-row items-center gap-16'>
          {/* Enhanced Left Content Section */}
          <div className='flex-1 z-10'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              {/* Enhanced Rating Badge */}
              <motion.div
                whileHover={{ scale: 1.05, rotate: [0, -2, 2, 0] }}
                className='inline-flex items-center bg-white/80 backdrop-blur-md px-6 py-3 rounded-full shadow-xl mb-8 border border-orange-100'
              >
                <div className='flex space-x-1'>
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ rotate: 0 }}
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 2,
                        delay: i * 0.1,
                        repeat: Infinity,
                        repeatType: 'reverse'
                      }}
                    >
                      <Star className='w-5 h-5 text-yellow-400' fill='currentColor' />
                    </motion.div>
                  ))}
                </div>
                <span className='text-gray-800 font-semibold ml-3'>4.9 Exceptional Rating</span>
              </motion.div>

              {/* Enhanced Title */}
              <motion.h1
                className='text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight'
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

              {/* Enhanced Description */}
              <motion.p
                className='text-xl text-gray-600 mb-10 max-w-xl leading-relaxed'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Embark on a culinary journey where each dish tells a story. Our internationally acclaimed chefs craft
                extraordinary experiences using the world's finest ingredients and innovative techniques.
              </motion.p>

              {/* Enhanced Feature Badges */}
              <div className='flex flex-wrap gap-4 mb-10'>
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    boxShadow: '0 10px 30px -10px rgba(0,0,0,0.1)'
                  }}
                  className='flex items-center bg-white/80 backdrop-blur-md px-6 py-3 rounded-xl shadow-lg border border-orange-100'
                >
                  <Clock className='w-6 h-6 text-orange-500 mr-3' />
                  <span className='text-base font-medium'>Open 24/7</span>
                </motion.div>
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    boxShadow: '0 10px 30px -10px rgba(0,0,0,0.1)'
                  }}
                  className='flex items-center bg-white/80 backdrop-blur-md px-6 py-3 rounded-xl shadow-lg border border-orange-100'
                >
                  <MapPin className='w-6 h-6 text-orange-500 mr-3' />
                  <span className='text-base font-medium'>Prime Location</span>
                </motion.div>
              </div>

              {/* Enhanced CTA Buttons */}
              <div className='flex flex-wrap gap-6'>
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: '0 20px 40px -15px rgba(249, 115, 22, 0.3)'
                  }}
                  whileTap={{ scale: 0.95 }}
                  className='px-8 py-4 bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 bg-size-200 text-white rounded-full font-semibold shadow-xl flex items-center group'
                >
                  <span>Reserve Your Table</span>
                  <motion.div
                    className='ml-2'
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: 'easeInOut'
                    }}
                  >
                    <ChevronRight className='w-5 h-5' />
                  </motion.div>
                </motion.button>
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: '0 20px 40px -15px rgba(0, 0, 0, 0.1)'
                  }}
                  whileTap={{ scale: 0.95 }}
                  className='px-8 py-4 bg-white/80 backdrop-blur-md text-orange-500 rounded-full font-semibold shadow-xl border border-orange-100 hover:bg-white transition-all duration-300'
                >
                  Explore Menu
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Enhanced Right Icon Section */}
          <div className='flex-1 z-10'>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className='relative'
            >
              {/* Main Circle */}
              <motion.div
                animate={{
                  y: [-10, 10, -10],
                  boxShadow: [
                    '0 30px 60px -15px rgba(249, 115, 22, 0.3)',
                    '0 40px 80px -15px rgba(249, 115, 22, 0.4)',
                    '0 30px 60px -15px rgba(249, 115, 22, 0.3)'
                  ]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: 'easeInOut'
                }}
                className='relative z-20 flex justify-center items-center w-[500px] h-[500px] bg-gradient-to-br from-orange-100 via-white to-orange-200 rounded-full'
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                  className='w-40 h-40 text-orange-500'
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
                      transform: `rotate(${index * 60}deg) translateY(-240px) rotate(-${index * 60}deg)`
                    }}
                    onHoverStart={() => setHoveredIcon(index)}
                    onHoverEnd={() => setHoveredIcon(null)}
                  >
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className={`relative w-16 h-16 ${item.color} backdrop-blur-md rounded-2xl shadow-xl p-4 flex items-center justify-center text-orange-500 border border-orange-100`}
                    >
                      {item.icon}
                      <AnimatePresence>
                        {hoveredIcon === index && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className='absolute -bottom-8 whitespace-nowrap bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-sm font-medium text-gray-800 shadow-lg'
                          >
                            {item.label}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
