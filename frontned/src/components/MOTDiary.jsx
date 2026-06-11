import React from 'react'
import { motion } from 'framer-motion'
import { FiCalendar, FiClock, FiCheck, FiMail, FiMessageSquare, FiRefreshCw } from 'react-icons/fi'

const MOTDiary = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-[#0c1222] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-purple-600/20 blur-[120px] rounded-full"></div>
            
            {/* MOT Diary Dashboard Mockup */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative rounded-2xl border border-white/10 bg-[#050816] p-4 shadow-[0_0_40px_rgba(139,92,246,0.15)] z-10"
            >
              {/* Header */}
              <div className="flex justify-between items-center mb-6 border-b border-white/5 pb-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-purple-500/20 rounded-lg text-purple-400">
                    <FiCalendar className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold">MOT Diary</h3>
                    <p className="text-[10px] text-gray-400">Tue, Oct 24th, 2026</p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <div className="px-3 py-1 bg-purple-600 text-white text-xs font-bold rounded-lg cursor-pointer">+ New Booking</div>
                </div>
              </div>

              {/* Timeline Header */}
              <div className="grid grid-cols-5 gap-2 mb-2 text-center text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                <div>Time</div>
                <div>Bay 1</div>
                <div>Bay 2</div>
                <div>Bay 3</div>
                <div>Bay 4 (MOT)</div>
              </div>

              {/* Diary Grid */}
              <div className="space-y-2">
                {[
                  { time: '09:00', bookings: [
                    { bay: 1, type: 'Service', color: 'bg-blue-500/20 text-blue-400 border-blue-500/30' },
                    { bay: null },
                    { bay: 3, type: 'Tyres', color: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' },
                    { bay: 4, type: 'MOT', color: 'bg-purple-500/20 text-purple-400 border-purple-500/30' },
                  ]},
                  { time: '10:00', bookings: [
                    { bay: 1, type: 'Service', color: 'bg-blue-500/20 text-blue-400 border-blue-500/30' }, // Continuation
                    { bay: 2, type: 'Diagnostics', color: 'bg-red-500/20 text-red-400 border-red-500/30' },
                    { bay: null },
                    { bay: null },
                  ]},
                  { time: '11:00', bookings: [
                    { bay: null },
                    { bay: 2, type: 'Diagnostics', color: 'bg-red-500/20 text-red-400 border-red-500/30' }, // Continuation
                    { bay: 3, type: 'Brakes', color: 'bg-orange-500/20 text-orange-400 border-orange-500/30' },
                    { bay: 4, type: 'MOT', color: 'bg-purple-500/20 text-purple-400 border-purple-500/30' },
                  ]},
                ].map((row, idx) => (
                  <div key={idx} className="grid grid-cols-5 gap-2 items-stretch h-12">
                    <div className="flex items-center justify-center text-xs text-gray-500 font-medium border-r border-white/5 pr-2">
                      {row.time}
                    </div>
                    {row.bookings.map((b, i) => (
                      <div key={i} className={`rounded-md border p-1.5 flex flex-col justify-center ${b.type ? b.color : 'border-dashed border-white/10 bg-white/5 hover:bg-white/10 cursor-pointer transition-colors'}`}>
                        {b.type && (
                          <>
                            <span className="text-[9px] font-bold">{b.type}</span>
                            <span className="text-[7px] opacity-80">AB12 CDE</span>
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Floating Notification */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="absolute -bottom-6 -right-6 md:-right-10 bg-[#111827] border border-white/10 p-3 rounded-xl shadow-2xl glass-panel z-20 flex items-center space-x-3"
            >
              <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                <FiMessageSquare className="w-4 h-4" />
              </div>
              <div className="text-left">
                <div className="text-[10px] text-gray-400 font-medium">Automated SMS Sent</div>
                <div className="text-xs font-bold text-white">MOT Reminder: AB12 CDE</div>
              </div>
            </motion.div>
          </motion.div>
          
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Smart <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">MOT Diary</span> Management
              </h2>
              <p className="text-gray-400 text-lg">
                Simplify your MOT scheduling with our intelligent diary system. Reduce no-shows, fill gaps, and keep your ramps fully booked.
              </p>
            </motion.div>
            
            <div className="space-y-4">
              {[
                { icon: <FiMessageSquare />, text: 'Automated SMS & Email Reminders' },
                { icon: <FiRefreshCw />, text: 'DVSA Integration for MOT History' },
                { icon: <FiCalendar />, text: 'Drag-and-Drop Scheduling' },
                { icon: <FiClock />, text: 'Live Bay Availability' }
              ].map((item, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center space-x-4 bg-[#111827] border border-white/5 p-4 rounded-xl hover:border-purple-500/30 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400">
                    {item.icon}
                  </div>
                  <span className="text-gray-300 font-medium">{item.text}</span>
                </motion.div>
              ))}
            </div>
            
            <motion.button 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white rounded-xl font-bold shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all"
            >
              Explore MOT Features
            </motion.button>
          </div>

        </div>
      </div>
    </section>
  )
}

export default MOTDiary
