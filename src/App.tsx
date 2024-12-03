import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/bolt/Navbar';
import Hero from './components/bolt/Hero';
import Process from './components/bolt/Process';
import Results from './components/bolt/Results';
import CTA from './components/bolt/CTA';
import Services from './components/bolt/Services';
import Affordability from './components/bolt/Affordability';
import ServicePage from './pages/ServicePage';
import SchedulePage from './pages/SchedulePage';
import HowItWorksPage from './pages/HowItWorksPage';
import Reviews from './components/custom/Reviews';

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
              <Affordability />
              <Process />
              <Results />
              <Reviews />
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