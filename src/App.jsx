import Navbar from "./components/layout/Navbar";

import HeroSection from "./components/sections/1_HeroSection";
import TechStackSection from "./components/sections/2_TechStackSection";
import ProjectsSection from "./components/sections/3_ProjectsSection";
import ExperienceSection from "./components/sections/4_ExperienceSection";
import ContactSection from "./components/sections/5_ContactSection";
import Footer from "./components/sections/6_Footer";

function App() {
  return (
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
  );
}

export default App;