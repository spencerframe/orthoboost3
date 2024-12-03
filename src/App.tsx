import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/bolt/Navbar";
import Hero from "./components/bolt/Hero";
import Process from "./components/bolt/Process";
import Results from "./components/bolt/Results";
import CTA from "./components/bolt/CTA";
import Services from "./components/bolt/Services";
import Affordability from "./components/bolt/Affordability";
import ServicePage from "./pages/ServicePage";
import SchedulePage from "./pages/SchedulePage";
import HowItWorksPage from "./pages/HowItWorksPage";
import ReviewsMarquee from "./components/custom/ReviewsMarquee";
import PricingPage from "./pages/PricingPage";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className='min-h-screen bg-white'>
        <Navbar />
        <Routes>
          <Route
            path='/'
            element={
              <>
                <Hero />
                <Affordability />
                <Services />
                <ReviewsMarquee />
                <Process />
                <Results />
                <CTA />
              </>
            }
          />
          <Route
            path='/services'
            element={<ServicePage />}
          />
          <Route
            path='/schedule'
            element={<SchedulePage />}
          />
          <Route
            path='/how-it-works'
            element={<HowItWorksPage />}
          />
          <Route
            path='/pricing'
            element={<PricingPage />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;