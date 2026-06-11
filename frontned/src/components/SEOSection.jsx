import React from 'react'
import { motion } from 'framer-motion'
import { FiMapPin, FiStar, FiBarChart2, FiSearch, FiGlobe, FiTrendingUp } from 'react-icons/fi'

const SEOSection = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-[#050816] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 md:order-1 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Dominate <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">Local Search Results</span>
              </h2>
              <p className="text-gray-400 text-lg">
                Our built-in SEO tools ensure your garage ranks at the top when local customers search for MOTs, servicing, and repairs in your area.
              </p>
            </motion.div>

            <div className="space-y-4">
              {[
                { title: 'Google Business Profile', desc: 'Sync your reviews and business information directly with Google Maps.', icon: <FiMapPin /> },
                { title: 'Automated Review Collection', desc: 'Automatically send review requests via SMS after a job is completed.', icon: <FiStar /> },
                { title: 'Optimized Landing Pages', desc: 'High-converting pages tailored for specific services like Tyre Fitting or Diagnostics.', icon: <FiGlobe /> }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-[#111827] border border-white/5 p-6 rounded-2xl hover:border-emerald-500/30 transition-all duration-300 group shadow-lg flex gap-4"
                >
                  <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center group-hover:bg-emerald-500/20 group-hover:scale-110 transition-all">
                    {React.cloneElement(item.icon, { className: 'w-6 h-6' })}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 md:order-2 relative"
          >
            {/* SEO Dashboard Mockup */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring" }}
              className="relative rounded-2xl border border-white/10 bg-[#0c1222] p-4 shadow-[0_0_50px_rgba(16,185,129,0.15)] z-10"
            >
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center space-x-2 text-emerald-400 font-bold">
                  <FiBarChart2 className="w-5 h-5" />
                  <span>Local SEO Performance</span>
                </div>
                <div className="text-xs bg-emerald-500/10 text-emerald-400 px-2 py-1 rounded border border-emerald-500/20">Last 30 Days</div>
              </div>

              {/* Chart Mockup */}
              <div className="bg-[#050816] rounded-xl border border-white/5 p-4 mb-4">
                <div className="text-[10px] text-gray-500 uppercase font-bold mb-4 flex justify-between">
                  <span>Search Visibility</span>
                  <span className="text-emerald-400 flex items-center gap-1"><FiTrendingUp /> +34%</span>
                </div>
                <div className="h-32 flex items-end justify-between space-x-2">
                  {[30, 45, 40, 60, 55, 80, 75, 100].map((h, i) => (
                    <motion.div 
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${h}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                      className={`w-full rounded-t-md ${i === 7 ? 'bg-gradient-to-t from-emerald-600 to-teal-400' : 'bg-white/10'}`}
                    ></motion.div>
                  ))}
                </div>
              </div>

              {/* Google Maps Ranking Mockup */}
              <div className="space-y-3">
                <div className="text-[10px] text-gray-500 uppercase font-bold px-1">Local Keyword Rankings</div>
                {[
                  { kw: 'MOT near me', pos: 1, change: '+2', color: 'text-emerald-400' },
                  { kw: 'Garage services London', pos: 2, change: '+1', color: 'text-emerald-400' },
                  { kw: 'Car repair', pos: 4, change: '-1', color: 'text-red-400' },
                ].map((row, i) => (
                  <div key={i} className="flex justify-between items-center bg-[#111827] rounded-lg p-3 border border-white/5">
                    <div className="flex items-center space-x-3">
                      <FiSearch className="text-gray-500 w-4 h-4" />
                      <span className="text-sm text-gray-300 font-medium">{row.kw}</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-xs font-bold text-white">Pos. {row.pos}</div>
                      <div className={`text-xs font-bold w-6 text-right ${row.color}`}>{row.change}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Floating Review Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="absolute -top-6 -right-6 md:-right-10 bg-[#111827] border border-white/10 p-4 rounded-xl shadow-2xl glass-panel z-20 flex items-center space-x-3"
            >
              <div className="flex -space-x-2">
                {[1,2,3].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-[#111827] bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center text-[10px] font-bold text-white shadow-sm">U{i}</div>
                ))}
              </div>
              <div className="text-left pl-2">
                <div className="flex text-yellow-400 mb-0.5">
                  {[...Array(5)].map((_, i) => <FiStar key={i} className="w-3 h-3 fill-current" />)}
                </div>
                <div className="text-[10px] font-bold text-white">12 New Google Reviews</div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default SEOSection
