import { useState, useEffect } from 'react';
import EarthScene from './components/EarthScene';
import Header from './components/Header';
import OpeningAnimation from './components/OpeningAnimation';
import Hero from './components/Hero';
import SecurityOpsCenter from './components/SecurityOpsCenter';
import LearningPlatforms from './components/LearningPlatforms';
import ToolsExplorer from './components/ToolsExplorer';
import ToolsDirectory from './components/ToolsDirectory';
import LearningHub from './components/LearningHub';
import KnowledgeLibrary from './components/KnowledgeLibrary';
import NewsDashboard from './components/NewsDashboard';
import AcademySection from './components/AcademySection';
import LearningDashboard from './components/LearningDashboard';
import CareerCenter from './components/CareerCenter';
import RoadmapSection from './components/RoadmapSection';
import GlobalCyberMap from './components/GlobalCyberMap';
import CommunitySection from './components/CommunitySection';
import DownloadsSection from './components/DownloadsSection';
import BlogSection from './components/BlogSection';
import ContactSection from './components/ContactSection';
import AuthModal from './components/AuthModal';
import CYRAAssistant from './components/CYRAAssistant';
import Footer from './components/Footer';
import { supabase } from './lib/supabase';

function App() {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        setIsAuthenticated(!!session);
      } catch (err) {
        console.log('Auth check failed - running in demo mode');
      }
    };

    checkAuth();
  }, []);

  return (
    <div className="relative min-h-screen bg-cyber-black">
      {/* Three.js Earth background */}
      <EarthScene />

      {/* Opening animation overlay */}
      <OpeningAnimation />

      {/* Content overlay */}
      <div className="relative z-10">
        <Header onAuthClick={() => setShowAuthModal(true)} />
        <main>
          <Hero />
          <SecurityOpsCenter />
          <AcademySection />
          <LearningDashboard />
          <CareerCenter />
          <LearningPlatforms />
          <ToolsExplorer />
          <ToolsDirectory />
          <LearningHub />
          <KnowledgeLibrary />
          <NewsDashboard />
          <RoadmapSection />
          <GlobalCyberMap />
          <CommunitySection />
          <DownloadsSection />
          <BlogSection />
          <ContactSection />
        </main>
        <Footer />
      </div>

      {/* AI Assistant */}
      <CYRAAssistant />

      {/* Auth Modal */}
      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        onSuccess={() => {
          setShowAuthModal(false);
          setIsAuthenticated(true);
        }}
      />
    </div>
  );
}

export default App;
