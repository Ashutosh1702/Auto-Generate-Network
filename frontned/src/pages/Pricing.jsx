import React from "react";
import Navbar from "../components/Navbar.jsx";
import PricingSection from "../components/PricingSection.jsx";
import Footer from "../components/Footer.jsx";

const Pricing = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#050816] text-white">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Header decoration */}
        <div className="relative pt-12 pb-6 text-center overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
          <h1 className="text-4xl md:text-5xl font-black mb-4">Pricing Plans</h1>
          <p className="text-gray-400 max-w-xl mx-auto px-4">
            Choose the right plan of Garage Management System and Website Solutions for your workshop.
          </p>
        </div>
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
