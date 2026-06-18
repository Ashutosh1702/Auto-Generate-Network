import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home.jsx";
import PageTransition from "./components/PageTransition.jsx";

// ScrollToTop resets scroll position to (0,0) instantly on route changes
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Import page components directly for instant page transitions (no loading spinner)
import AboutUs from "./pages/AboutUs.jsx";
import Pricing from "./pages/Pricing.jsx";
import GarageManagementSystem from "./pages/GarageManagementSystem.jsx";
import WebsiteForGarages from "./pages/WebsiteForGarages.jsx";
import AutotechData from "./pages/AutotechData.jsx";
import MOTDiary from "./pages/MOTDiary.jsx";
import SEO from "./pages/SEO.jsx";
import Features from "./pages/Features.jsx";
import LatestWork from "./pages/LatestWork.jsx";
import Blog from "./pages/Blog.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import LogIn from "./pages/LogIn.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import TermsOfService from "./pages/TermsOfService.jsx";
import CookiePolicy from "./pages/CookiePolicy.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";
import Sitemap from "./pages/Sitemap.jsx";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <>
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
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AnimatedRoutes />
    </BrowserRouter>
  );
};

export default App;
