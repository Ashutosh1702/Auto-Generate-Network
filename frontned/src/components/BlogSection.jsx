import React from 'react'
import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'

const BlogSection = () => {
  const posts = [
    {
      category: 'Industry News',
      title: 'How EV Adoption is Changing the Independent Garage',
      date: 'Oct 12, 2026',
      readTime: '5 min read',
      color: 'bg-blue-500/20 text-blue-400'
    },
    {
      category: 'Product Update',
      title: 'New Feature: Automated Google Review Collection',
      date: 'Oct 05, 2026',
      readTime: '3 min read',
      color: 'bg-indigo-500/20 text-indigo-400'
    },
    {
      category: 'Best Practices',
      title: '5 Ways to Reduce MOT No-Shows to Zero',
      date: 'Sep 28, 2026',
      readTime: '7 min read',
      color: 'bg-purple-500/20 text-purple-400'
    }
  ]

  return (
    <section className="py-24 px-6 md:px-12 bg-[#050816] border-b border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Latest Insights</h2>
            <p className="text-gray-400 text-lg">Tips, news, and product updates from the Auto Garage Network team.</p>
          </motion.div>
          <motion.button 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden md:flex items-center space-x-2 text-indigo-400 hover:text-indigo-300 font-bold"
          >
            <span>View All Articles</span>
            <FiArrowRight />
          </motion.button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl aspect-video bg-[#111827] border border-white/5 mb-6">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0c1222] to-slate-800 transition-transform duration-500 group-hover:scale-105"></div>
                {/* Abstract graphic placeholder */}
                <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDEwaDQwdjIwSDB6IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9Ii4wNSIvPjwvc3ZnPg==')] transition-transform duration-700 group-hover:scale-110"></div>
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${post.color}`}>
                  {post.category}
                </div>
              </div>
              
              <div className="flex items-center space-x-3 text-xs text-gray-500 font-medium mb-3">
                <span>{post.date}</span>
                <span className="w-1 h-1 rounded-full bg-gray-700"></span>
                <span>{post.readTime}</span>
              </div>
              
              <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors leading-tight mb-3">
                {post.title}
              </h3>
              
              <div className="flex items-center space-x-2 text-indigo-500 font-bold text-sm opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                <span>Read Article</span>
                <FiArrowRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogSection
