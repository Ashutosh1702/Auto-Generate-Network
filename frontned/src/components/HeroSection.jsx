import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useAnimation,
} from "framer-motion";
import { FiPlay, FiTrendingUp, FiCheckCircle, FiStar, FiAlertTriangle, FiTruck, FiClipboard, FiUser, FiActivity } from "react-icons/fi";

// MovingCarsAnimation removed

// Simple number counter using framer-motion
const NumberCounter = ({ target, format }) => {
  const controls = useAnimation();
  const value = useMotionValue(0);
  useEffect(() => {
    controls.start({
      count: Number(target),
      transition: { duration: 1.2, ease: "easeOut" },
    });
  }, [target]);
  return (
    <motion.span
      style={{ opacity: 1, display: "inline-block" }}
      animate={controls}
      onUpdate={(latest) => {
        value.set(latest.count);
      }}
    >
      {format ? format(value.get()) : Math.round(value.get())}
    </motion.span>
  );
};

const HeroSection = () => {
  const containerVariant = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        when: "beforeChildren",
      },
    },
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-6 md:px-12 max-w-7xl mx-auto overflow-visible min-h-screen flex items-center">
      <style>{`.three-d{perspective:1200px;transform-style:preserve-3d;transition:transform .4s ease;}
.three-d:hover{transform:rotateX(2deg) rotateY(-2deg) scale(1.01);}`}</style>
      
      {/* Animated Background Gradients */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.05, 0.15, 0.05],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"
      />

      <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">
        {/* Left Column: Content */}
        <motion.div
          className="lg:col-span-6 space-y-8 text-left z-10"
          variants={containerVariant}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 bg-[#111827]/80 backdrop-blur-sm border border-indigo-500/30 px-4 py-2 rounded-full text-xs font-semibold text-indigo-300"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            <span>All-in-one Garage Management Suite</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]"
          >
            Run Your Garage <br className="hidden md:block" />
            Smarter with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">AGN</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 max-w-xl leading-relaxed"
          >
            The premium software choice for modern Workshops, MOT Centres & Tyre Specialists. Automate tasks, stream operations, and scale your revenue.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-4 items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-8 py-4 rounded-xl shadow-[0_0_20px_rgba(79,70,229,0.3)] transition-all cursor-pointer"
            >
              Book Free Demo
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 bg-[#111827]/80 backdrop-blur-md hover:bg-[#1f2937] text-white border border-white/10 font-semibold px-8 py-4 rounded-xl transition-all cursor-pointer"
            >
              <FiPlay className="text-indigo-400" />
              <span>Watch Live Demo</span>
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center space-x-4 pt-6 border-t border-white/10"
          >
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <FiStar key={i} className="fill-current" />
              ))}
            </div>
            <span className="text-sm text-gray-400">
              Trusted by{" "}
              <span className="text-white font-semibold">2,500+</span> Garages
            </span>
          </motion.div>
        </motion.div>

        {/* Right Column: Visual Mockup */}
        <div className="lg:col-span-6 relative mt-16 lg:mt-0 flex justify-center items-center three-d">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.8 }}
            className="relative w-full max-w-[550px] z-20"
          >
            {/* Desktop Dashboard Mockup (Center-Back) */}
            <div className="relative w-full border border-white/10 rounded-2xl bg-[#0c1222]/90 backdrop-blur-md shadow-2xl z-20 overflow-hidden shadow-indigo-500/10">
              {/* Browser Header Bar */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-[#050816]/70">
                <div className="flex space-x-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ef4444]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#eab308]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#22c55e]" />
                </div>
                <div className="text-[9px] text-gray-500 bg-[#111827] px-3 py-0.5 rounded-md border border-white/5 font-mono">
                  autogarage.network/portal
                </div>
                <div className="w-12 h-2" />
              </div>

              {/* Dashboard Content */}
              <div className="flex h-[280px] md:h-[320px] text-gray-300 font-sans select-none">
                {/* Left Sidebar */}
                <div className="w-[24%] border-r border-white/5 bg-[#060a17]/80 p-2.5 flex flex-col justify-between">
                  <div className="space-y-3">
                    {/* Logo */}
                    <div className="flex items-center space-x-1.5 px-1 py-0.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
                      <span className="text-[8px] font-black tracking-widest text-cyan-400 uppercase">AGN-OS</span>
                    </div>
                    {/* Navigation Items */}
                    <div className="space-y-1.5">
                      {[
                        { name: "Dashboard", active: true },
                        { name: "Bookings", active: false },
                        { name: "Maintenance", active: false },
                        { name: "Fleet", active: false },
                        { name: "Inventory", active: false }
                      ].map((item, idx) => (
                        <div
                          key={idx}
                          className={`flex items-center space-x-2 px-2 py-1.5 rounded-md text-[8px] font-bold ${
                            item.active ? "bg-white/5 text-white border-l border-cyan-400" : "text-gray-500 hover:text-gray-400"
                          }`}
                        >
                          <span className={`w-1 h-1 rounded-full ${item.active ? "bg-cyan-400" : "bg-gray-700"}`} />
                          <span>{item.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Profile */}
                  <div className="flex items-center space-x-2 bg-[#0b0f1d]/60 border border-white/5 rounded-lg p-1.5">
                    <div className="w-4 h-4 rounded bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-[6px] font-bold text-white">
                      AR
                    </div>
                    <div className="leading-none hidden md:block">
                      <span className="text-[6.5px] text-white font-bold block">Alex R.</span>
                      <span className="text-[5px] text-gray-500 block">Admin</span>
                    </div>
                  </div>
                </div>

                {/* Main View */}
                <div className="flex-1 bg-[#030611] p-3 flex flex-col justify-between overflow-hidden">
                  {/* Header Stat row */}
                  <div className="grid grid-cols-3 gap-2">
                    <div className="bg-slate-900/80 border border-white/5 rounded-lg p-2 flex flex-col justify-center">
                      <span className="text-[6.5px] text-gray-500 font-bold uppercase tracking-wider">Scheduled Jobs</span>
                      <span className="text-[10px] md:text-[11px] font-black text-white mt-0.5">37 <span className="text-[6.5px] text-gray-400 font-normal">this month</span></span>
                    </div>
                    <div className="bg-slate-900/80 border border-white/5 rounded-lg p-2 flex flex-col justify-center">
                      <span className="text-[6.5px] text-gray-500 font-bold uppercase tracking-wider">Today's Revenue</span>
                      <span className="text-[10px] md:text-[11px] font-black text-green-400 mt-0.5">£1,240.50</span>
                    </div>
                    <div className="bg-slate-900/80 border border-white/5 rounded-lg p-2 flex flex-col justify-center">
                      <span className="text-[6.5px] text-gray-500 font-bold uppercase tracking-wider">Bay Occupancy</span>
                      <span className="text-[10px] md:text-[11px] font-black text-cyan-400 mt-0.5">85%</span>
                    </div>
                  </div>

                  {/* Center content: List table & Mini Scheduler Calendar */}
                  <div className="flex-grow grid grid-cols-12 gap-2 mt-2">
                    {/* Table list */}
                    <div className="col-span-8 bg-[#060a17]/60 border border-white/5 rounded-lg p-2 flex flex-col">
                      <div className="flex justify-between items-center pb-1.5 border-b border-white/5">
                        <span className="text-[7px] text-gray-400 font-bold">Active Customer Queue</span>
                        <span className="text-[6px] text-indigo-400 font-semibold cursor-pointer hover:underline">View All</span>
                      </div>
                      <div className="space-y-1.5 mt-1.5">
                        {[
                          { reg: "LG24 KXD", car: "BMW 3-Series", service: "Brake Repair", status: "In Progress", statusColor: "text-amber-400 bg-amber-400/10 border-amber-400/20" },
                          { reg: "VO68 FJK", car: "Tesla Model Y", service: "MOT Inspection", status: "Queued", statusColor: "text-blue-400 bg-blue-400/10 border-blue-400/20" },
                          { reg: "HJ19 LCP", car: "Ford Transit", service: "Diagnostics", status: "Completed", statusColor: "text-green-400 bg-green-400/10 border-green-400/20" }
                        ].map((row, idx) => (
                          <div key={idx} className="flex items-center justify-between text-[7px] bg-[#0b1021]/60 p-1.5 rounded border border-white/5">
                            <div className="flex items-center space-x-1.5">
                              <span className="px-1 py-0.5 bg-yellow-400/10 text-yellow-500 rounded text-[6px] font-bold border border-yellow-500/20">{row.reg}</span>
                              <span className="text-white font-semibold truncate max-w-[50px]">{row.car}</span>
                            </div>
                            <span className="text-gray-400 truncate max-w-[45px]">{row.service}</span>
                            <span className={`px-1 rounded-full text-[5.5px] font-bold border ${row.statusColor}`}>{row.status}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Mini Calendar scheduler */}
                    <div className="col-span-4 bg-[#060a17]/60 border border-white/5 rounded-lg p-2 flex flex-col justify-between">
                      <span className="text-[7px] text-gray-400 font-bold pb-1 border-b border-white/5">Calendar</span>
                      {/* Calendar grid representation */}
                      <div className="grid grid-cols-7 gap-0.5 mt-1 text-center text-[5.5px]">
                        {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
                          <span key={i} className="text-gray-600 font-black text-[5px]">{d}</span>
                        ))}
                        {[...Array(21)].map((_, i) => {
                          const isToday = i === 12; // let's highlight one day
                          return (
                            <span
                              key={i}
                              className={`w-3 h-3 flex items-center justify-center rounded-full mx-auto ${
                                isToday ? "bg-indigo-600 text-white font-bold" : "text-gray-400"
                              }`}
                            >
                              {i + 1}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Row */}
                  <div className="mt-2 pt-2 border-t border-white/5 flex items-center justify-between">
                    <span className="text-[6.5px] text-gray-500 font-bold">AGN SYSTEM VERSION 4.2.1</span>
                    <div className="flex space-x-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-[6.5px] text-green-400 font-bold">Database Connected</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Mobile Booking Panel (Front-Left) */}
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: [-5, 5, -5] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -left-10 md:-left-16 bottom-[-20px] md:bottom-[-40px] z-30 w-[170px] md:w-[185px] rounded-[28px] border border-white/10 bg-[#070c18] p-3 shadow-2xl drop-shadow-[0_0_20px_rgba(79,70,229,0.2)]"
              style={{ willChange: "transform" }}
            >
              {/* Status Bar */}
              <div className="flex justify-between items-center text-gray-400 text-[6.5px] px-2 pb-2 select-none">
                <span>10:42</span>
                <div className="flex space-x-1">
                  <span>5G</span>
                  <span>100%</span>
                </div>
              </div>

              {/* Header */}
              <div className="flex items-center space-x-1 bg-white/5 rounded-xl px-2 py-1 border border-white/5 mb-3 select-none">
                <div className="w-3.5 h-3.5 rounded-full bg-indigo-500 flex items-center justify-center text-[7px] text-white">
                  S
                </div>
                <span className="text-[8px] text-white font-black">AGN Booking</span>
              </div>

              {/* Title */}
              <div className="text-center mb-2 select-none">
                <span className="text-[8px] text-gray-400 block font-semibold">Select Date & Time</span>
              </div>

              {/* Calendar mini grid */}
              <div className="bg-[#0b1021] border border-white/5 rounded-xl p-2 mb-2 select-none">
                <div className="flex justify-between items-center text-[7px] text-white font-bold mb-1 pb-1 border-b border-white/5">
                  <span>August 2026</span>
                </div>
                <div className="grid grid-cols-7 gap-0.5 text-[6px] text-center text-gray-400">
                  {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
                    <span key={i} className="text-gray-600 font-black text-[5.5px]">{d}</span>
                  ))}
                  {[...Array(21)].map((_, i) => {
                    const isSelected = i === 14; // highlight day 15
                    return (
                      <span
                        key={i}
                        className={`w-3.5 h-3.5 flex items-center justify-center rounded-full mx-auto ${
                          isSelected ? "bg-indigo-600 text-white font-bold" : ""
                        }`}
                      >
                        {i + 7}
                      </span>
                    );
                  })}
                </div>
              </div>

              {/* Time slots */}
              <div className="grid grid-cols-2 gap-1 mb-3 select-none">
                {["10:00 AM", "11:30 AM", "02:15 PM", "03:45 PM"].map((t, i) => (
                  <div
                    key={i}
                    className={`text-[6.5px] font-bold text-center py-1 rounded-md border ${
                      i === 0 ? "bg-indigo-600/25 border-indigo-500 text-white" : "bg-white/5 border-white/5 text-gray-400"
                    }`}
                  >
                    {t}
                  </div>
                ))}
              </div>

              {/* Button */}
              <button className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-1.5 rounded-xl text-[8px] transition-colors shadow-lg shadow-indigo-600/30 cursor-pointer">
                CONFIRM BOOKING
              </button>
            </motion.div>

            {/* Floating Analytics Card (Front-Right) */}
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: [5, -5, 5] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -right-6 md:-right-10 top-[-20px] md:top-[-30px] z-30 w-[175px] md:w-[195px] rounded-xl border border-white/10 bg-[#070c18] p-3 shadow-2xl drop-shadow-[0_0_20px_rgba(34,211,238,0.15)]"
              style={{ willChange: "transform" }}
            >
              {/* Card Header */}
              <div className="flex justify-between items-center border-b border-white/5 pb-2 select-none">
                <div>
                  <span className="text-[6px] text-gray-500 block font-bold uppercase tracking-wider">System Analytics</span>
                  <span className="text-[9px] text-white font-black">Performance</span>
                </div>
                <span className="text-[7px] text-green-400 font-bold bg-green-500/10 border border-green-500/20 px-1 py-0.5 rounded">+18.4%</span>
              </div>

              {/* Graph legend */}
              <div className="flex space-x-2 my-2 text-[6px] text-gray-400 select-none">
                <div className="flex items-center space-x-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>Gross Revenue</span>
                </div>
                <div className="flex items-center space-x-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                  <span>Net Income</span>
                </div>
              </div>

              {/* SVG Graph illustration */}
              <div className="h-16 flex items-end select-none">
                <svg viewBox="0 0 160 60" className="w-full h-full overflow-visible">
                  {/* Grid lines */}
                  <line x1="0" y1="15" x2="160" y2="15" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
                  <line x1="0" y1="30" x2="160" y2="30" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
                  <line x1="0" y1="45" x2="160" y2="45" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />

                  {/* Path 1: Gross Revenue (Cyan) */}
                  <path
                    d="M 0 50 Q 30 40 60 20 T 120 15 T 160 5"
                    fill="none"
                    stroke="#22d3ee"
                    strokeWidth="1.5"
                  />
                  {/* Path 2: Net Income (Indigo) */}
                  <path
                    d="M 0 55 Q 30 48 60 35 T 120 28 T 160 18"
                    fill="none"
                    stroke="#6366f1"
                    strokeWidth="1.5"
                  />

                  {/* Points */}
                  <circle cx="60" cy="20" r="2" fill="#22d3ee" />
                  <circle cx="120" cy="28" r="2" fill="#6366f1" />
                </svg>
              </div>

              {/* Months X-Axis */}
              <div className="flex justify-between text-[6px] text-gray-500 mt-2 font-bold px-1 select-none">
                <span>Dec</span>
                <span>Jan</span>
                <span>Feb</span>
                <span>Mar</span>
                <span>Apr</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      

    </section>
  );
};

export default HeroSection;
