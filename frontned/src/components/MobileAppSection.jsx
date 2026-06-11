import React from 'react'
import { motion } from 'framer-motion'
import { FiSmartphone, FiMessageCircle, FiCamera, FiClock } from 'react-icons/fi'
import { FaApple, FaGooglePlay } from 'react-icons/fa'

const MobileAppSection = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-gradient-to-b from-[#050816] to-[#0c1222] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 md:order-1 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
                Manage Your Garage From <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Anywhere</span>
              </h2>
              <p className="text-gray-400 text-lg">
                The AGN Mobile App gives mechanics and owners the power to update jobs, check schedules, and communicate with customers straight from the workshop floor.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { title: 'Job Updates', icon: <FiClock />, desc: 'Clock in/out of jobs' },
                { title: 'Photo Uploads', icon: <FiCamera />, desc: 'Attach damage photos' },
                { title: 'Customer Chat', icon: <FiMessageCircle />, desc: 'Instant SMS & Email' },
                { title: 'Digital VHCs', icon: <FiSmartphone />, desc: 'Vehicle health checks' },
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-[#111827] p-4 rounded-xl border border-white/5 hover:border-orange-500/30 transition-all"
                >
                  <div className="text-orange-400 mb-3">{React.cloneElement(item.icon, { className: 'w-6 h-6' })}</div>
                  <h4 className="text-white font-bold mb-1">{item.title}</h4>
                  <p className="text-xs text-gray-400">{item.desc}</p>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex gap-4 pt-4"
            >
              <button className="flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 px-6 py-3.5 rounded-xl text-white transition-colors group">
                <FaApple className="w-6 h-6 group-hover:text-white text-gray-300 transition-colors" />
                <div className="text-left">
                  <div className="text-[10px] text-gray-400 uppercase tracking-wide">Download on the</div>
                  <div className="font-bold leading-none mt-0.5">App Store</div>
                </div>
              </button>
              <button className="flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 px-6 py-3.5 rounded-xl text-white transition-colors group">
                <FaGooglePlay className="w-5 h-5 group-hover:text-green-400 text-gray-300 transition-colors" />
                <div className="text-left">
                  <div className="text-[10px] text-gray-400 uppercase tracking-wide">GET IT ON</div>
                  <div className="font-bold leading-none mt-0.5">Google Play</div>
                </div>
              </button>
            </motion.div>
          </div>
          
          <div className="order-1 md:order-2 relative flex justify-center perspective-1000">
            <div className="absolute inset-0 bg-orange-600/20 blur-[120px] rounded-full w-3/4 mx-auto pointer-events-none"></div>
            
            {/* Detailed Mobile Mockup */}
            <motion.div 
              initial={{ opacity: 0, y: 50, rotateY: 10 }}
              whileInView={{ opacity: 1, y: 0, rotateY: -10 }}
              viewport={{ once: true }}
              transition={{ type: "spring", duration: 1.5 }}
              whileHover={{ rotateY: 0, scale: 1.05 }}
              className="relative w-72 h-[600px] border-[12px] border-[#0c1222] rounded-[3rem] bg-[#050816] shadow-[0_30px_60px_rgba(0,0,0,0.6)] z-10 flex flex-col overflow-hidden"
            >
              {/* Notch */}
              <div className="absolute top-0 inset-x-0 h-6 bg-[#0c1222] rounded-b-2xl w-1/2 mx-auto z-40 flex justify-center items-center">
                <div className="w-12 h-1.5 bg-[#1f2937] rounded-full"></div>
              </div>

              {/* Status Bar */}
              <div className="h-8 w-full flex justify-between items-end px-6 text-white pb-1 z-30">
                <span className="text-[10px] font-bold">9:41</span>
                <div className="flex space-x-1 items-center">
                  <div className="w-3 h-2.5 rounded-sm bg-white"></div>
                </div>
              </div>

              {/* App UI */}
              <div className="flex-1 overflow-hidden flex flex-col bg-[#050816]">
                <div className="bg-gradient-to-b from-orange-600/20 to-transparent p-6 pb-2">
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <div className="text-xs text-orange-400 font-bold tracking-wider uppercase mb-1">Mechanic View</div>
                      <div className="text-xl font-bold text-white">John Smith</div>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-orange-500 to-red-500 p-0.5">
                      <div className="w-full h-full bg-[#111827] rounded-full flex items-center justify-center text-white font-bold">JS</div>
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    {[
                      { icon: <FiCamera />, label: 'Upload' },
                      { icon: <FiClock />, label: 'Clock In' },
                      { icon: <FiMessageCircle />, label: 'Message' },
                    ].map((btn, i) => (
                      <div key={i} className="flex flex-col items-center justify-center bg-[#111827] border border-white/5 rounded-xl p-3 aspect-square text-white hover:bg-orange-500/10 hover:text-orange-400 hover:border-orange-500/30 transition-colors cursor-pointer">
                        {React.cloneElement(btn.icon, { className: 'w-5 h-5 mb-2' })}
                        <span className="text-[10px] font-medium">{btn.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="px-6 flex-1 bg-[#111827] rounded-t-3xl pt-6 border-t border-white/5 relative shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-white font-bold">Current Job</h3>
                    <span className="bg-red-500/20 text-red-400 text-[10px] font-bold px-2 py-1 rounded">IN PROGRESS</span>
                  </div>

                  <div className="bg-[#050816] rounded-2xl p-4 border border-white/5 mb-4">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <div className="text-lg font-bold text-white">AB12 CDE</div>
                        <div className="text-xs text-gray-400">Ford Fiesta • Silver</div>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400">
                        <FiClock className="w-4 h-4" />
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-400">Service Type</span>
                        <span className="text-white font-medium">Full Service</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-400">Time Elapsed</span>
                        <span className="text-orange-400 font-bold tracking-wider">01:24:05</span>
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-white/5">
                      <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                        <div className="w-[65%] h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
                      </div>
                      <div className="text-[10px] text-gray-500 text-center mt-2">65% Completed</div>
                    </div>
                  </div>
                  
                  {/* Home Indicator line */}
                  <div className="absolute bottom-2 inset-x-0 flex justify-center">
                    <div className="w-1/3 h-1 bg-white/20 rounded-full"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MobileAppSection
