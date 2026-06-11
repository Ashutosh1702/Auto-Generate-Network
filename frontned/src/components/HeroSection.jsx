import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useAnimation,
} from "framer-motion";
import { FiPlay, FiTrendingUp, FiCheckCircle, FiStar, FiAlertTriangle, FiTruck, FiClipboard, FiUser, FiActivity } from "react-icons/fi";

// MovingCarsAnimation component simulating realistic highway traffic/driving with headlight glow
const MovingCarsAnimation = () => {
  return (
    <div className="absolute bottom-4 left-0 right-0 h-16 overflow-hidden pointer-events-none z-10 w-full bg-[#050816]/40 backdrop-blur-[2px] border-y border-white/5">
      <svg className="hidden">
        <defs>
          <linearGradient id="headlight-glow" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="taillight-glow" x1="100%" y1="50%" x2="0%" y2="50%">
            <stop offset="0%" stopColor="#f43f5e" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#f43f5e" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Road Lane Lines */}
      <div className="absolute top-1/2 left-0 right-0 h-0.5 border-t border-dashed border-indigo-500/10" />

      {/* Car 1: Sports Car (moving left to right) */}
      <motion.div
        initial={{ x: "-20%" }}
        animate={{ 
          x: ["-20%", "120%"],
          y: [2, 3.5, 1.5, 3, 2] // realistic engine/suspension vibration
        }}
        transition={{ 
          x: { repeat: Infinity, duration: 14, ease: "linear" },
          y: { repeat: Infinity, duration: 0.4, ease: "easeInOut" }
        }}
        className="absolute left-0 w-24 h-8 text-indigo-400 opacity-60"
      >
        <svg viewBox="0 0 120 40" fill="currentColor">
          <polygon points="90,25 120,15 120,35" fill="url(#headlight-glow)" />
          <polygon points="10,25 -20,18 -20,32" fill="url(#taillight-glow)" />
          {/* Sports Car silhouette */}
          <path d="M10 25 L15 15 Q25 10 35 10 L65 10 Q75 13 80 18 L90 23 Q95 25 95 28 L95 32 L85 32 Q85 28 80 28 Q75 28 75 32 L25 32 Q25 28 20 28 Q15 28 15 32 L5 32 L5 28 Z" />
          {/* Wheels */}
          <circle cx="20" cy="32" r="5" fill="#0c1222" stroke="currentColor" strokeWidth="2" />
          <circle cx="78" cy="32" r="5" fill="#0c1222" stroke="currentColor" strokeWidth="2" />
          {/* Cabin window */}
          <path d="M35 12 L50 12 L50 18 L32 18 Z" fill="#050816" opacity="0.8" />
          <path d="M53 12 L63 12 L68 18 L53 18 Z" fill="#050816" opacity="0.8" />
        </svg>
      </motion.div>

      {/* Car 2: Fast EV (moving right to left) */}
      <motion.div
        initial={{ x: "120%" }}
        animate={{ 
          x: ["120%", "-20%"],
          y: [10, 11.5, 9.5, 11, 10]
        }}
        transition={{ 
          x: { repeat: Infinity, duration: 10, ease: "linear", delay: 2 },
          y: { repeat: Infinity, duration: 0.35, ease: "easeInOut" }
        }}
        className="absolute left-0 w-24 h-8 text-cyan-400 opacity-70"
      >
        <svg viewBox="0 0 120 40" fill="currentColor" className="transform scale-x-[-1]">
          <polygon points="90,25 120,15 120,35" fill="url(#headlight-glow)" />
          <polygon points="10,25 -20,18 -20,32" fill="url(#taillight-glow)" />
          {/* Modern Sedan Silhouette */}
          <path d="M8 25 L15 15 Q25 10 38 10 L68 10 Q78 12 82 17 L90 22 Q94 24 94 28 L94 32 L84 32 Q84 28 79 28 Q74 28 74 32 L26 32 Q26 28 21 28 Q16 28 16 32 L8 32 Z" />
          {/* Wheels */}
          <circle cx="21" cy="32" r="5" fill="#0c1222" stroke="currentColor" strokeWidth="2" />
          <circle cx="79" cy="32" r="5" fill="#0c1222" stroke="currentColor" strokeWidth="2" />
          {/* Cabin window */}
          <path d="M35 12 L50 12 L50 18 L32 18 Z" fill="#050816" opacity="0.8" />
          <path d="M53 12 L65 12 L70 18 L53 18 Z" fill="#050816" opacity="0.8" />
        </svg>
      </motion.div>
    </div>
  );
};

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
  const modules = [
    {
      id: "dashboard",
      name: "Dashboard",
      icon: <FiTrendingUp />,
      color: "from-blue-500 to-cyan-400",
      glowColor: "rgba(56, 189, 248, 0.4)",
      areaPath: "M0 120 C 30 90, 60 110, 90 70 C 120 40, 150 80, 180 50 C 210 20, 240 60, 270 30 C 300 10, 330 50, 360 20 L 360 150 L 0 150 Z",
      linePath: "M0 120 C 30 90, 60 110, 90 70 C 120 40, 150 80, 180 50 C 210 20, 240 60, 270 30 C 300 10, 330 50, 360 20",
      chartStroke: "#38bdf8",
      feed: [
        "Invoice #4928 generated - £340.00",
        "Booking confirmed - Ford Focus MOT",
        "Diagnostic feedback synced to database"
      ],
      kpis: [
        { label: "Jobs Done", value: 1204, unit: "", color: "text-blue-400", icon: <FiCheckCircle className="w-5 h-5" /> },
        { label: "Revenue", value: 86540, unit: "£", change: "+24.5%", color: "text-green-400", icon: <FiTrendingUp className="w-5 h-5" /> }
      ],
      sidebarMetrics: [
        { label: "Active Jobs", value: 320, change: "+8.4%" },
        { label: "Maintenance", value: 156, change: "+5.7%" },
        { label: "Total Vehicles", value: 8432, change: "+12.5%" },
        { label: "Customers", value: 3682, change: "+10.1%" }
      ]
    },
    {
      id: "maintenance",
      name: "Maintenance",
      icon: <FiAlertTriangle />,
      color: "from-rose-500 to-amber-500",
      glowColor: "rgba(244, 63, 94, 0.4)",
      areaPath: "M0 140 L 40 100 L 80 130 L 120 60 L 160 110 L 200 40 L 240 90 L 280 20 L 320 70 L 360 30 L 360 150 L 0 150 Z",
      linePath: "M0 140 L 40 100 L 80 130 L 120 60 L 160 110 L 200 40 L 240 90 L 280 20 L 320 70 L 360 30",
      chartStroke: "#f43f5e",
      feed: [
        "BMW 3-Series: Brake wear alert triggered",
        "Bay #2: Alternator replacement complete",
        "Diagnostic scanned: Tesla Model Y"
      ],
      kpis: [
        { label: "Diagnostics", value: 146, unit: "", color: "text-rose-400", icon: <FiAlertTriangle className="w-5 h-5" /> },
        { label: "Bay Load", value: 84, unit: "%", change: "+5.0%", color: "text-amber-400", icon: <FiActivity className="w-5 h-5" /> }
      ],
      sidebarMetrics: [
        { label: "Critical Alerts", value: 8, change: "+2.0%" },
        { label: "Pending Repairs", value: 24, change: "+5.1%" },
        { label: "Parts Ordered", value: 95, change: "+20%" },
        { label: "Repair Rating", value: 98.4, unit: "%", change: "+1.2%" }
      ]
    },
    {
      id: "fleet",
      name: "Fleet",
      icon: <FiTruck />,
      color: "from-indigo-500 to-blue-500",
      glowColor: "rgba(99, 102, 241, 0.4)",
      areaPath: "M0 80 C 40 80, 80 120, 120 90 C 160 60, 200 100, 240 70 C 280 40, 320 50, 360 40 L 360 150 L 0 150 Z",
      linePath: "M0 80 C 40 80, 80 120, 120 90 C 160 60, 200 100, 240 70 C 280 40, 320 50, 360 40",
      chartStroke: "#6366f1",
      feed: [
        "Golf V courtesy car returned clean",
        "Transit loan agreement activated",
        "Fleet health assessment: 100% compliant"
      ],
      kpis: [
        { label: "Active Loans", value: 11, unit: "", color: "text-indigo-400", icon: <FiTruck className="w-5 h-5" /> },
        { label: "Fleet Util.", value: 82, unit: "%", change: "+10.0%", color: "text-cyan-400", icon: <FiActivity className="w-5 h-5" /> }
      ],
      sidebarMetrics: [
        { label: "Total Fleet Size", value: 15, change: "Stable" },
        { label: "Inspections Pending", value: 0, change: "None" },
        { label: "Agreements Active", value: 11, change: "+10.0%" },
        { label: "Customer Rating", value: 4.9, unit: "/5", change: "+4.1%" }
      ]
    },
    {
      id: "inventory",
      name: "Inventory",
      icon: <FiClipboard />,
      color: "from-cyan-500 to-emerald-400",
      glowColor: "rgba(6, 182, 212, 0.4)",
      areaPath: "M0 130 L 60 130 L 60 90 L 120 90 L 120 110 L 180 110 L 180 60 L 240 60 L 240 75 L 300 75 L 300 40 L 360 40 L 360 150 L 0 150 Z",
      linePath: "M0 130 L 60 130 L 60 90 L 120 90 L 120 110 L 180 110 L 180 60 L 240 60 L 240 75 L 300 75 L 300 40 L 360 40",
      chartStroke: "#06b6d4",
      feed: [
        "Supplier GSF: Brake pad order dispatched",
        "Inventory check completed (Bays 1-3)",
        "Low stock warning: 5w30 Engine Oil"
      ],
      kpis: [
        { label: "Parts Count", value: 14820, unit: "", color: "text-cyan-400", icon: <FiClipboard className="w-5 h-5" /> },
        { label: "Stock Value", value: 184200, unit: "£", change: "+15%", color: "text-emerald-400", icon: <FiTrendingUp className="w-5 h-5" /> }
      ],
      sidebarMetrics: [
        { label: "Low Stock Items", value: 3, change: "-40%" },
        { label: "Supplier Feeds", value: 12, change: "+4.2%" },
        { label: "Tyres in Stock", value: 342, change: "+15%" },
        { label: "Order Sync Time", value: 12, unit: "ms", change: "Optimal" }
      ]
    },
    {
      id: "customer",
      name: "Customers",
      icon: <FiUser />,
      color: "from-purple-500 to-pink-500",
      glowColor: "rgba(168, 85, 247, 0.4)",
      areaPath: "M0 140 Q 90 120, 180 80 T 360 20 L 360 150 L 0 150 Z",
      linePath: "M0 140 Q 90 120, 180 80 T 360 20",
      chartStroke: "#a855f7",
      feed: [
        "New account registered - Emma Watson",
        "SMS MOT reminder sent to Sarah Jenkins",
        "Customer portal review: 5/5 stars"
      ],
      kpis: [
        { label: "Active Members", value: 2430, unit: "", color: "text-purple-400", icon: <FiUser className="w-5 h-5" /> },
        { label: "Retention", value: 92, unit: "%", change: "+2.3%", color: "text-pink-400", icon: <FiActivity className="w-5 h-5" /> }
      ],
      sidebarMetrics: [
        { label: "SMS Alerts Sent", value: 1204, change: "+10.1%" },
        { label: "Satisfaction", value: 4.85, unit: "/5", change: "+2.3%" },
        { label: "New Leads", value: 38, change: "+12.5%" },
        { label: "Booking Retainer", value: 89, unit: "%", change: "+1.5%" }
      ]
    }
  ];

  const [activeIdx, setActiveIdx] = useState(0);
  const [angle, setAngle] = useState(0);
  const [isRotating, setIsRotating] = useState(false);

  // Autoplay pause timer controller
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsRotating(true);
    }, 5500);

    return () => clearTimeout(timer);
  }, [activeIdx]);

  // Tick loop when isRotating is true
  useEffect(() => {
    if (!isRotating) return;

    let animId;
    let currentAngle = 0;
    const speed = 2.4;

    const tick = () => {
      currentAngle += speed;
      if (currentAngle >= 360) {
        setAngle(0);
        setIsRotating(false);
        setActiveIdx((prev) => (prev + 1) % 5);
      } else {
        setAngle(currentAngle);
        animId = requestAnimationFrame(tick);
      }
    };

    animId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animId);
  }, [isRotating]);

  const activeModule = modules[activeIdx];

  const handleModuleClick = (idx) => {
    setIsRotating(false);
    setAngle(0);
    setActiveIdx(idx);
  };

  // Calculate coordinates with clockwise speed variation (accelerate in front, decelerate in back)
  const getCarCoords = (carAngle, rx, ry) => {
    const radAngle = (carAngle * Math.PI) / 180;
    const speedAdjustedAngle = carAngle + 12 * Math.sin(radAngle);
    
    const rad = (speedAdjustedAngle * Math.PI) / 180;
    const x = rx * Math.cos(rad);
    const y = ry * Math.sin(rad);
    
    return { x, y, rad };
  };

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
.three-d:hover{transform:rotateX(3deg) rotateY(-3deg) scale(1.02);}`}</style>
      
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
            {/* Browser Mockup Box */}
            <div className="relative w-full border border-white/10 rounded-2xl bg-[#0c1222]/80 backdrop-blur-md shadow-2xl z-20 overflow-hidden shadow-indigo-500/10">
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-[#050816]/60">
                <div className="flex space-x-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ef4444]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#eab308]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#22c55e]" />
                </div>
                <div className="text-[10px] text-gray-500 bg-[#111827] px-3 py-1 rounded-md border border-white/5">
                  autogarage.network/portal
                </div>
                <div className="w-12 h-2" />
              </div>
              
              {/* Animated Live OS scene replacing the static hero illustration */}
              <div className="relative overflow-hidden aspect-[16/10] bg-[#030611] select-none">
                
                {/* Ambient floating particles inside mockup */}
                <div className="absolute inset-0 pointer-events-none opacity-30">
                  {[...Array(12)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                      style={{
                        left: `${(i * 17) % 100}%`,
                        top: `${(i * 29) % 100}%`,
                      }}
                      animate={{
                        y: [0, -15, 0],
                        opacity: [0.2, 0.8, 0.2],
                      }}
                      transition={{
                        duration: 3 + (i % 3),
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </div>

                <div className="w-full h-full flex overflow-hidden text-[9px] md:text-[11px] font-sans relative">
                  
                  {/* Left Sidebar Navigation Panel */}
                  <div className="w-[24%] h-full border-r border-white/5 bg-[#060a17]/90 p-2 flex flex-col justify-between z-10">
                    <div className="space-y-4">
                      {/* OS Brand logo */}
                      <div className="flex items-center space-x-1.5 px-1 py-1">
                        <span className="flex h-1.5 w-1.5 relative">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-cyan-500"></span>
                        </span>
                        <span className="text-[8px] font-black tracking-widest text-cyan-400 uppercase leading-none">
                          AGN-OS
                        </span>
                      </div>
                      
                      {/* Modules list */}
                      <div className="space-y-1">
                        {modules.map((m, idx) => {
                          const isActive = idx === activeIdx;
                          return (
                            <div
                              key={m.id}
                              onClick={() => handleModuleClick(idx)}
                              className={`flex items-center space-x-2 px-2 py-1.5 rounded-lg cursor-pointer transition-all duration-300 relative overflow-hidden ${
                                isActive ? "text-white" : "text-gray-500 hover:text-gray-300"
                              }`}
                            >
                              {isActive && (
                                <motion.div
                                  layoutId="active-os-bg"
                                  className={`absolute inset-0 bg-gradient-to-r ${m.color} opacity-20`}
                                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                              )}
                              {isActive && (
                                <motion.div
                                  layoutId="active-os-bar"
                                  className="absolute left-0 top-1/4 bottom-1/4 w-0.5 bg-cyan-400 rounded-r"
                                />
                              )}
                              <span className={`text-[10px] ${isActive ? "text-cyan-400" : "text-gray-500"}`}>
                                {m.icon}
                              </span>
                              <span className="font-bold text-[8px] md:text-[9.5px] tracking-wide whitespace-nowrap">{m.name}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    
                    {/* Logged admin */}
                    <div className="bg-[#0b0f1d]/60 border border-white/5 rounded-xl p-1 flex items-center space-x-2">
                      <div className="w-5 h-5 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 text-white flex items-center justify-center text-[7px] font-bold">
                        AR
                      </div>
                      <div className="overflow-hidden leading-none hidden md:block">
                        <span className="text-[7px] text-white font-bold block">Alex R.</span>
                        <span className="text-[5px] text-gray-500 font-semibold block mt-0.5">Admin</span>
                      </div>
                    </div>
                  </div>

                  {/* Center Telemetry & Visualizer panel */}
                  <div className="w-[48%] h-full p-2.5 md:p-3 flex flex-col justify-between z-10 relative">
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="text-[7px] text-gray-500 font-black tracking-widest uppercase block">
                          LIVE TELEMETRY VIEW
                        </span>
                        <h4 className="text-xs md:text-sm font-black text-white leading-none mt-0.5 flex items-center space-x-1.5">
                          <span>{activeModule.name}</span>
                          <span className="text-[7px] bg-green-500/10 border border-green-500/30 text-green-400 px-1 rounded font-bold animate-pulse leading-normal">
                            LIVE
                          </span>
                        </h4>
                      </div>
                    </div>

                    {/* 3D Center Wheel Rim + Orbiting Cars Visual Centerpiece */}
                    <div className="flex-grow flex items-center justify-center relative my-2 overflow-hidden h-[120px] md:h-[130px] w-full">
                      {/* Perspective compressed guides */}
                      <svg className="absolute inset-0 w-full h-full pointer-events-none">
                        <ellipse cx="50%" cy="50%" rx="40%" ry="26%" fill="none" stroke="rgba(255,255,255,0.01)" strokeWidth="1.5" />
                        <ellipse cx="50%" cy="50%" rx="40%" ry="26%" fill="none" stroke="rgba(34,211,238,0.1)" strokeWidth="1" strokeDasharray="4,4" />
                        <ellipse cx="50%" cy="50%" rx="32%" ry="20%" fill="none" stroke="rgba(255,255,255,0.005)" strokeWidth="1" />
                        <ellipse cx="50%" cy="50%" rx="32%" ry="20%" fill="none" stroke="rgba(99,102,241,0.06)" strokeWidth="1" strokeDasharray="3,3" />
                      </svg>

                      {/* Large rotating 3D Alloy Wheel/Rim */}
                      <div
                        style={{ transform: `rotate(${angle}deg)` }}
                        className="z-10 absolute flex items-center justify-center pointer-events-none"
                      >
                        <svg viewBox="0 0 200 200" className="w-24 h-24 md:w-28 md:h-28 text-cyan-400 drop-shadow-[0_0_18px_rgba(34,211,238,0.4)]">
                          <defs>
                            <filter id="neon-glow-rim" x="-20%" y="-20%" width="140%" height="140%">
                              <feGaussianBlur stdDeviation="5" result="blur" />
                              <feMerge>
                                <feMergeNode in="blur" />
                                <feMergeNode in="SourceGraphic" />
                              </feMerge>
                            </filter>
                            <linearGradient id="chrome-light" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#f3f4f6" />
                              <stop offset="30%" stopColor="#9ca3af" />
                              <stop offset="50%" stopColor="#ffffff" />
                              <stop offset="70%" stopColor="#4b5563" />
                              <stop offset="100%" stopColor="#1f2937" />
                            </linearGradient>
                            <linearGradient id="chrome-dark" x1="100%" y1="0%" x2="0%" y2="100%">
                              <stop offset="0%" stopColor="#374151" />
                              <stop offset="50%" stopColor="#1f2937" />
                              <stop offset="100%" stopColor="#111827" />
                            </linearGradient>
                            <radialGradient id="rubber-tire" cx="50%" cy="50%" r="50%">
                              <stop offset="70%" stopColor="#080c14" />
                              <stop offset="85%" stopColor="#1f2937" />
                              <stop offset="95%" stopColor="#0a0c12" />
                              <stop offset="100%" stopColor="#040608" />
                            </radialGradient>
                          </defs>

                          {/* Outer Tire */}
                          <circle cx="100" cy="100" r="94" fill="url(#rubber-tire)" />
                          
                          {/* Tire Treads */}
                          {[...Array(36)].map((_, i) => (
                            <rect
                              key={i}
                              x="97"
                              y="6"
                              width="6"
                              height="8"
                              rx="1"
                              fill="#111827"
                              opacity="0.85"
                              transform={`rotate(${i * 10} 100 100)`}
                            />
                          ))}

                          {/* Outer Cyan Neon Ring */}
                          <circle cx="100" cy="100" r="82" fill="none" stroke="#22d3ee" strokeWidth="2.5" filter="url(#neon-glow-rim)" />
                          
                          {/* Outer Rim Lip */}
                          <circle cx="100" cy="100" r="76" fill="none" stroke="url(#chrome-light)" strokeWidth="3" />
                          <circle cx="100" cy="100" r="73" fill="#060919" stroke="#000000" strokeWidth="2" />

                          {/* Rim Spokes (10 Spokes with 3D Depth shading) */}
                          {[...Array(10)].map((_, i) => (
                            <g key={i} transform={`rotate(${i * 36} 100 100)`}>
                              {/* Spoke Left (Highlight) */}
                              <path
                                d="M96 100 L93 28 L100 22 L100 100 Z"
                                fill="url(#chrome-light)"
                                opacity="0.95"
                              />
                              {/* Spoke Right (Shadow) */}
                              <path
                                d="M100 100 L100 22 L107 28 L104 100 Z"
                                fill="url(#chrome-dark)"
                                opacity="0.9"
                              />
                              {/* Spoke Inner Neon Accent */}
                              <line
                                x1="100"
                                y1="30"
                                x2="100"
                                y2="68"
                                stroke="#22d3ee"
                                strokeWidth="1.5"
                                filter="url(#neon-glow-rim)"
                                opacity="0.9"
                              />
                            </g>
                          ))}

                          {/* Inner Rim Line */}
                          <circle cx="100" cy="100" r="28" fill="none" stroke="url(#chrome-light)" strokeWidth="2" />
                          
                          {/* Center Hub cover */}
                          <circle cx="100" cy="100" r="22" fill="url(#chrome-dark)" stroke="#000" strokeWidth="1.5" />
                          
                          {/* 5 Wheel Lug Nuts */}
                          {[...Array(5)].map((_, i) => (
                            <circle
                              key={i}
                              cx="100"
                              cy="87"
                              r="2.5"
                              fill="url(#chrome-light)"
                              stroke="#000"
                              strokeWidth="0.5"
                              transform={`rotate(${i * 72} 100 100)`}
                            />
                          ))}

                          {/* Logo Area */}
                          <circle cx="100" cy="100" r="9" fill="#030611" stroke="url(#chrome-light)" strokeWidth="1" />
                          <circle cx="100" cy="100" r="5" fill="#22d3ee" filter="url(#neon-glow-rim)" />
                          <circle cx="100" cy="100" r="2.5" fill="#ffffff" />
                        </svg>
                      </div>

                      {/* 3D Elliptical Orbiting Cars (Clockwise with dynamic tangent rotation) */}
                      {[
                        {
                          id: 1,
                          offset: 0,
                          rx: 40,
                          ry: 26,
                          colorClass: "text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.75)]",
                          carType: "sports"
                        },
                        {
                          id: 2,
                          offset: 120,
                          rx: 32,
                          ry: 20,
                          colorClass: "text-indigo-400 drop-shadow-[0_0_8px_rgba(99,102,241,0.7)]",
                          carType: "suv"
                        },
                        {
                          id: 3,
                          offset: 240,
                          rx: 40,
                          ry: 26,
                          colorClass: "text-rose-400 drop-shadow-[0_0_8px_rgba(244,63,94,0.75)]",
                          carType: "sedan"
                        }
                      ].map((car) => {
                        const carAngle = (angle + car.offset) % 360;
                        
                        // Get current coordinates
                        const coords = getCarCoords(carAngle, car.rx, car.ry);
                        // Get coordinates slightly ahead to compute the travel tangent vector
                        const nextCoords = getCarCoords(carAngle + 1.5, car.rx, car.ry);
                        
                        const dx = nextCoords.x - coords.x;
                        const dy = nextCoords.y - coords.y;
                        
                        // Compute tangent angle in degrees for clockwise rotation alignment
                        const rotation = (Math.atan2(dy, dx) * 180) / Math.PI;
                        
                        // 3D Depth calculations based on computed rad
                        const depth = Math.sin(coords.rad); // ranges from -1 (back) to +1 (front)
                        const scale = 0.65 + ((depth + 1) / 2) * 0.45; // scale between 0.65 and 1.10
                        const opacity = 0.45 + ((depth + 1) / 2) * 0.55; // opacity between 0.45 and 1.0
                        const zIndex = depth < 0 ? 5 : 20;

                        return (
                          <div
                            key={car.id}
                            style={{
                              position: "absolute",
                              left: "50%",
                              top: "50%",
                              transform: `translate(calc(-50% + ${coords.x}%), calc(-50% + ${coords.y}%)) scale(${scale}) rotate(${rotation}deg)`,
                              opacity,
                              zIndex,
                              pointerEvents: "none"
                            }}
                            className="transition-all duration-75"
                          >
                            {car.carType === "sports" && (
                              <svg viewBox="0 0 40 20" className={`w-8 h-4 md:w-9.5 md:h-5 ${car.colorClass}`} fill="currentColor" style={{ filter: "drop-shadow(-6px 0 4px rgba(34,211,238,0.5)) blur(0.2px)" }}>
                                <path d="M2 6 C 2 3, 6 2.5, 12 2.5 L28 2.5 C 34 2.5, 38 4, 40 10 C 38 16, 34 17.5, 28 17.5 L12 17.5 C 6 17.5, 2 17, 2 14 Z" />
                                <path d="M11 5 L23 5 C 25 5, 26 6, 26 10 C 26 14, 25 15, 23 15 L11 15 C 9 15, 8 14, 8 10 C 8 6, 9 5, 11 5 Z" fill="#050816" />
                                <path d="M24 5.5 L26 7 C 26.5 8.5, 26.5 11.5, 26 13 L24 14.5 Z" fill="#0891b2" opacity="0.8" />
                                <path d="M10 5.5 L8 7 C 7.5 8, 7.5 12, 8 13 L10 14.5 Z" fill="#020617" />
                                <path d="M1 4 L4 4 L4 16 L1 16 Z" fill="#000" />
                                <path d="M38 5 L40 6 L40 8 L38 9 Z" fill="#fff" />
                                <path d="M38 11 L40 12 L40 14 L38 15 Z" fill="#fff" />
                                <rect x="2" y="4" width="1.5" height="3" rx="0.5" fill="#f43f5e" />
                                <rect x="2" y="13" width="1.5" height="3" rx="0.5" fill="#f43f5e" />
                              </svg>
                            )}
                            {car.carType === "suv" && (
                              <svg viewBox="0 0 40 20" className={`w-8 h-4 md:w-9.5 md:h-5 ${car.colorClass}`} fill="currentColor" style={{ filter: "drop-shadow(-6px 0 4px rgba(99,102,241,0.5)) blur(0.2px)" }}>
                                <path d="M2 5 C 2 3, 5 3, 10 3 L30 3 C 34 3, 37 4.5, 39 10 C 37 15.5, 34 17, 30 17 L10 17 C 5 17, 2 17, 2 15 Z" />
                                <path d="M9 4.5 L27 4.5 C 29 4.5, 30 5.5, 30 10 C 30 14.5, 29 15.5, 27 15.5 L9 15.5 C 7 15.5, 6 14.5, 6 10 C 6 5.5, 7 4.5, 9 4.5 Z" fill="#050816" />
                                <rect x="17" y="4.5" width="2" height="11" fill="#1e1b4b" />
                                <path d="M25 5 L28 7 C 28.5 8, 28.5 12, 28 13 L25 15 Z" fill="#4338ca" opacity="0.8" />
                                <rect x="2" y="4" width="1.5" height="4" rx="0.5" fill="#ef4444" />
                                <rect x="2" y="12" width="1.5" height="4" rx="0.5" fill="#ef4444" />
                                <path d="M37 4 L39 5 L39 7 L37 7 Z" fill="#fff" />
                                <path d="M37 13 L39 13 L39 15 L37 16 Z" fill="#fff" />
                              </svg>
                            )}
                            {car.carType === "sedan" && (
                              <svg viewBox="0 0 40 20" className={`w-8 h-4 md:w-9.5 md:h-5 ${car.colorClass}`} fill="currentColor" style={{ filter: "drop-shadow(-6px 0 4px rgba(244,63,94,0.5)) blur(0.2px)" }}>
                                <path d="M3 5.5 C 3 3.5, 7 3, 12 3 L28 3 C 33 3, 36 4.5, 38 10 C 36 15.5, 33 17, 28 17 L12 17 C 7 17, 3 16.5, 3 14.5 Z" />
                                <path d="M10 5 L25 5 C 27 5, 28 6, 28 10 C 28 14, 27 15, 25 15 L10 15 C 8 15, 7 14, 7 10 C 7 6, 8 5, 10 5 Z" fill="#050816" />
                                <path d="M23 5.5 L26 7 C 26.5 8, 26.5 12, 26 13 L23 14.5 Z" fill="#9f1239" opacity="0.8" />
                                <path d="M9 5.5 L8 7 C 7.5 8, 7.5 12, 8 13 L9 14.5 Z" fill="#1e293b" />
                                <rect x="2" y="4" width="1.5" height="3" rx="0.5" fill="#f43f5e" />
                                <rect x="2" y="13" width="1.5" height="3" rx="0.5" fill="#f43f5e" />
                              </svg>
                            )}
                          </div>
                        );
                      })}
                    </div>

                    {/* Smoothly Morphing SVG chart */}
                    <div className="h-[45px] md:h-[50px] flex items-end">
                      <svg viewBox="0 0 360 150" className="w-full h-full overflow-visible">
                        <defs>
                          <linearGradient id={`grad-${activeModule.id}`} x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor={activeModule.chartStroke} stopOpacity="0.3" />
                            <stop offset="100%" stopColor={activeModule.chartStroke} stopOpacity="0" />
                          </linearGradient>
                        </defs>
                        <line x1="0" y1="37.5" x2="360" y2="37.5" stroke="rgba(255,255,255,0.015)" />
                        <line x1="0" y1="75" x2="360" y2="75" stroke="rgba(255,255,255,0.015)" />
                        <line x1="0" y1="112.5" x2="360" y2="112.5" stroke="rgba(255,255,255,0.015)" />
                        
                        {/* Area gradient fill path */}
                        <motion.path
                          d={activeModule.areaPath}
                          fill={`url(#grad-${activeModule.id})`}
                          initial={false}
                          animate={{ d: activeModule.areaPath }}
                          transition={{ duration: 0.7, ease: "easeInOut" }}
                        />
                        
                        {/* Wavy line border path */}
                        <motion.path
                          d={activeModule.linePath}
                          fill="none"
                          stroke={activeModule.chartStroke}
                          strokeWidth="2"
                          initial={false}
                          animate={{ d: activeModule.linePath }}
                          transition={{ duration: 0.7, ease: "easeInOut" }}
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Right Modules detail & alert logs panel */}
                  <div className="w-[28%] h-full border-l border-white/5 bg-[#050815]/95 p-2 flex flex-col justify-between z-10">
                    
                    {/* Module stats parameters */}
                    <div className="space-y-2">
                      <span className="text-[7px] text-gray-500 font-black tracking-widest uppercase block">
                        PARAMETERS
                      </span>
                      <div className="space-y-1.5">
                        {activeModule.sidebarMetrics.map((met, i) => (
                          <div key={i} className="space-y-0.5">
                            <div className="flex justify-between text-[6.5px] md:text-[7.5px] text-gray-400 font-bold leading-none">
                              <span className="truncate max-w-[70%]">{met.label}</span>
                              <span className={met.change.startsWith("+") || met.change === "Compliant" ? "text-green-400 shrink-0" : met.change.startsWith("-") ? "text-rose-400 shrink-0" : "text-blue-400 shrink-0"}>
                                {met.change}
                              </span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <span className="text-[9px] font-black text-white shrink-0">
                                {met.unit === "£" ? "£" : ""}{met.value.toLocaleString()}{met.unit && met.unit !== "£" ? met.unit : ""}
                              </span>
                              {/* Horizontal metric bar */}
                              <div className="flex-1 bg-white/5 h-0.5 rounded-full overflow-hidden border border-white/5">
                                <motion.div
                                  initial={{ width: 0 }}
                                  animate={{ 
                                    width: `${Math.min(100, (met.value / (met.value > 1000 ? 12000 : met.value > 100 ? 500 : 100)) * 100)}%` 
                                  }}
                                  transition={{ duration: 0.5 }}
                                  className={`h-full bg-gradient-to-r ${activeModule.color}`}
                                />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Live events log */}
                    <div className="space-y-1 pt-1.5 border-t border-white/5">
                      <span className="text-[7px] text-gray-500 font-black tracking-widest uppercase block">
                        SYSTEM EVENT LOG
                      </span>
                      <div className="space-y-1 h-[40px] overflow-hidden">
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={activeIdx}
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-1"
                          >
                            {activeModule.feed.slice(0, 2).map((log, idx) => (
                              <div key={idx} className="flex items-start space-x-1 text-[6.5px] md:text-[7.5px] text-gray-400 leading-tight">
                                <span className="text-cyan-400 font-bold shrink-0">&gt;</span>
                                <span className="truncate">{log}</span>
                              </div>
                            ))}
                          </motion.div>
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </motion.div>

          {/* Dynamic Floating KPI Card: Left Top */}
          <motion.div
            key={`kpi-left-${activeIdx}`}
            initial={{ opacity: 0, scale: 0.8, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute -top-6 -left-6 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border border-white/10 p-4 rounded-xl shadow-xl z-30 flex items-center space-x-3 backdrop-blur-md"
          >
            <div className={`p-2 rounded-lg bg-white/5 ${activeModule.kpis[0].color}`}>
              {activeModule.kpis[0].icon}
            </div>
            <div>
              <div className="text-[9px] uppercase font-black text-gray-400 tracking-wider">
                {activeModule.kpis[0].label}
              </div>
              <div className="text-lg font-bold text-white leading-tight">
                {activeModule.kpis[0].unit === "£" ? "£" : ""}
                <NumberCounter target={activeModule.kpis[0].value} />
                {activeModule.kpis[0].unit && activeModule.kpis[0].unit !== "£" ? activeModule.kpis[0].unit : ""}
              </div>
            </div>
          </motion.div>

          {/* Dynamic Floating KPI Card: Right Bottom */}
          <motion.div
            key={`kpi-right-${activeIdx}`}
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute -bottom-6 -right-6 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border border-white/10 p-4 rounded-xl shadow-xl z-30 flex items-center space-x-3 backdrop-blur-md"
          >
            <div className={`p-2 rounded-lg bg-white/5 ${activeModule.kpis[1].color}`}>
              {activeModule.kpis[1].icon}
            </div>
            <div>
              <div className="text-[9px] uppercase font-black text-gray-400 tracking-wider">
                {activeModule.kpis[1].label}
              </div>
              <div className="text-lg font-bold text-white leading-tight flex items-baseline">
                <span>
                  {activeModule.kpis[1].unit === "£" ? "£" : ""}
                  <NumberCounter target={activeModule.kpis[1].value} />
                  {activeModule.kpis[1].unit && activeModule.kpis[1].unit !== "£" ? activeModule.kpis[1].unit : ""}
                </span>
                {activeModule.kpis[1].change && (
                  <span className="text-[9px] font-bold text-green-400 ml-1.5">
                    {activeModule.kpis[1].change}
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Dynamic Driving Road Lane Animation */}
      <MovingCarsAnimation />
    </section>
  );
};

export default HeroSection;
