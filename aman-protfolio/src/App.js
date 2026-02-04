import './App.css';
import HeroSection from './component/HeroSection';
import SkillsSection from './component/SkillsSection';
import ProjectsSection from './component/ProjectSection';
import CertificationsSection from './component/CertificationSection';
import AboutSection from './component/AboutSection';
import ConnectSection from './component/ConnectSection';

function App() {
   return (
    <main className="bg-black">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <CertificationsSection />
      <ConnectSection />
      
    </main>
  )
}

export default App;
