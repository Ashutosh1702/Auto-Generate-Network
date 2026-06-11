import React from 'react'
import { motion } from 'framer-motion'
import { FiCheck, FiArrowRight } from 'react-icons/fi'

const WebsiteSolutions = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-[#050816]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 md:order-1 space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                High-Performance <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Website Solutions</span>
              </h2>
              <p className="text-gray-400 text-lg">
                Turn your garage's website into a lead-generation machine. Beautifully designed, lightning-fast, and optimized for conversions.
              </p>
            </motion.div>
            
            <div className="space-y-6">
              {[
                { title: 'Custom Branded Design', desc: 'Stand out from the competition with a premium, tailored design that builds trust with your customers.' },
                { title: 'Online Booking Integration', desc: 'Allow customers to book MOTs, services, and repairs directly from your website 24/7.' },
                { title: 'Mobile Responsive', desc: 'Flawless experience across all devices, ensuring you never miss a mobile customer.' },
              ].map((item, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex gap-4 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#111827] border border-white/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500/20 group-hover:border-blue-500/30 transition-colors">
                    <FiCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-all"
            >
              View Website Templates
              <FiArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 md:order-2 relative perspective-1000"
          >
            <div className="absolute inset-0 bg-blue-600/20 blur-[120px] rounded-full"></div>
            
            {/* Website Mockup Window */}
            <motion.div 
              whileHover={{ rotateY: -5, rotateX: 5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative rounded-2xl border-[8px] border-[#0c1222] bg-[#0c1222] shadow-2xl overflow-hidden"
            >
              {/* Browser Bar */}
              <div className="bg-[#111827] px-4 py-3 flex items-center space-x-2 border-b border-white/5">
                <div className="flex space-x-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="mx-auto w-1/2 h-4 bg-[#0c1222] rounded text-[8px] text-gray-500 flex items-center justify-center border border-white/5">
                  your-garage.co.uk
                </div>
              </div>
              
              {/* Fake Website Content */}
              <div className="h-[400px] md:h-[500px] bg-white relative overflow-hidden flex flex-col">
                {/* Nav */}
                <div className="h-12 border-b border-gray-100 flex items-center justify-between px-6">
                  <div className="text-blue-600 font-bold text-lg">Elite Garage</div>
                  <div className="flex space-x-4">
                    <div className="h-2 w-10 bg-gray-200 rounded"></div>
                    <div className="h-2 w-10 bg-gray-200 rounded"></div>
                    <div className="h-2 w-10 bg-gray-200 rounded"></div>
                  </div>
                  <div className="h-6 w-20 bg-blue-600 rounded"></div>
                </div>
                {/* Hero */}
                <div className="h-48 bg-gray-50 flex items-center px-6">
                  <div className="w-1/2 space-y-3">
                    <div className="h-4 w-3/4 bg-gray-800 rounded"></div>
                    <div className="h-4 w-1/2 bg-gray-800 rounded"></div>
                    <div className="h-2 w-full bg-gray-300 rounded mt-4"></div>
                    <div className="h-2 w-2/3 bg-gray-300 rounded"></div>
                    <div className="h-8 w-24 bg-blue-600 rounded mt-4"></div>
                  </div>
                  <div className="w-1/2 flex justify-end">
                    <div className="w-32 h-32 bg-gray-200 rounded-full"></div>
                  </div>
                </div>
                {/* Services Grid */}
                <div className="flex-1 p-6 grid grid-cols-3 gap-4">
                  {[1,2,3].map(i => (
                    <div key={i} className="bg-white border border-gray-100 shadow-sm rounded p-3 flex flex-col items-center justify-center space-y-2 hover:border-blue-200 hover:shadow-md transition-all">
                      <div className="w-8 h-8 rounded-full bg-blue-100"></div>
                      <div className="h-2 w-16 bg-gray-800 rounded"></div>
                      <div className="h-1.5 w-10 bg-gray-300 rounded"></div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default WebsiteSolutions
