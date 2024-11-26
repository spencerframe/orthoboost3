import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Process from './components/Process';
import Results from './components/Results';
import Pricing from './components/Pricing';
import CTA from './components/CTA';
import Services from './components/Services';
import ServicePage from './pages/ServicePage';
import SchedulePage from './pages/SchedulePage';
import HowItWorksPage from './pages/HowItWorksPage';

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
              <CTA />
            </>
          } />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/schedule" element={<SchedulePage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;