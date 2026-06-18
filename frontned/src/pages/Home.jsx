import React, { lazy, Suspense } from "react";
import Navbar from "../components/Navbar.jsx";
import HeroSection from "../components/HeroSection.jsx";
import LazySection from "../components/LazySection.jsx";

// Lazy loaded below-the-fold sections
const PartnerLogos = lazy(() => import("../components/PartnerLogos.jsx"));
const StatsSection = lazy(() => import("../components/StatsSection.jsx"));
const FeaturesSection = lazy(() => import("../components/FeaturesSection.jsx"));
const DashboardSection = lazy(() => import("../components/DashboardSection.jsx"));
const WebsiteSolutions = lazy(() => import("../components/WebsiteSolutions.jsx"));
const MOTDiary = lazy(() => import("../components/MOTDiary.jsx"));
const SEOSection = lazy(() => import("../components/SEOSection.jsx"));
const MobileAppSection = lazy(() => import("../components/MobileAppSection.jsx"));
const PricingSection = lazy(() => import("../components/PricingSection.jsx"));
const TestimonialsSection = lazy(() => import("../components/TestimonialsSection.jsx"));
const BlogSection = lazy(() => import("../components/BlogSection.jsx"));
const Footer = lazy(() => import("../components/Footer.jsx"));

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#050816] text-white">
      <Navbar />
      <main className="flex-grow home-main">
        <HeroSection />
        
        <LazySection height="120px">
          <Suspense fallback={<div style={{ minHeight: "120px" }} />}>
            <PartnerLogos />
          </Suspense>
        </LazySection>

        <LazySection height="350px">
          <Suspense fallback={<div style={{ minHeight: "350px" }} />}>
            <StatsSection />
          </Suspense>
        </LazySection>

        <LazySection height="600px">
          <Suspense fallback={<div style={{ minHeight: "600px" }} />}>
            <FeaturesSection />
          </Suspense>
        </LazySection>

        <LazySection height="700px">
          <Suspense fallback={<div style={{ minHeight: "700px" }} />}>
            <DashboardSection />
          </Suspense>
        </LazySection>

        <LazySection height="600px">
          <Suspense fallback={<div style={{ minHeight: "600px" }} />}>
            <WebsiteSolutions />
          </Suspense>
        </LazySection>

        <LazySection height="600px">
          <Suspense fallback={<div style={{ minHeight: "600px" }} />}>
            <MOTDiary />
          </Suspense>
        </LazySection>

        <LazySection height="600px">
          <Suspense fallback={<div style={{ minHeight: "600px" }} />}>
            <SEOSection />
          </Suspense>
        </LazySection>

        <LazySection height="600px">
          <Suspense fallback={<div style={{ minHeight: "600px" }} />}>
            <MobileAppSection />
          </Suspense>
        </LazySection>

        <LazySection height="700px">
          <Suspense fallback={<div style={{ minHeight: "700px" }} />}>
            <PricingSection />
          </Suspense>
        </LazySection>

        <LazySection height="400px">
          <Suspense fallback={<div style={{ minHeight: "400px" }} />}>
            <TestimonialsSection />
          </Suspense>
        </LazySection>

        <LazySection height="500px">
          <Suspense fallback={<div style={{ minHeight: "500px" }} />}>
            <BlogSection limit={3} />
          </Suspense>
        </LazySection>
      </main>

      <LazySection height="400px">
        <Suspense fallback={<div style={{ minHeight: "400px" }} />}>
          <Footer />
        </Suspense>
      </LazySection>
    </div>
  );
};

export default Home;
