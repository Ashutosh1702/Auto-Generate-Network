import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiTwitter,
  FiLinkedin,
  FiFacebook,
  FiInstagram,
  FiSend,
  FiX,
  FiMessageSquare,
} from "react-icons/fi";

// Custom Robot Icon matching the user's reference chatbot design
const RobotIcon = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 100 100" className={className} fill="currentColor">
    {/* Antenna */}
    <line x1="50" y1="32" x2="50" y2="15" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
    <circle cx="50" cy="12" r="6" fill="currentColor" />
    {/* Ears */}
    <rect x="12" y="38" width="8" height="28" rx="4" fill="currentColor" />
    <rect x="80" y="38" width="8" height="28" rx="4" fill="currentColor" />
    {/* Head outline */}
    <rect x="20" y="28" width="60" height="46" rx="20" fill="none" stroke="currentColor" strokeWidth="6" />
    {/* Eyes background screen */}
    <rect x="26" y="34" width="48" height="34" rx="12" fill="#0f172a" />
    {/* Glowing Blue Eyes */}
    <ellipse cx="38" cy="51" rx="5" ry="7" fill="#00d2ff" className="animate-pulse" />
    <ellipse cx="62" cy="51" rx="5" ry="7" fill="#00d2ff" className="animate-pulse" />
    {/* Mouth */}
    <path d="M 44 61 Q 50 64 56 61" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

const Footer = () => {
  // Chatbot State
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "bot",
      text: "Hello! How may I help you? I am your Auto Garage Network assistant.",
    },
  ]);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    // Show welcoming tooltip after 4 seconds
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Auto scroll to bottom
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping]);

  const quickReplies = [
    { label: "Book a Demo", query: "Schedule a Demo" },
    { label: "View Pricing", query: "View Pricing" },
    { label: "Contact Sales", query: "How to Contact Sales?" },
    { label: "System Features", query: "System Features" },
  ];

  const handleUserMessage = (text) => {
    if (!text.trim()) return;

    // Add user message to list
    const userMsg = { id: Date.now(), sender: "user", text };
    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);

    // Hide tooltip when interaction begins
    setShowTooltip(false);

    // Simulate bot response typing latency
    setTimeout(() => {
      let botText = "Thank you for reaching out! A representative will get back to you shortly, or you can call us at 07947906789.";
      const query = text.toLowerCase();

      if (query.includes("demo") || query.includes("schedule")) {
        botText = "I'd love to show you how AGN can help your garage! You can book a free interactive demo by calling us at **07947906789** or sending an email to **hello@agn-software.co.uk**.";
      } else if (query.includes("price") || query.includes("pricing") || query.includes("cost")) {
        botText = "Our garage management suite starts at just **£49/month**. We offer simple, transparent pricing with zero contract lock-ins. Would you like us to email you a detailed brochure?";
      } else if (query.includes("contact") || query.includes("phone") || query.includes("call") || query.includes("support")) {
        botText = "You can reach our Sales team at **07947906789** or Customer Services at **0172655556**. We are open Mon-Fri, 9:00 AM - 5:30 PM.";
      } else if (query.includes("feature") || query.includes("system") || query.includes("what")) {
        botText = "AGN is an all-in-one system featuring **MOT diary & automated SMS reminders**, **parts & stock tracking**, **customer portal invoicing**, **fleet & rental management**, and **integrated websites** with built-in SEO tools!";
      }

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: "bot",
          text: botText,
        },
      ]);
      setIsTyping(false);
    }, 1000);
  };

  const formatMessageText = (text) => {
    const parts = text.split(/\*\*(.*?)\*\//g);
    // Alternate standard string and bold parts
    const splitRegex = /\*\*(.*?)\*\*/g;
    const items = [];
    let lastIndex = 0;
    let match;

    while ((match = splitRegex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        items.push(text.substring(lastIndex, match.index));
      }
      items.push(
        <strong key={match.index} className="font-bold text-white">
          {match[1]}
        </strong>
      );
      lastIndex = splitRegex.lastIndex;
    }

    if (lastIndex < text.length) {
      items.push(text.substring(lastIndex));
    }

    return items.length > 0 ? items : text;
  };

  return (
    <footer className="bg-[#050816] border-t border-white/10 pt-20 pb-10 px-6 md:px-12 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-16">
          <div className="col-span-2 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center font-bold text-white">
                A
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                AGN
              </span>
            </div>
            <p className="text-gray-400 text-sm mb-6 max-w-sm">
              The premium, all-in-one garage management software helping
              independent workshops, MOT centres, and tyre specialists scale
              their operations and maximize revenue.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:hello@agn-software.co.uk"
                className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors"
              >
                <FiMail className="w-4 h-4" />
                <span className="text-sm">hello@agn-software.co.uk</span>
              </a>
              <a
                href="tel:08001234567"
                className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors"
              >
                <FiPhone className="w-4 h-4" />
                <span className="text-sm">0800 123 4567</span>
              </a>
              <div className="flex items-start space-x-3 text-gray-400">
                <FiMapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span className="text-sm">
                  123 Innovation Way
                  <br />
                  Tech Park, London
                  <br />
                  EC1V 2NX
                </span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Products</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors">
                  Garage Management System
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors">
                  MOT Diary
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors">
                  Customer Portals
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors">
                  Websites & SEO
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors">
                  Mobile App
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Industries</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors">
                  Independent Garages
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors">
                  MOT Centres
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors">
                  Tyre Specialists
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors">
                  Mobile Mechanics
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors">
                  Franchises
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Resources</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors">
                  API Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors">
                  System Status
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-gray-500 text-xs">
          <p>
            &copy; {new Date().getFullYear()} Auto Garage Network. All rights
            reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookie Policy
            </a>
          </div>
          <div className="flex space-x-4 mt-6 md:mt-0">
            <a
              href="#"
              className="text-gray-400 hover:text-indigo-400 transition-colors"
            >
              <FiTwitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-indigo-400 transition-colors"
            >
              <FiLinkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-indigo-400 transition-colors"
            >
              <FiFacebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-pink-400 transition-colors"
            >
              <FiInstagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Floating Chatbot Assistant Widget */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
        {/* Chat Tooltip Preview */}
        <AnimatePresence>
          {showTooltip && !isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 10 }}
              className="bg-[#090d1f] text-gray-200 border border-white/10 px-4 py-3 rounded-2xl rounded-br-none shadow-2xl mb-3 mr-1 text-xs max-w-[240px] flex items-center justify-between gap-3 backdrop-blur-md"
            >
              <div>
                <span className="font-semibold block text-indigo-400 mb-0.5">AGN Support Bot</span>
                <span>Hello! How may I help you today? 👋</span>
              </div>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setShowTooltip(false);
                }}
                className="text-gray-500 hover:text-white transition-colors"
              >
                <FiX className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Chat Window Dialog */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-[#090d1f]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl mb-4 w-[330px] sm:w-[360px] h-[480px] flex flex-col overflow-hidden"
            >
              {/* Header */}
              <div className="bg-[#0d1530] border-b border-white/10 px-4 py-3.5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#18234a] border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                    <RobotIcon className="w-5.5 h-5.5" />
                  </div>
                  <div>
                    <span className="text-sm font-bold text-white block">AGN Assistant</span>
                    <span className="text-[10px] text-green-400 font-semibold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                      Online &middot; Support
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-white p-1.5 hover:bg-white/5 rounded-lg transition-colors"
                >
                  <FiX className="w-4 h-4" />
                </button>
              </div>

              {/* Chat Messages */}
              <div className="flex-grow overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-white/10">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl p-3 text-xs leading-relaxed shadow-sm ${
                        msg.sender === "user"
                          ? "bg-gradient-to-r from-indigo-600 to-indigo-500 text-white rounded-tr-none"
                          : "bg-white/5 border border-white/5 text-gray-200 rounded-tl-none"
                      }`}
                    >
                      {formatMessageText(msg.text)}
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-white/5 border border-white/5 rounded-2xl rounded-tl-none p-3 text-xs flex items-center gap-1 text-gray-400">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Quick Replies */}
              {messages.length === 1 && !isTyping && (
                <div className="px-4 pb-3 flex flex-wrap gap-1.5">
                  {quickReplies.map((reply, i) => (
                    <button
                      key={i}
                      onClick={() => handleUserMessage(reply.query)}
                      className="bg-white/5 hover:bg-indigo-600/20 border border-white/10 hover:border-indigo-500/50 text-gray-300 hover:text-indigo-300 text-[10px] font-semibold px-2.5 py-1 rounded-full transition-all duration-200"
                    >
                      {reply.label}
                    </button>
                  ))}
                </div>
              )}

              {/* Input Form */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleUserMessage(inputValue);
                }}
                className="border-t border-white/10 px-4 py-3 bg-[#070b18] flex items-center gap-2"
              >
                <input
                  type="text"
                  placeholder="Type your message..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="flex-grow bg-white/5 border border-white/10 focus:border-indigo-500/50 focus:outline-none rounded-xl px-3 py-2 text-xs text-white placeholder-gray-500"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim()}
                  className="p-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white disabled:opacity-50 disabled:hover:bg-indigo-600 transition-colors shadow-lg shadow-indigo-600/20"
                >
                  <FiSend className="w-3.5 h-3.5" />
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating Action Button */}
        <motion.button
          onClick={() => {
            setIsOpen(!isOpen);
            setShowTooltip(false);
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          animate={!isOpen ? { y: [0, -4, 0] } : {}}
          transition={!isOpen ? { repeat: Infinity, duration: 4, ease: "easeInOut" } : {}}
          className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl relative select-none cursor-pointer transition-all duration-300 ${
            isOpen 
              ? "bg-white/10 text-white border border-white/20" 
              : "bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:shadow-indigo-500/30"
          }`}
        >
          {isOpen ? (
            <FiX className="w-6 h-6" />
          ) : (
            <>
              <RobotIcon className="w-7 h-7 text-white" />
              {/* Pulse Indicator */}
              <span className="absolute top-0 right-0 flex h-3.5 w-3.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-indigo-500 border-2 border-[#050816]"></span>
              </span>
            </>
          )}
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;
