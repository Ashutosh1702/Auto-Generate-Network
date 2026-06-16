import React from "react";
import Navbar from "../components/Navbar.jsx";
import SEOSection from "../components/SEOSection.jsx";
import Footer from "../components/Footer.jsx";

const SEO = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#050816] text-white">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Header decoration */}
        <div className="relative pt-12 pb-2 text-center overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-red-500/10 rounded-full blur-[120px] pointer-events-none" />
          <h1 className="text-4xl md:text-5xl font-black mb-4 px-4 leading-tight">
            Search Engine Optimisation
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto px-4">
            Position your workshop at the top of local rankings, helping garage owners attract organic leads and drive tyre fitting and MOT checkins.
          </p>
        </div>
        <SEOSection />
      </main>
      <Footer />
    </div>
  );
};

export default SEO;
