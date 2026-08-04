import Navbar from "./components/layout/Navbar";
import HeroSection from "./components/sections/1_HeroSection";
import ProjectsSection from "./components/sections/2_ProjectsSection";
import ExperienceSection from "./components/sections/3_ExperienceSection";
import EducationSection from "./components/sections/4_EducationSection";
import CertificationSection from "./components/sections/5_CertificationSection";
import TechStackSection from "./components/sections/6_TechStackSection";
import ContactSection from "./components/sections/7_ContactSection";
import Footer from "./components/sections/8_Footer";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DuoNote from './pages/DuoNote';

function App() {
  return (
    <Router>
      <Routes>

        {/* 0. Halaman Utama Portfolio */}
        <Route path="/" element={
          <div className="font-['DMSans'] bg-[#0B0F19] text-white">
            
            <Navbar />

            <main>
              <HeroSection />
              <ProjectsSection />
              <ExperienceSection />
              <EducationSection />
              <CertificationSection />
              <TechStackSection />
              <ContactSection />
            </main>

            <Footer />

          </div>
        } />

        {/* 99. Halaman /duo-note */}
        <Route path="/duo-note" element={
          <DuoNote />
        } />

      </Routes>
    </Router>
  );
}

export default App;