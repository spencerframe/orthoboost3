import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "./components/navigation/ScrollToTop";
import Navbar from "./components/navigation/Navbar";
import Hero from "./components/bolt/Hero";
import Process from "./components/bolt/Process";
import Results from "./components/bolt/Results";
import { PrimaryCTA } from "./components/bolt/CTA";
import Services from "./components/bolt/Services";
import Affordability from "./components/bolt/Affordability";
import ServicePage from "./pages/ServicePage";
import SchedulePage from "./pages/SchedulePage";
import HowItWorksPage from "./pages/HowItWorksPage";
import ReviewsMarquee from "./components/custom/ReviewsMarquee";
import PricingPage from "./pages/PricingPage";
import WebinarPage from "./pages/WebinarPage";
import BlogListPage from "./pages/BlogListPage";
import BlogPost from "./pages/BlogPost";
import WebinarListPage from "./pages/WebinarListPage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className='min-h-screen bg-white'>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Services />
              <ReviewsMarquee />
              <Results />
              <Affordability />
              <Process />
              <PrimaryCTA />
            </>
          } />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/schedule" element={<SchedulePage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/blog" element={<BlogListPage />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/webinars" element={<WebinarListPage />} />
          <Route path="/webinars/:slug" element={<WebinarPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;