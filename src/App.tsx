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
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        console.log('Checking authentication...');
        const { data: { session }, error: authError } = await supabase.auth.getSession();
        if (authError) {
          console.warn('Auth error:', authError.message);
          setError('Authentication unavailable - running in demo mode');
        } else {
          setIsAuthenticated(!!session);
          console.log('Auth check complete:', !!session);
        }
      } catch (err) {
        console.error('Auth check failed:', err);
        setError('Demo mode: Supabase unavailable');
      }
    };

    checkAuth();
  }, []);

  // If there's an error, still show the page but log it
  if (error) {
    console.warn('Running in demo mode -', error);
  }

  return (
    <div className="relative min-h-screen bg-cyber-black">
      {/* Show error banner if in demo mode */}
      {error && (
        <div className="fixed top-0 left-0 right-0 bg-yellow-900 text-yellow-100 p-2 text-sm z-50">
          {error}
        </div>
      )}

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
