import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FiArrowRight, FiCheck } from 'react-icons/fi'

const BlogCard = ({ post, idx }) => {
  const cardRef = React.useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const xc = rect.width / 2;
    const yc = rect.height / 2;
    // Calculate tilt angles (max +/- 10 degrees)
    setRotateX((yc - y) / 12);
    setRotateY((x - xc) / 12);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setIsHovered(false);
  };

  const renderVisual = () => {
    if (idx === 0) {
      /* EV Charging Battery Illustration */
      return (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#0c1222] to-slate-900 overflow-hidden select-none">
          {/* Animated floating energy bubbles */}
          <div className="absolute inset-0 opacity-30 pointer-events-none">
            {[...Array(6)].map((_, bubbleIdx) => (
              <motion.div
                key={bubbleIdx}
                animate={isHovered ? {
                  y: [-10, -65],
                  opacity: [0, 0.8, 0]
                } : {}}
                transition={{
                  duration: 2 + (bubbleIdx % 2),
                  repeat: Infinity,
                  ease: "easeOut",
                  delay: bubbleIdx * 0.4
                }}
                className="absolute w-1.5 h-1.5 rounded-full bg-cyan-400"
                style={{
                  left: `${20 + bubbleIdx * 12}%`,
                  bottom: "10%"
                }}
              />
            ))}
          </div>

          <svg viewBox="0 0 100 100" className="w-16 h-16 text-cyan-400 drop-shadow-[0_0_12px_rgba(34,211,238,0.45)]">
            <rect x="26" y="20" width="48" height="62" rx="6" fill="none" stroke="currentColor" strokeWidth="3" />
            <rect x="42" y="14" width="16" height="6" rx="2" fill="currentColor" />

            {[0, 1, 2, 3].map((segIdx) => (
              <motion.rect
                key={segIdx}
                x="32"
                y={66 - segIdx * 13}
                width="36"
                height="9"
                rx="1.5"
                fill="currentColor"
                initial={{ opacity: 0.3 }}
                animate={isHovered ? {
                  opacity: [0.3, 1, 0.3]
                } : { opacity: 0.8 }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: segIdx * 0.22
                }}
              />
            ))}

            <motion.path
              d="M52 28 L42 48 L49 48 L46 68 L58 46 L50 46 Z"
              fill="#ffffff"
              animate={isHovered ? {
                scale: [1, 1.1, 1],
                filter: ["drop-shadow(0 0 2px #fff)", "drop-shadow(0 0 8px #22d3ee)", "drop-shadow(0 0 2px #fff)"]
              } : {}}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </svg>
        </div>
      );
    }

    if (idx === 1) {
      /* Customer Review Collection Star Notification */
      return (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#0c1222] to-slate-900 overflow-hidden select-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:16px_16px]" />

          <motion.div
            animate={isHovered ? {
              y: [-3, 3, -3]
            } : {}}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="bg-slate-950/80 border border-white/10 rounded-2xl p-3 shadow-2xl flex flex-col items-center space-y-1.5 z-10 w-[155px]"
          >
            <span className="text-[7.5px] text-gray-500 font-extrabold uppercase tracking-wider leading-none">Review Collector</span>
            <div className="flex text-yellow-400 space-x-0.5">
              {[0, 1, 2, 3, 4].map((starIdx) => (
                <motion.span
                  key={starIdx}
                  animate={isHovered ? {
                    scale: [1, 1.25, 1],
                    rotate: [0, 12, -12, 0]
                  } : {}}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    delay: starIdx * 0.1
                  }}
                >
                  ★
                </motion.span>
              ))}
            </div>
            
            <div className="bg-indigo-500/10 text-indigo-400 border border-indigo-500/25 px-2 py-0.5 rounded text-[8px] font-black tracking-wide flex items-center space-x-1">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></span>
              <span>4.9 / 5.0 Rating</span>
            </div>
          </motion.div>

          {[...Array(4)].map((_, starIdx) => (
            <motion.div
              key={starIdx}
              animate={isHovered ? {
                y: [0, -20, 0],
                x: [0, starIdx % 2 === 0 ? 10 : -10, 0],
                opacity: [0, 0.5, 0]
              } : {}}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                delay: starIdx * 0.4
              }}
              className="absolute text-yellow-400/20 text-xs"
              style={{
                left: `${18 + starIdx * 22}%`,
                top: `${40 + (starIdx % 2) * 15}%`
              }}
            >
              ★
            </motion.div>
          ))}
        </div>
      );
    }

    if (idx === 2) {
      /* Calendar Scheduler Ticking Clock */
      return (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#0c1222] to-slate-900 overflow-hidden select-none">
          <div className="flex items-center space-x-4 z-10">
            <motion.div
              animate={isHovered ? {
                scale: [1, 1.02, 1]
              } : {}}
              className="bg-slate-950/70 border border-white/5 rounded-xl p-2.5 shadow-xl text-left text-[7px] font-extrabold text-gray-400 space-y-1.5 w-[85px] leading-tight shrink-0"
            >
              <span className="text-white text-[7.5px] block font-black border-b border-white/5 pb-1 uppercase tracking-wider">Today's MOTs</span>
              <div className="flex items-center space-x-1.5 text-green-400 bg-green-500/5 border border-green-500/10 p-0.5 rounded">
                <FiCheck className="w-2 h-2 shrink-0" />
                <span>09:00 - DONE</span>
              </div>
              <div className="flex items-center space-x-1.5 text-purple-400 bg-purple-500/5 border border-purple-500/10 p-0.5 rounded">
                <motion.span 
                  animate={isHovered ? { opacity: [0.3, 1, 0.3] } : {}}
                  className="w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0"
                />
                <span>10:30 - MOT</span>
              </div>
            </motion.div>

            <motion.div
              animate={isHovered ? {
                rotateY: [0, 10, -10, 0]
              } : {}}
              className="w-14 h-14 rounded-full border border-white/10 bg-slate-950/80 flex items-center justify-center relative shadow-lg shrink-0"
            >
              <div className="w-12 h-12 rounded-full border border-dashed border-purple-500/25 absolute inset-0.5" />
              
              <div className="absolute top-1.5 w-1 h-1 bg-white/20 rounded-full" />
              <div className="absolute bottom-1.5 w-1 h-1 bg-white/20 rounded-full" />
              <div className="absolute left-1.5 w-1 h-1 bg-white/20 rounded-full" />
              <div className="absolute right-1.5 w-1 h-1 bg-white/20 rounded-full" />

              {/* Hour hand */}
              <motion.div
                animate={isHovered ? {
                  rotate: [60, 420]
                } : { rotate: 60 }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="w-0.5 h-3.5 bg-white rounded-full absolute bottom-1/2 left-1/2 origin-bottom -translate-x-1/2"
              />

              {/* Minute hand */}
              <motion.div
                animate={isHovered ? {
                  rotate: [180, 2340]
                } : { rotate: 180 }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="w-0.5 h-5 bg-purple-400 rounded-full absolute bottom-1/2 left-1/2 origin-bottom -translate-x-1/2"
              />

              <div className="w-1.5 h-1.5 rounded-full bg-white border border-slate-950 z-10" />
            </motion.div>
          </div>
        </div>
      );
    }
  };

  return (
    <motion.div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setIsHovered(true)}
      style={{
        perspective: 1000,
        transformStyle: "preserve-3d",
      }}
      animate={{
        rotateX,
        rotateY,
        y: isHovered ? -6 : 0
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group cursor-pointer select-none text-left"
    >
      <div className="relative overflow-hidden rounded-2xl aspect-video border border-white/5 bg-[#111827] shadow-[0_4px_30px_rgba(0,0,0,0.4)] mb-6">
        {/* Dynamic Inner Graphics */}
        {renderVisual()}
        
        {/* Category Tag overlay */}
        <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-wider ${post.color} border border-current/10 shrink-0`}>
          {post.category}
        </div>
      </div>
      
      <div className="flex items-center space-x-3 text-xs text-gray-500 font-bold mb-3">
        <span>{post.date}</span>
        <span className="w-1 h-1 rounded-full bg-gray-700"></span>
        <span>{post.readTime}</span>
      </div>
      
      <h3 className="text-xl font-extrabold text-white group-hover:text-indigo-400 transition-colors leading-snug mb-3">
        {post.title}
      </h3>
      
      <div className="flex items-center space-x-2 text-indigo-400 font-extrabold text-sm opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
        <span>Read Article</span>
        <FiArrowRight className="w-4 h-4" />
      </div>
    </motion.div>
  );
};

const BlogSection = () => {
  const posts = [
    {
      category: 'Industry News',
      title: 'How EV Adoption is Changing the Independent Garage',
      date: 'Oct 12, 2026',
      readTime: '5 min read',
      color: 'bg-blue-500/10 text-blue-400'
    },
    {
      category: 'Product Update',
      title: 'New Feature: Automated Google Review Collection',
      date: 'Oct 05, 2026',
      readTime: '3 min read',
      color: 'bg-indigo-500/10 text-indigo-400'
    },
    {
      category: 'Best Practices',
      title: '5 Ways to Reduce MOT No-Shows to Zero',
      date: 'Sep 28, 2026',
      readTime: '7 min read',
      color: 'bg-purple-500/10 text-purple-400'
    }
  ]

  return (
    <section className="py-24 px-6 md:px-12 bg-[#050816] border-b border-white/5 relative overflow-hidden">
      {/* Background soft glow accents */}
      <div className="absolute top-1/2 left-1/4 w-[450px] h-[450px] bg-indigo-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl text-left"
          >
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4">Latest Insights</h2>
            <p className="text-gray-400 text-lg">Tips, news, and product updates from the Auto Garage Network team.</p>
          </motion.div>
          
          <motion.button 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ x: 3 }}
            className="hidden md:flex items-center space-x-2 text-indigo-400 hover:text-indigo-300 font-extrabold transition-colors cursor-pointer"
          >
            <span>View All Articles</span>
            <FiArrowRight />
          </motion.button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <BlogCard key={idx} post={post} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogSection
