import React, { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const AnimatedCounter = ({ end, duration = 2, inView }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return

    let start = 0
    const endValue = parseInt(end, 10)
    if (start === endValue) return

    let startTime = null
    const animationDuration = duration * 1000

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / animationDuration, 1)
      
      // easeOutQuart
      const easeProgress = 1 - Math.pow(1 - progress, 4)
      
      setCount(Math.floor(easeProgress * endValue))
      
      if (progress < 1) {
        window.requestAnimationFrame(step)
      } else {
        setCount(endValue)
      }
    }
    
    window.requestAnimationFrame(step)
  }, [end, duration, inView])

  return <span>{count.toLocaleString()}</span>
}

const StatsSection = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })

  const stats = [
    { value: 2500, suffix: '+', label: 'Garages Across UK' },
    { value: 50000, suffix: '+', label: 'Jobs Completed' },
    { value: 98, suffix: '%', label: 'Satisfaction Rate' },
    { value: 15, suffix: '+', label: 'Years Experience' }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-[#050816] to-[#0c1222]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div 
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center"
        >
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col space-y-3 p-6 rounded-2xl bg-[#111827] border border-white/5 hover:border-indigo-500/30 transition-colors group"
            >
              <div className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-indigo-400 to-purple-500 group-hover:scale-110 transition-transform">
                <AnimatedCounter end={stat.value} inView={inView} />
                {stat.suffix}
              </div>
              <div className="text-sm md:text-base text-gray-400 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsSection
