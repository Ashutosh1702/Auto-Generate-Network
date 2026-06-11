import React from 'react'
import Navbar from '../components/Navbar.jsx'
import HeroSection from '../components/HeroSection.jsx'
import PartnerLogos from '../components/PartnerLogos.jsx'
import StatsSection from '../components/StatsSection.jsx'
import FeaturesSection from '../components/FeaturesSection.jsx'
import DashboardSection from '../components/DashboardSection.jsx'
import WebsiteSolutions from '../components/WebsiteSolutions.jsx'
import MOTDiary from '../components/MOTDiary.jsx'
import SEOSection from '../components/SEOSection.jsx'
import MobileAppSection from '../components/MobileAppSection.jsx'
import PricingSection from '../components/PricingSection.jsx'
import TestimonialsSection from '../components/TestimonialsSection.jsx'
import BlogSection from '../components/BlogSection.jsx'
import CTASection from '../components/CTASection.jsx'
import Footer from '../components/Footer.jsx'

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#050816] text-white">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <PartnerLogos />
        <StatsSection />
        <FeaturesSection />
        <DashboardSection />
        <WebsiteSolutions />
        <MOTDiary />
        <SEOSection />
        <MobileAppSection />
        <PricingSection />
        <TestimonialsSection />
        <BlogSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}

export default Home
