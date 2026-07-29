import Navbar from "./components/layout/Navbar";

import HeroSection from "./components/sections/1_HeroSection";
import TechStackSection from "./components/sections/2_TechStackSection";
import ProjectsSection from "./components/sections/3_ProjectsSection";
import ExperienceSection from "./components/sections/4_ExperienceSection";
import ContactSection from "./components/sections/5_ContactSection";
import Footer from "./components/sections/6_Footer";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DuoNote from './pages/DuoNote';

function App() {
  return (
    <Router>
      <Routes>

        {/* 0. Halaman Utama Portfolio */}
        <Route path="/" element={
          <div className="bg-[#0B0F19] text-white">
            
            <Navbar />

            <main>
              <HeroSection />
              <TechStackSection />
              <ProjectsSection />
              <ExperienceSection />
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