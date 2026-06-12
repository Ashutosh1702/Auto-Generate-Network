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

// Happy Smiley Face Chat Widget Icon matching the user's reference screenshot
const ChatBubbleIcon = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Speech bubble shape with tail at bottom-left */}
    <path
      d="M50 15 C28 15 15 28 15 50 C15 62 21 72 30 78 L25 90 L40 84 C43 85 47 85 50 85 C72 85 85 72 85 50 C85 28 72 15 50 15 Z"
      fill="#1A73E8"
    />
    {/* Yellow face offset to the bottom right */}
    <path
      d="M55 22 C37 22 25 34 25 52 C25 62 30 71 38 76 L36 84 L46 80 C48 81 52 81 55 81 C73 81 81 69 81 52 C81 34 73 22 55 22 Z"
      fill="#FFCB05"
    />
    {/* Eyes */}
    <circle cx="45" cy="46" r="4.5" fill="#1A73E8" />
    <circle cx="65" cy="46" r="4.5" fill="#1A73E8" />
    {/* Smiley mouth */}
    <path
      d="M47 58 Q55 66 63 58"
      stroke="#1A73E8"
      strokeWidth="4"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);

const Footer = () => {
  // Chatbot State
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const getFormattedTime = () => {
    return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }).toLowerCase();
  };

  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "bot",
      text: "Hi again, Guest.",
      time: getFormattedTime()
    },
    {
      id: 2,
      sender: "bot",
      text: "What can I help you with?",
      time: getFormattedTime()
    },
    {
      id: 3,
      sender: "bot",
      text: "",
      isMenu: true,
      time: getFormattedTime()
    }
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

  const menuOptions = [
    { text: "Book a Free Demo", value: "demo" },
    { text: "Pricing & Packages", value: "pricing" },
    { text: "System Features", value: "features" },
    { text: "Contact Sales & Support", value: "contact" }
  ];

  const handleUserMessage = (text, optionValue = null) => {
    if (!text.trim()) return;

    // Add user message to list
    const userMsg = { 
      id: Date.now(), 
      sender: "user", 
      text, 
      time: getFormattedTime() 
    };
    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);

    // Hide tooltip when interaction begins
    setShowTooltip(false);

    // Simulate bot response typing latency
    setTimeout(() => {
      let botText1 = "";
      let botText2 = "";
      const query = (optionValue || text).toLowerCase();

      if (query.includes("demo")) {
        botText1 = "I'd love to help you schedule a free interactive demo of Auto Garage Network! 🚀";
        botText2 = "Please call our Sales team at **07947906789** (Mon-Fri, 9:00 AM - 5:30 PM) or email us at **hello@agn-software.co.uk**. We will set up a screen-share walkthrough customized for your workshop!";
      } else if (query.includes("price") || query.includes("pricing") || query.includes("cost")) {
        botText1 = "Auto Garage Network offers transparent pricing with zero contract lock-ins. 💳";
        botText2 = "Our standard package starts at just **£49/month**, which includes the full garage management suite, MOT booking diary, invoice creation, and automated SMS reminders.";
      } else if (query.includes("feature")) {
        botText1 = "AGN is an all-in-one system designed specifically for modern garages and workshops. 🛠️";
        botText2 = "Key features include:\n• **MOT Diary & Automated Reminders**\n• **Customer Invoicing & Portals**\n• **Job Cards & Digital Checklists**\n• **Parts Stock & Supplier Tracking**\n• **Integrated SEO-Optimized Websites**";
      } else if (query.includes("contact") || query.includes("support")) {
        botText1 = "You can reach us through multiple channels. We are always happy to help! 📞";
        botText2 = "• **Sales Hotline**: 07947906789\n• **Customer Service**: 0172655556\n• **Email**: hello@agn-software.co.uk\n• **Office Hours**: Monday to Friday, 9:00 AM - 5:30 PM";
      } else {
        botText1 = "Thank you for reaching out! A representative will get back to you shortly.";
        botText2 = "You can also contact us directly at **07947906789** or email **hello@agn-software.co.uk**.";
      }

      setMessages((prev) => {
        const nextMsgs = [
          ...prev,
          {
            id: Date.now() + 1,
            sender: "bot",
            text: botText1,
            time: getFormattedTime()
          }
        ];
        
        if (botText2) {
          nextMsgs.push({
            id: Date.now() + 2,
            sender: "bot",
            text: botText2,
            time: getFormattedTime()
          });
        }

        // Add menu card again so user can continue interacting
        nextMsgs.push({
          id: Date.now() + 3,
          sender: "bot",
          text: "",
          isMenu: true,
          time: getFormattedTime()
        });

        return nextMsgs;
      });
      setIsTyping(false);
    }, 1200);
  };

  const formatMessageText = (text) => {
    if (!text) return "";
    const splitRegex = /\*\*(.*?)\*\*/g;
    const items = [];
    let lastIndex = 0;
    let match;

    while ((match = splitRegex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        items.push(text.substring(lastIndex, match.index));
      }
      items.push(
        <strong key={match.index} className="font-bold text-slate-900">
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
              className="bg-white text-slate-800 border border-gray-200 px-4 py-3 rounded-2xl rounded-br-none shadow-2xl mb-3 mr-1 text-xs max-w-[240px] flex items-center justify-between gap-3 select-none"
            >
              <div>
                <span className="font-semibold block text-blue-600 mb-0.5">AGN Support Bot</span>
                <span>Hello! How may I help you today? 👋</span>
              </div>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setShowTooltip(false);
                }}
                className="text-gray-400 hover:text-slate-600 transition-colors cursor-pointer"
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
              className="bg-[#f4f6f9] border border-gray-200 rounded-2xl shadow-2xl mb-4 w-[330px] sm:w-[360px] h-[480px] flex flex-col overflow-hidden text-slate-800 font-sans"
            >
              {/* Header */}
              <div className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between shadow-sm">
                <div className="flex items-center gap-3">
                  {/* Yellow Circle Logo with Blue A */}
                  <div className="w-9 h-9 rounded-full bg-[#FFCB05] flex items-center justify-center font-black text-blue-700 shadow-md select-none">
                    A
                  </div>
                  <div>
                    <span className="text-sm font-bold text-slate-800 block">AGN Support</span>
                    <span className="text-[10px] text-green-600 font-semibold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                      Online
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-slate-600 p-1.5 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
                >
                  <FiX className="w-4 h-4" />
                </button>
              </div>

              {/* Chat Messages */}
              <div 
                className="flex-grow overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-gray-300"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cpath d='M0 38.5 C10 38.5 10 35.5 20 35.5 C30 35.5 30 38.5 40 38.5' fill='none' stroke='%231a73e8' stroke-opacity='0.03' stroke-width='1.2'/%3E%3C/svg%3E")`,
                  backgroundColor: '#f4f6f9'
                }}
              >
                {/* Warning notice in the center */}
                <div className="text-center text-[10px] text-gray-500 bg-white/50 py-2 px-3 rounded-xl mx-auto my-2 max-w-[95%] leading-normal border border-gray-200 shadow-sm select-none">
                  Please excuse any mistakes as we work to better answer your questions. Do not give personal information in this chat.
                </div>

                {messages.map((msg) => {
                  if (msg.isMenu) {
                    return (
                      <div key={msg.id} className="flex justify-start">
                        <div className="flex flex-col items-start max-w-[85%]">
                          <div className="bg-white border border-gray-200 rounded-2xl rounded-tl-none shadow-md overflow-hidden w-full">
                            {menuOptions.map((opt, idx) => (
                              <button
                                key={idx}
                                type="button"
                                onClick={() => handleUserMessage(opt.text, opt.value)}
                                className={`w-full text-left px-4 py-3.5 text-xs font-semibold text-blue-600 hover:bg-gray-50 transition-colors flex items-center justify-between cursor-pointer ${
                                  idx < menuOptions.length - 1 ? "border-b border-gray-150" : ""
                                }`}
                              >
                                <span>{opt.text}</span>
                                <span className="text-gray-400 text-[10px]">➔</span>
                              </button>
                            ))}
                          </div>
                          <span className="text-[9px] text-gray-400 mt-1 ml-1 select-none">
                            {msg.time}
                          </span>
                        </div>
                      </div>
                    );
                  }

                  const isUser = msg.sender === "user";
                  return (
                    <div
                      key={msg.id}
                      className={`flex ${isUser ? "justify-end" : "justify-start"}`}
                    >
                      <div className="flex flex-col items-start max-w-[85%]">
                        <div
                          className={`px-3.5 py-2.5 text-xs leading-relaxed shadow-sm whitespace-pre-line ${
                            isUser
                              ? "bg-[#1A73E8] text-white rounded-2xl rounded-tr-none self-end"
                              : "bg-white border border-gray-200 text-slate-800 rounded-2xl rounded-tl-none self-start"
                          }`}
                        >
                          {formatMessageText(msg.text)}
                        </div>
                        <span className={`text-[9px] text-gray-400 mt-1 select-none w-full ${isUser ? "text-right pr-1" : "text-left pl-1"}`}>
                          {msg.time}
                        </span>
                      </div>
                    </div>
                  );
                })}
                
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-white border border-gray-200 rounded-2xl rounded-tl-none px-3.5 py-3 text-xs flex items-center gap-1 text-gray-400 shadow-sm">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input Form */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleUserMessage(inputValue);
                }}
                className="border-t border-gray-200 px-4 py-3 bg-white flex items-center gap-2"
              >
                <input
                  type="text"
                  placeholder="Type your message..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="flex-grow bg-gray-50 border border-gray-200 focus:border-blue-500 focus:outline-none rounded-xl px-3 py-2 text-xs text-slate-800 placeholder-gray-400"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim()}
                  className="p-2 rounded-xl bg-[#1A73E8] hover:bg-blue-600 text-white disabled:opacity-50 disabled:hover:bg-[#1A73E8] transition-colors shadow-lg cursor-pointer"
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
          transition={
            !isOpen ? { repeat: Infinity, duration: 4, ease: "easeInOut" } : {}
          }
          className={`w-16 h-16 rounded-full flex items-center justify-center shadow-2xl relative select-none cursor-pointer transition-all duration-300 ${
            isOpen 
              ? "bg-white text-slate-800 border border-gray-200 hover:bg-gray-50" 
              : "bg-white text-slate-800 border border-gray-100 shadow-xl hover:shadow-2xl"
          }`}
        >
          {isOpen ? (
            <FiX className="w-6 h-6 text-slate-600" />
          ) : (
            <>
              <ChatBubbleIcon className="w-11 h-11" />
              {/* Pulse Indicator */}
              <span className="absolute top-0.5 right-0.5 flex h-3.5 w-3.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-blue-500 border-2 border-white"></span>
              </span>
            </>
          )}
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;
