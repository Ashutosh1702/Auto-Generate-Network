import React from 'react'
import { FiMail, FiPhone, FiMapPin, FiTwitter, FiLinkedin, FiFacebook, FiInstagram } from 'react-icons/fi'

const Footer = () => {
  return (
    <footer className="bg-[#050816] border-t border-white/10 pt-20 pb-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-16">
          
          <div className="col-span-2 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center font-bold text-white">
                A
              </div>
              <span className="text-xl font-bold text-white tracking-tight">AGN</span>
            </div>
            <p className="text-gray-400 text-sm mb-6 max-w-sm">
              The premium, all-in-one garage management software helping independent workshops, MOT centres, and tyre specialists scale their operations and maximize revenue.
            </p>
            <div className="space-y-3">
              <a href="mailto:hello@agn-software.co.uk" className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors">
                <FiMail className="w-4 h-4" />
                <span className="text-sm">hello@agn-software.co.uk</span>
              </a>
              <a href="tel:08001234567" className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors">
                <FiPhone className="w-4 h-4" />
                <span className="text-sm">0800 123 4567</span>
              </a>
              <div className="flex items-start space-x-3 text-gray-400">
                <FiMapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span className="text-sm">123 Innovation Way<br/>Tech Park, London<br/>EC1V 2NX</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Products</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Garage Management System</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">MOT Diary</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Customer Portals</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Websites & SEO</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Mobile App</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Industries</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Independent Garages</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">MOT Centres</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Tyre Specialists</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Mobile Mechanics</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Franchises</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Resources</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">API Documentation</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">System Status</a></li>
            </ul>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-gray-500 text-xs">
          <p>&copy; {new Date().getFullYear()} Auto Garage Network. All rights reserved.</p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
          <div className="flex space-x-4 mt-6 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors"><FiTwitter className="w-5 h-5" /></a>
            <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors"><FiLinkedin className="w-5 h-5" /></a>
            <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors"><FiFacebook className="w-5 h-5" /></a>
            <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors"><FiInstagram className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
