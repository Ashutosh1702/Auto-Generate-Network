import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home.jsx";
import PageTransition from "./components/PageTransition.jsx";
import { CgSpinner } from "react-icons/cg";

// Lazy load other page components for performance
const AboutUs = lazy(() => import("./pages/AboutUs.jsx"));
const Pricing = lazy(() => import("./pages/Pricing.jsx"));
const GarageManagementSystem = lazy(
  () => import("./pages/GarageManagementSystem.jsx"),
);
const WebsiteForGarages = lazy(() => import("./pages/WebsiteForGarages.jsx"));
const AutotechData = lazy(() => import("./pages/AutotechData.jsx"));
const MOTDiary = lazy(() => import("./pages/MOTDiary.jsx"));
const SEO = lazy(() => import("./pages/SEO.jsx"));
const Features = lazy(() => import("./pages/Features.jsx"));
const LatestWork = lazy(() => import("./pages/LatestWork.jsx"));
const Blog = lazy(() => import("./pages/Blog.jsx"));
const ContactUs = lazy(() => import("./pages/ContactUs.jsx"));
const LogIn = lazy(() => import("./pages/LogIn.jsx"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy.jsx"));
const TermsOfService = lazy(() => import("./pages/TermsOfService.jsx"));
const CookiePolicy = lazy(() => import("./pages/CookiePolicy.jsx"));
const AdminDashboard = lazy(() => import("./pages/AdminDashboard.jsx"));
const Sitemap = lazy(() => import("./pages/Sitemap.jsx"));

const SuspenseFallback = () => (
  <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050816] text-white">
    <div className="flex flex-col items-center gap-4">
      <CgSpinner className="animate-spin text-indigo-500" size={50} />
      <span className="text-gray-400 text-sm tracking-wider font-semibold animate-pulse">
        Loading...
      </span>
    </div>
  </div>
);

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <>
      <AnimatePresence mode="wait">
        <Suspense fallback={<SuspenseFallback />}>
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <PageTransition>
                  <Home />
                </PageTransition>
              }
            />
            <Route
              path="/about-us"
              element={
                <PageTransition>
                  <AboutUs />
                </PageTransition>
              }
            />
            <Route
              path="/pricing"
              element={
                <PageTransition>
                  <Pricing />
                </PageTransition>
              }
            />
            <Route
              path="/garage-management-system"
              element={
                <PageTransition>
                  <GarageManagementSystem />
                </PageTransition>
              }
            />
            <Route
              path="/website-for-garages"
              element={
                <PageTransition>
                  <WebsiteForGarages />
                </PageTransition>
              }
            />
            <Route
              path="/autotech-data"
              element={
                <PageTransition>
                  <AutotechData />
                </PageTransition>
              }
            />
            <Route
              path="/mot-diary"
              element={
                <PageTransition>
                  <MOTDiary />
                </PageTransition>
              }
            />
            <Route
              path="/seo"
              element={
                <PageTransition>
                  <SEO />
                </PageTransition>
              }
            />
            <Route
              path="/features"
              element={
                <PageTransition>
                  <Features />
                </PageTransition>
              }
            />
            <Route
              path="/latest-work"
              element={
                <PageTransition>
                  <LatestWork />
                </PageTransition>
              }
            />
            <Route
              path="/blog"
              element={
                <PageTransition>
                  <Blog />
                </PageTransition>
              }
            />
            <Route
              path="/contact-us"
              element={
                <PageTransition>
                  <ContactUs />
                </PageTransition>
              }
            />
            <Route
              path="/login"
              element={
                <PageTransition>
                  <LogIn />
                </PageTransition>
              }
            />
            <Route
              path="/privacy-policy"
              element={
                <PageTransition>
                  <PrivacyPolicy />
                </PageTransition>
              }
            />
            <Route
              path="/terms-of-service"
              element={
                <PageTransition>
                  <TermsOfService />
                </PageTransition>
              }
            />
            <Route
              path="/cookie-policy"
              element={
                <PageTransition>
                  <CookiePolicy />
                </PageTransition>
              }
            />
            <Route
              path="/admin"
              element={
                <PageTransition>
                  <AdminDashboard />
                </PageTransition>
              }
            />
            <Route
              path="/sitemap"
              element={
                <PageTransition>
                  <Sitemap />
                </PageTransition>
              }
            />
          </Routes>
        </Suspense>
      </AnimatePresence>
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
};

export default App;
