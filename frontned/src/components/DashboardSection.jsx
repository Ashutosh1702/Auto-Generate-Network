import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiCheckCircle,
  FiTrendingUp,
  FiTruck,
  FiAlertTriangle,
  FiCalendar,
  FiDollarSign,
  FiSearch,
  FiMail,
  FiSettings,
  FiActivity,
  FiUser,
  FiClock,
  FiClipboard,
  FiShield,
  FiBriefcase,
} from "react-icons/fi";

const DashboardSection = () => {
  // State machine selection: 0 = Dashboard, 1 = Maintenance, 2 = Fleet, 3 = Scheduling
  const [activeTab, setActiveTab] = useState(0);

  // State for the moving/flying card
  const [isFlying, setIsFlying] = useState(false);
  const [flyText, setFlyText] = useState("Syncing...");

  // Coordinates mapping for each menu tab on the left (in percentages relative to parent container)
  const menuPositions = [
    { left: "5%", top: "18%" }, // Dashboard
    { left: "5%", top: "32%" }, // Maintenance
    { left: "5%", top: "25%" }, // Fleet
    { left: "5%", top: "39%" }, // Scheduling
  ];

  // Define details for each state transition loop
  const tourSequence = [
    {
      nextTab: 1,
      flyText: "Transferring diagnostic feeds to Maintenance bay...",
      iconColor: "bg-red-400",
    },
    {
      nextTab: 2,
      flyText: "Syncing courtesy agreements with Fleet logs...",
      iconColor: "bg-blue-400",
    },
    {
      nextTab: 3,
      flyText: "Updating workshop bookings in calendar...",
      iconColor: "bg-purple-400",
    },
    {
      nextTab: 0,
      flyText: "Consolidating all modules to overview panel...",
      iconColor: "bg-green-400",
    },
  ];

  useEffect(() => {
    // Each tab stays active for 6 seconds for user readability
    const activeTimer = setTimeout(() => {
      setIsFlying(true);
      setFlyText(tourSequence[activeTab].flyText);

      // The flying card takes 2 seconds to reach the next menu tab
      const transitionTimer = setTimeout(() => {
        setIsFlying(false);
        setActiveTab(tourSequence[activeTab].nextTab);
      }, 2000);

      return () => clearTimeout(transitionTimer);
    }, 6000);

    return () => clearTimeout(activeTimer);
  }, [activeTab]);

  return (
    <section className="py-24 px-6 md:px-12 bg-[#050816] relative overflow-hidden">
      {/* Visual background elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(79,70,229,0.05),transparent)] pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[160px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-indigo-500/10 border border-indigo-500/30 px-3 py-1.5 rounded-full text-xs font-semibold text-indigo-300 mb-6"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            <span>Real-time Workspace Automation</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-6"
          >
            High-Fidelity <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500">
              Interactive Dashboard
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto"
          >
            Watch the dynamic data flow across modules, automatically updating
            diagnostic alerts, costs, fleet utilization rates, and bay rota
            schedules in real time.
          </motion.p>
        </div>

        {/* Outer Laptop/Window Frame container with premium glassmorphism */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl border border-white/10 bg-[#090d1f]/60 backdrop-blur-xl p-3 md:p-6 shadow-[0_30px_100px_rgba(0,0,0,0.8),0_0_80px_rgba(79,70,229,0.15)] mx-auto max-w-5xl overflow-hidden aspect-[16/10]"
        >
          {/* Dashboard Window Header (mock status bar) */}
          <div className="flex items-center justify-between px-4 pb-4 border-b border-white/5 h-[8%]">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-[#ef4444] shadow-[0_0_8px_rgba(239,68,68,0.5)]" />
              <div className="w-3 h-3 rounded-full bg-[#f59e0b] shadow-[0_0_8px_rgba(245,158,11,0.5)]" />
              <div className="w-3 h-3 rounded-full bg-[#10b981] shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
            </div>
            <div className="bg-[#0b0f19] text-gray-400 text-[10px] md:text-xs px-6 py-1.5 rounded-full border border-white/5 flex items-center space-x-2 shadow-inner">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-gray-500 font-medium">HTTPS://</span>
              <span className="font-semibold text-gray-300">
                portal.autogarage.network/live
              </span>
            </div>
            <div className="w-12 h-1 bg-white/5 rounded" />
          </div>

          {/* Interactive HTML/CSS Dashboard Content Container */}
          <div className="bg-[#04060f] rounded-2xl border border-white/5 overflow-hidden mt-4 h-[89%] flex relative font-sans">
            {/* 1. Left-Side Navigation Panel (Glassmorphic) */}
            <div className="w-[22%] md:w-[24%] border-r border-white/5 bg-[#070b18]/90 p-4 flex flex-col justify-between select-none">
              <div className="space-y-6">
                {/* Brand Logo */}
                <div className="flex items-center space-x-2.5 px-2 py-1">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 flex items-center justify-center text-sm font-black text-white shadow-lg shadow-indigo-500/35">
                    A
                  </div>
                  <div className="hidden md:block">
                    <span className="text-[10px] font-black text-white tracking-widest uppercase block leading-none">
                      AUTOSERVICE
                    </span>
                    <span className="text-[8px] font-bold text-indigo-400 uppercase tracking-widest block mt-0.5">
                      SaaS Suite
                    </span>
                  </div>
                </div>

                {/* Navigation Menu Links */}
                <div className="space-y-1">
                  <span className="hidden md:inline-block text-[8px] font-black text-gray-500 tracking-wider uppercase px-3 pb-1">
                    Core Modules
                  </span>
                  {[
                    {
                      label: "Overview",
                      idx: 0,
                      icon: <FiTrendingUp />,
                      color: "text-green-400",
                    },
                    {
                      label: "Fleet & Rentals",
                      idx: 2,
                      icon: <FiTruck />,
                      color: "text-blue-400",
                    },
                    {
                      label: "Maintenance",
                      idx: 1,
                      icon: <FiAlertTriangle />,
                      color: "text-red-400",
                    },
                    {
                      label: "MOT Scheduling",
                      idx: 3,
                      icon: <FiCalendar />,
                      color: "text-purple-400",
                    },
                  ].map((menu) => {
                    const isSelected = activeTab === menu.idx;
                    return (
                      <div
                        key={menu.idx}
                        className={`flex items-center space-x-3 px-3 py-2.5 rounded-xl text-xs font-semibold cursor-pointer transition-all duration-300 relative ${
                          isSelected
                            ? "bg-gradient-to-r from-indigo-600/90 to-purple-600/90 text-white shadow-lg shadow-indigo-500/20"
                            : "text-gray-400 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        {isSelected && (
                          <motion.div
                            layoutId="activeIndicator"
                            className="absolute left-0 w-1 h-5 bg-indigo-400 rounded-r-md"
                          />
                        )}
                        <span
                          className={`text-sm ${isSelected ? "text-white" : menu.color}`}
                        >
                          {menu.icon}
                        </span>
                        <span className="hidden md:inline">{menu.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Bottom user profile card */}
              <div className="bg-[#0b0f19] border border-white/5 rounded-2xl p-2.5 flex items-center space-x-2.5 shadow-md">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white flex items-center justify-center text-xs font-bold shadow-inner">
                  AR
                </div>
                <div className="hidden md:block overflow-hidden">
                  <span className="text-[10px] text-white font-bold block leading-none">
                    Alex Roberts
                  </span>
                  <span className="text-[8px] text-gray-500 font-semibold block mt-1">
                    Super Admin
                  </span>
                </div>
              </div>
            </div>

            {/* 2. Main Dashboard Content Panels */}
            <div className="flex-1 p-5 md:p-6 overflow-y-auto flex flex-col space-y-5 md:space-y-6 bg-[#04060f]/90">
              {/* Header inside Panel */}
              <div className="flex justify-between items-center border-b border-white/5 pb-4">
                <div>
                  <h3 className="text-[8px] md:text-[9px] font-black text-gray-500 tracking-widest uppercase">
                    VEHICLE MANAGEMENT SYSTEM
                  </h3>
                  <h1 className="text-lg md:text-2xl font-black text-white mt-1">
                    Live Workshop Operations
                  </h1>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="hidden lg:flex items-center space-x-2 bg-[#0a0f1d] border border-white/5 rounded-full px-3 py-1 text-[9px] text-gray-400 font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    <span>Database Latency: 12ms</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-400 text-sm md:text-base">
                    <div className="p-2 rounded-lg hover:bg-white/5 hover:text-white cursor-pointer transition-colors">
                      <FiSearch />
                    </div>
                    <div className="p-2 rounded-lg hover:bg-white/5 hover:text-white cursor-pointer transition-colors relative">
                      <FiMail />
                      <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500" />
                    </div>
                    <div className="p-2 rounded-lg hover:bg-white/5 hover:text-white cursor-pointer transition-colors">
                      <FiSettings />
                    </div>
                  </div>
                </div>
              </div>

              {/* Dynamic View switching inside Dashboard content */}
              <AnimatePresence mode="wait">
                {activeTab === 0 && (
                  <motion.div
                    key="tab-dashboard"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.4 }}
                    className="flex-1 flex flex-col space-y-5 md:space-y-6"
                  >
                    {/* Top Row Cards */}
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-[#0a0f1d]/60 border border-white/5 hover:border-indigo-500/20 p-4 rounded-2xl flex flex-col justify-between shadow-md transition-all duration-300">
                        <span className="text-[8px] md:text-[9px] font-black text-gray-500 uppercase tracking-widest">
                          FLEET OVERVIEW
                        </span>
                        <div className="flex items-baseline justify-between mt-2">
                          <span className="text-base md:text-2xl font-black text-white">
                            312
                          </span>
                          <span className="text-[9px] md:text-[10px] font-bold text-green-400 bg-green-500/10 border border-green-500/20 px-1.5 py-0.5 rounded-md">
                            +4 active
                          </span>
                        </div>
                      </div>
                      <div className="bg-[#0a0f1d]/60 border border-white/5 hover:border-indigo-500/20 p-4 rounded-2xl flex flex-col justify-between shadow-md transition-all duration-300">
                        <span className="text-[8px] md:text-[9px] font-black text-gray-500 uppercase tracking-widest">
                          ESTIMATED REVENUE
                        </span>
                        <div className="flex items-baseline justify-between mt-2">
                          <span className="text-base md:text-2xl font-black text-green-400">
                            £28,540
                          </span>
                          <span className="text-[9px] md:text-[10px] font-bold text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-1.5 py-0.5 rounded-md">
                            +12.5%
                          </span>
                        </div>
                      </div>
                      <div className="bg-[#0a0f1d]/60 border border-white/5 hover:border-indigo-500/20 p-4 rounded-2xl flex flex-col justify-between shadow-md transition-all duration-300">
                        <span className="text-[8px] md:text-[9px] font-black text-gray-500 uppercase tracking-widest">
                          SERVICE ALERTS
                        </span>
                        <div className="flex items-baseline justify-between mt-2">
                          <span className="text-base md:text-2xl font-black text-red-400">
                            38
                          </span>
                          <span className="text-[9px] md:text-[10px] font-bold text-red-400 bg-red-500/10 border border-red-500/20 px-1.5 py-0.5 rounded-md">
                            Critical
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Middle Section with Line Chart & List */}
                    <div className="grid md:grid-cols-3 gap-5 flex-1 items-stretch">
                      {/* Big Chart Card */}
                      <div className="md:col-span-2 bg-[#0a0f1d]/60 border border-white/5 p-5 rounded-2xl flex flex-col justify-between h-[200px] md:h-[240px] shadow-lg">
                        <div className="flex justify-between items-center">
                          <div>
                            <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                              REVENUE & OUTPUT ANALYTICS
                            </h4>
                            <span className="text-[9px] md:text-xs text-gray-500">
                              Live 30-day tracking data stream
                            </span>
                          </div>
                          <div className="flex space-x-2 text-[9px] font-bold text-gray-400">
                            <span className="flex items-center space-x-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />{" "}
                              <span>Revenue</span>
                            </span>
                            <span className="flex items-center space-x-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />{" "}
                              <span>Target</span>
                            </span>
                          </div>
                        </div>

                        {/* Animated Line Chart SVG */}
                        <div className="flex-1 flex items-end pt-4 h-[120px]">
                          <svg viewBox="0 0 400 150" className="w-full h-full">
                            <defs>
                              <linearGradient
                                id="dashboard-chart-grad-1"
                                x1="0"
                                y1="0"
                                x2="0"
                                y2="1"
                              >
                                <stop
                                  offset="0%"
                                  stopColor="#3b82f6"
                                  stopOpacity="0.4"
                                />
                                <stop
                                  offset="100%"
                                  stopColor="#3b82f6"
                                  stopOpacity="0"
                                />
                              </linearGradient>
                            </defs>
                            <line
                              x1="0"
                              y1="37.5"
                              x2="400"
                              y2="37.5"
                              stroke="rgba(255,255,255,0.02)"
                            />
                            <line
                              x1="0"
                              y1="75"
                              x2="400"
                              y2="75"
                              stroke="rgba(255,255,255,0.02)"
                            />
                            <line
                              x1="0"
                              y1="112.5"
                              x2="400"
                              y2="112.5"
                              stroke="rgba(255,255,255,0.02)"
                            />

                            <motion.path
                              d="M0 120 C 50 110, 100 130, 150 70 C 200 40, 250 90, 300 50 C 350 30, 400 20, 400 20 L 400 150 L 0 150 Z"
                              fill="url(#dashboard-chart-grad-1)"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 0.5 }}
                            />

                            {/* Target Line */}
                            <motion.path
                              d="M0 100 L 400 30"
                              fill="none"
                              stroke="rgba(99,102,241,0.3)"
                              strokeDasharray="4"
                              strokeWidth="2"
                            />

                            {/* Active Revenue Line */}
                            <motion.path
                              d="M0 120 C 50 110, 100 130, 150 70 C 200 40, 250 90, 300 50 C 350 30, 400 20, 400 20"
                              fill="none"
                              stroke="#3b82f6"
                              strokeWidth="3"
                              initial={{ pathLength: 0 }}
                              animate={{ pathLength: 1 }}
                              transition={{ duration: 1, ease: "easeOut" }}
                            />
                          </svg>
                        </div>
                      </div>

                      {/* Right List Card */}
                      <div className="bg-[#0a0f1d]/60 border border-white/5 p-5 rounded-2xl flex flex-col justify-between h-[200px] md:h-[240px] shadow-lg">
                        <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3">
                          LIVE WORK FEED
                        </h4>
                        <div className="space-y-3.5 flex-1 overflow-y-auto pr-1">
                          {[
                            {
                              name: "Audi A3 (Job #9012)",
                              info: "MOT Testing",
                              time: "Active (40 mins)",
                              color: "text-green-400",
                            },
                            {
                              name: "Ford Transit (Job #9013)",
                              info: "Clutch Replace",
                              time: "Repairs (2h remaining)",
                              color: "text-red-400",
                            },
                            {
                              name: "Tesla Model Y (Job #9014)",
                              info: "Battery Audit",
                              time: "Scheduled (Pending)",
                              color: "text-indigo-400",
                            },
                            {
                              name: "Vauxhall Corsa (Job #9015)",
                              info: "Alignment Check",
                              time: "Completed",
                              color: "text-gray-400",
                            },
                          ].map((car, idx) => (
                            <div
                              key={idx}
                              className="flex justify-between items-start text-[10px] border-b border-white/5 pb-2.5"
                            >
                              <div>
                                <span className="text-gray-200 font-bold block">
                                  {car.name}
                                </span>
                                <span className="text-gray-500 font-semibold block text-[8px] mt-0.5">
                                  {car.info}
                                </span>
                              </div>
                              <span
                                className={`${car.color} font-bold text-right`}
                              >
                                {car.time}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === 1 && (
                  <motion.div
                    key="tab-maintenance"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.4 }}
                    className="flex-1 flex flex-col space-y-5 md:space-y-6"
                  >
                    {/* Top Row Cards */}
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-[#0a0f1d]/60 border border-white/5 hover:border-red-500/20 p-4 rounded-2xl flex flex-col justify-between shadow-md transition-all duration-300">
                        <span className="text-[8px] md:text-[9px] font-black text-gray-500 uppercase tracking-widest">
                          ACTIVE DIAGNOSTIC TICKETS
                        </span>
                        <div className="flex items-baseline justify-between mt-2">
                          <span className="text-base md:text-2xl font-black text-white">
                            14
                          </span>
                          <span className="text-[9px] md:text-[10px] font-bold text-red-400 bg-red-500/10 border border-red-500/20 px-1.5 py-0.5 rounded-md">
                            3 High Priority
                          </span>
                        </div>
                      </div>
                      <div className="bg-[#0a0f1d]/60 border border-white/5 hover:border-red-500/20 p-4 rounded-2xl flex flex-col justify-between shadow-md transition-all duration-300">
                        <span className="text-[8px] md:text-[9px] font-black text-gray-500 uppercase tracking-widest">
                          PARTS EXPENSE
                        </span>
                        <div className="flex items-baseline justify-between mt-2">
                          <span className="text-base md:text-2xl font-black text-indigo-400">
                            £3,840
                          </span>
                          <span className="text-[9px] md:text-[10px] font-bold text-green-400 bg-green-500/10 border border-green-500/20 px-1.5 py-0.5 rounded-md">
                            Within Target
                          </span>
                        </div>
                      </div>
                      <div className="bg-[#0a0f1d]/60 border border-white/5 hover:border-red-500/20 p-4 rounded-2xl flex flex-col justify-between shadow-md transition-all duration-300">
                        <span className="text-[8px] md:text-[9px] font-black text-gray-500 uppercase tracking-widest">
                          WORKSHOP BAY UTILIZATION
                        </span>
                        <div className="flex items-baseline justify-between mt-2">
                          <span className="text-base md:text-2xl font-black text-green-400">
                            80%
                          </span>
                          <span className="text-[9px] md:text-[10px] font-bold text-gray-400 bg-white/10 border border-white/5 px-1.5 py-0.5 rounded-md">
                            4/5 Bays Active
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Middle Section with Bar Chart */}
                    <div className="grid md:grid-cols-3 gap-5 flex-1 items-stretch">
                      {/* Cost Bar Chart */}
                      <div className="md:col-span-2 bg-[#0a0f1d]/60 border border-white/5 p-5 rounded-2xl flex flex-col justify-between h-[200px] md:h-[240px] shadow-lg">
                        <div>
                          <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                            MAINTENANCE ALERTS BY CATEGORY
                          </h4>
                          <span className="text-[9px] md:text-xs text-gray-500">
                            Distribution of active fault notices
                          </span>
                        </div>

                        <div className="flex-1 flex items-end justify-between space-x-4 pt-8 h-[120px] pb-1 border-b border-white/5">
                          {[
                            { h: 70, label: "Engine" },
                            { h: 90, label: "Brakes" },
                            { h: 40, label: "Electrical" },
                            { h: 80, label: "Tyre" },
                            { h: 55, label: "Exhaust" },
                            { h: 65, label: "Gearbox" },
                          ].map((bar, i) => (
                            <div
                              key={i}
                              className="flex-1 flex flex-col justify-end h-full items-center"
                            >
                              <motion.div
                                initial={{ scaleY: 0 }}
                                animate={{ scaleY: 1 }}
                                transition={{ duration: 0.6, delay: i * 0.05 }}
                                style={{
                                  originY: 1,
                                  transformOrigin: "bottom",
                                  height: `${bar.h}%`,
                                }}
                                className="bg-gradient-to-t from-red-600 via-indigo-600 to-indigo-500 rounded-t-lg w-full max-w-[24px]"
                              />
                              <span className="text-[8px] text-gray-500 mt-1 font-bold block whitespace-nowrap">
                                {bar.label}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Side Feed List */}
                      <div className="bg-[#0a0f1d]/60 border border-white/5 p-5 rounded-2xl flex flex-col justify-between h-[200px] md:h-[240px] shadow-lg">
                        <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3">
                          DIAGNOSTIC FAULT FEED
                        </h4>
                        <div className="space-y-3.5 flex-1 overflow-y-auto pr-1">
                          {[
                            {
                              name: "Ford F-150 (CAR 001)",
                              alert: "Engine Overheat (105°C)",
                              level: "Critical",
                              color: "text-red-400",
                            },
                            {
                              name: "Tesla Model 3 (SUV 042)",
                              alert: "Brake Pad Wear (88%)",
                              level: "Amber Alert",
                              color: "text-yellow-400",
                            },
                            {
                              name: "Ram 1500 (TRUCK 119)",
                              alert: "DPF Filter Regulating",
                              level: "Warning",
                              color: "text-yellow-400",
                            },
                            {
                              name: "BMW 3 Series (CAR 089)",
                              alert: "Steering Angle Out",
                              level: "Info",
                              color: "text-blue-400",
                            },
                          ].map((car, idx) => (
                            <div
                              key={idx}
                              className="flex justify-between items-start text-[10px] border-b border-white/5 pb-2.5"
                            >
                              <div>
                                <span className="text-gray-200 font-bold block">
                                  {car.name}
                                </span>
                                <span className="text-gray-500 font-semibold block text-[8px] mt-0.5">
                                  {car.alert}
                                </span>
                              </div>
                              <span
                                className={`${car.color} font-bold text-right`}
                              >
                                {car.level}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === 2 && (
                  <motion.div
                    key="tab-fleet"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.4 }}
                    className="flex-1 flex flex-col space-y-5 md:space-y-6"
                  >
                    {/* Top Row Cards */}
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-[#0a0f1d]/60 border border-white/5 hover:border-indigo-500/20 p-4 rounded-2xl flex flex-col justify-between shadow-md transition-all duration-300">
                        <span className="text-[8px] md:text-[9px] font-black text-gray-500 uppercase tracking-widest">
                          TOTAL REGISTERED FLEET
                        </span>
                        <div className="flex items-baseline justify-between mt-2">
                          <span className="text-base md:text-2xl font-black text-white">
                            312
                          </span>
                          <span className="text-[9px] md:text-[10px] font-bold text-green-400 bg-green-500/10 border border-green-500/20 px-1.5 py-0.5 rounded-md">
                            100% Taxed
                          </span>
                        </div>
                      </div>
                      <div className="bg-[#0a0f1d]/60 border border-white/5 hover:border-indigo-500/20 p-4 rounded-2xl flex flex-col justify-between shadow-md transition-all duration-300">
                        <span className="text-[8px] md:text-[9px] font-black text-gray-500 uppercase tracking-widest">
                          COURTESY ON LOAN
                        </span>
                        <div className="flex items-baseline justify-between mt-2">
                          <span className="text-base md:text-2xl font-black text-blue-400">
                            11 / 15
                          </span>
                          <span className="text-[9px] md:text-[10px] font-bold text-blue-400 bg-blue-500/10 border border-blue-500/20 px-1.5 py-0.5 rounded-md">
                            82% Util.
                          </span>
                        </div>
                      </div>
                      <div className="bg-[#0a0f1d]/60 border border-white/5 hover:border-indigo-500/20 p-4 rounded-2xl flex flex-col justify-between shadow-md transition-all duration-300">
                        <span className="text-[8px] md:text-[9px] font-black text-gray-500 uppercase tracking-widest">
                          INSPECTIONS STATUS
                        </span>
                        <div className="flex items-baseline justify-between mt-2">
                          <span className="text-base md:text-2xl font-black text-green-400">
                            100%
                          </span>
                          <span className="text-[9px] md:text-[10px] font-bold text-green-400 bg-green-500/10 border border-green-500/20 px-1.5 py-0.5 rounded-md">
                            Compliant
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Middle Section with Progress Bars */}
                    <div className="grid md:grid-cols-3 gap-5 flex-1 items-stretch">
                      {/* Vehicle Health bars */}
                      <div className="md:col-span-2 bg-[#0a0f1d]/60 border border-white/5 p-5 rounded-2xl flex flex-col justify-between h-[200px] md:h-[240px] shadow-lg">
                        <div>
                          <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                            COURTESY FLEET PERFORMANCE
                          </h4>
                          <span className="text-[9px] md:text-xs text-gray-500">
                            Utilization tracker per vehicle template
                          </span>
                        </div>

                        {/* Horizontal Health Bars */}
                        <div className="space-y-4 pt-3 flex-1 flex flex-col justify-center">
                          {[
                            {
                              name: "Corsa 1.2 (Red) - Active Loan",
                              health: 91,
                              color: "bg-blue-500",
                            },
                            {
                              name: "Golf 2.0 (Grey) - Active Loan",
                              health: 78,
                              color: "bg-indigo-500",
                            },
                            {
                              name: "Focus 1.0 (Blue) - Preparing",
                              health: 54,
                              color: "bg-purple-500",
                            },
                          ].map((car, idx) => (
                            <div key={idx} className="space-y-1">
                              <div className="flex justify-between text-[10px] text-gray-300 font-semibold">
                                <span>{car.name}</span>
                                <span>{car.health}% Utilization</span>
                              </div>
                              <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden border border-white/5">
                                <motion.div
                                  initial={{ width: 0 }}
                                  animate={{ width: `${car.health}%` }}
                                  transition={{ duration: 0.8 }}
                                  className={`h-full ${car.color}`}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Side Feed List */}
                      <div className="bg-[#0a0f1d]/60 border border-white/5 p-5 rounded-2xl flex flex-col justify-between h-[200px] md:h-[240px] shadow-lg">
                        <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3">
                          ACTIVE AGREEMENTS
                        </h4>
                        <div className="space-y-3.5 flex-1 overflow-y-auto pr-1">
                          {[
                            {
                              name: "David Jenkins (Golf)",
                              info: "Agrmt #402",
                              status: "Due today 17:00",
                              color: "text-blue-400",
                            },
                            {
                              name: "Sarah Jenkins (Focus)",
                              info: "Agrmt #403",
                              status: "Returned (Clean)",
                              color: "text-green-400",
                            },
                            {
                              name: "Michael Chang (Corsa)",
                              info: "Agrmt #404",
                              status: "Out (7d remaining)",
                              color: "text-indigo-400",
                            },
                            {
                              name: "Emma Watson (Fiesta)",
                              info: "Agrmt #405",
                              status: "Out (3d remaining)",
                              color: "text-indigo-400",
                            },
                          ].map((loan, idx) => (
                            <div
                              key={idx}
                              className="flex justify-between items-start text-[10px] border-b border-white/5 pb-2.5"
                            >
                              <div>
                                <span className="text-gray-200 font-bold block">
                                  {loan.name}
                                </span>
                                <span className="text-gray-500 font-semibold block text-[8px] mt-0.5">
                                  {loan.info}
                                </span>
                              </div>
                              <span
                                className={`${loan.color} font-bold text-right`}
                              >
                                {loan.status}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === 3 && (
                  <motion.div
                    key="tab-scheduling"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.4 }}
                    className="flex-1 flex flex-col space-y-5 md:space-y-6"
                  >
                    {/* Top Row Cards */}
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-[#0a0f1d]/60 border border-white/5 hover:border-purple-500/20 p-4 rounded-2xl flex flex-col justify-between shadow-md transition-all duration-300">
                        <span className="text-[8px] md:text-[9px] font-black text-gray-500 uppercase tracking-widest">
                          TODAY'S MOT BOOKINGS
                        </span>
                        <div className="flex items-baseline justify-between mt-2">
                          <span className="text-base md:text-2xl font-black text-white">
                            18
                          </span>
                          <span className="text-[9px] md:text-[10px] font-bold text-green-400 bg-green-500/10 border border-green-500/20 px-1.5 py-0.5 rounded-md">
                            12 Completed
                          </span>
                        </div>
                      </div>
                      <div className="bg-[#0a0f1d]/60 border border-white/5 hover:border-purple-500/20 p-4 rounded-2xl flex flex-col justify-between shadow-md transition-all duration-300">
                        <span className="text-[8px] md:text-[9px] font-black text-gray-500 uppercase tracking-widest">
                          INTERIM & MAJOR SERVICES
                        </span>
                        <div className="flex items-baseline justify-between mt-2">
                          <span className="text-base md:text-2xl font-black text-indigo-400">
                            24 Bookings
                          </span>
                          <span className="text-[9px] md:text-[10px] font-bold text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-1.5 py-0.5 rounded-md">
                            Capacity 90%
                          </span>
                        </div>
                      </div>
                      <div className="bg-[#0a0f1d]/60 border border-white/5 hover:border-purple-500/20 p-4 rounded-2xl flex flex-col justify-between shadow-md transition-all duration-300">
                        <span className="text-[8px] md:text-[9px] font-black text-gray-500 uppercase tracking-widest">
                          SMS ALERTS DISPATCHED
                        </span>
                        <div className="flex items-baseline justify-between mt-2">
                          <span className="text-base md:text-2xl font-black text-green-400">
                            45
                          </span>
                          <span className="text-[9px] md:text-[10px] font-bold text-green-400 bg-green-500/10 border border-green-500/20 px-1.5 py-0.5 rounded-md">
                            98% Deliv.
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Middle Section with SVG Calendar/Timeline */}
                    <div className="grid md:grid-cols-3 gap-5 flex-1 items-stretch">
                      {/* Timeline graphic */}
                      <div className="md:col-span-2 bg-[#0a0f1d]/60 border border-white/5 p-5 rounded-2xl flex flex-col justify-between h-[200px] md:h-[240px] shadow-lg">
                        <div>
                          <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                            WORKSHOP TIME SLOTS
                          </h4>
                          <span className="text-[9px] md:text-xs text-gray-500">
                            Live bay allocation feed
                          </span>
                        </div>

                        {/* Timeline Graphic */}
                        <div className="flex-1 flex flex-col justify-around pt-3">
                          {[
                            {
                              time: "09:30",
                              name: "David Roberts",
                              service: "Audi A3 - MOT + Major Service",
                              color: "bg-green-500",
                            },
                            {
                              time: "11:00",
                              name: "Jessica Taylor",
                              service: "BMW X5 - Aircon Regas & Clean",
                              color: "bg-indigo-500",
                            },
                            {
                              time: "13:30",
                              name: "Thomas Evans",
                              service: "Nissan Qashqai - Interim Service",
                              color: "bg-purple-500",
                            },
                          ].map((t, idx) => (
                            <div
                              key={idx}
                              className="flex items-center space-x-3 text-[10px] border-b border-white/5 pb-1"
                            >
                              <span className="font-bold text-purple-400 w-10">
                                {t.time}
                              </span>
                              <span
                                className={`w-2 h-2 rounded-full ${t.color} animate-pulse`}
                              />
                              <span className="text-gray-300 font-semibold">
                                {t.name}
                              </span>
                              <span className="text-gray-500 text-[8px] font-semibold italic">
                                {t.service}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Side Feed List */}
                      <div className="bg-[#0a0f1d]/60 border border-white/5 p-5 rounded-2xl flex flex-col justify-between h-[200px] md:h-[240px] shadow-lg">
                        <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3">
                          UPCOMING DIARY
                        </h4>
                        <div className="space-y-3.5 flex-1 overflow-y-auto pr-1">
                          {[
                            {
                              name: "Emma Smith",
                              service: "Brake Fluid",
                              time: "16:00",
                              color: "text-purple-400",
                            },
                            {
                              name: "James Wilson",
                              service: "Alignment",
                              time: "16:30",
                              color: "text-purple-400",
                            },
                            {
                              name: "Robert Harris",
                              service: "Diagnostics",
                              time: "17:00",
                              color: "text-indigo-400",
                            },
                            {
                              name: "Oliver Davies",
                              service: "Battery Check",
                              time: "17:30",
                              color: "text-gray-400",
                            },
                          ].map((appt, idx) => (
                            <div
                              key={idx}
                              className="flex justify-between items-center text-[10px] border-b border-white/5 pb-2.5"
                            >
                              <div>
                                <span className="text-gray-200 font-bold block">
                                  {appt.name}
                                </span>
                                <span className="text-gray-500 font-semibold block text-[8px] mt-0.5">
                                  {appt.service}
                                </span>
                              </div>
                              <span
                                className={`${appt.color} font-bold text-right`}
                              >
                                {appt.time}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 3. The Flying "Live Data Carrier" overlay with high-glow trailing tail */}
            <AnimatePresence>
              {isFlying && (
                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.6,
                    left: "50%",
                    top: "50%",
                    translateX: "-50%",
                    translateY: "-50%",
                  }}
                  animate={{
                    opacity: [0, 1, 1, 0],
                    scale: [0.6, 1.1, 1.1, 0.6],
                    left: [
                      "50%",
                      "50%",
                      menuPositions[tourSequence[activeTab].nextTab].left,
                      menuPositions[tourSequence[activeTab].nextTab].left,
                    ],
                    top: [
                      "50%",
                      "50%",
                      menuPositions[tourSequence[activeTab].nextTab].top,
                      menuPositions[tourSequence[activeTab].nextTab].top,
                    ],
                    translateX: ["-50%", "-50%", "0%", "0%"],
                    translateY: ["-50%", "-50%", "0%", "0%"],
                  }}
                  exit={{ opacity: 0, scale: 0.6 }}
                  transition={{
                    duration: 2,
                    ease: "easeInOut",
                  }}
                  className="absolute bg-gradient-to-r from-blue-500 to-indigo-600 border border-indigo-400 shadow-[0_0_30px_rgba(99,102,241,0.5)] px-4 py-2 rounded-xl flex items-center space-x-2.5 z-50 text-xs text-white font-bold pointer-events-none"
                  style={{ top: 0, left: 0 }}
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-white animate-ping" />
                  <span className="whitespace-nowrap tracking-wide">
                    {flyText}
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DashboardSection;
