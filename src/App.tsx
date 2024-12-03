import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/bolt/Navbar';
import Hero from './components/bolt/Hero';
import Process from './components/bolt/Process';
import Results from './components/bolt/Results';
import Pricing from './components/bolt/Pricing';
import CTA from './components/bolt/CTA';
import Services from './components/bolt/Services';
import ServicePage from './pages/ServicePage';
import SchedulePage from './pages/SchedulePage';
import HowItWorksPage from './pages/HowItWorksPage';
import Reviews from './components/custom/Reviews';
import PricingPage from './pages/PricingPage';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Services />
              <Process />
              <Results />
              <Pricing />
              <Reviews />
              <CTA />
            </>
          } />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/schedule" element={<SchedulePage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/pricing" element={<PricingPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;