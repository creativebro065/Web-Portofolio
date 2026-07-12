import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import WhatsAppWidget from './components/WhatsAppWidget';
import SEO from './SEO';
import { LanguageProvider, useLanguage } from './context/LanguageContext';

// Import detail pages to render as internal Modal overlays
import MaintProDetail from './pages/MaintProDetail';
import TroMetDetail from './pages/TroMetDetail';
import DesignDetail from './pages/DesignDetail';
import VideoDetail from './pages/VideoDetail';

function MainApp() {
  const { t } = useLanguage();
  const [currentPath, setCurrentPath] = useState(window.location.hash || '#/');

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash || '#/');
      
      // If modal is opened, prevent body scrolling for better UX
      const isModalOpen = window.location.hash.match(/^#\/(project|services)\//);
      if (isModalOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'unset';
      }
    };

    // Initial check
    const isModalOpen = window.location.hash.match(/^#\/(project|services)\//);
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="min-h-screen bg-brutalDark selection:bg-brutalAmber selection:text-brutalDark relative">
      <SEO title={t('seo.title')} description={t('seo.description')} keywords={t('seo.keywords')} />
      <Navbar />
      
      {/* Main Page Layout always renders in background */}
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Contact />
      </main>

      <footer className="py-8 text-center text-xs font-bold text-gray-400 bg-brutalDark border-t-4 border-brutalDark uppercase tracking-widest">
        &copy; {new Date().getFullYear()} CreativeBro. Built for High-Converting Business.
      </footer>
      
      <WhatsAppWidget />

      {/* Zero-Dependency Internal React Modal Pop-ups */}
      {currentPath.startsWith('#/project/maintpro') && (
        <div 
          className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-sm flex justify-center p-4 items-start cursor-pointer"
          onClick={() => window.location.hash = '#/'}
        >
          <div 
            className="relative w-full max-w-4xl bg-brutalDark border-4 border-brutalDark shadow-brutal-amber rounded-none overflow-hidden my-8 cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            <MaintProDetail />
          </div>
        </div>
      )}

      {currentPath.startsWith('#/project/tromet') && (
        <div 
          className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-sm flex justify-center p-4 items-start cursor-pointer"
          onClick={() => window.location.hash = '#/'}
        >
          <div 
            className="relative w-full max-w-4xl bg-brutalDark border-4 border-brutalDark shadow-brutal-amber rounded-none overflow-hidden my-8 cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            <TroMetDetail />
          </div>
        </div>
      )}

      {currentPath.startsWith('#/services/design') && (
        <div 
          className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-sm flex justify-center p-4 items-start cursor-pointer"
          onClick={() => window.location.hash = '#/'}
        >
          <div 
            className="relative w-full max-w-5xl bg-brutalDark border-4 border-brutalDark shadow-brutal-amber rounded-none overflow-hidden my-8 cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            <DesignDetail />
          </div>
        </div>
      )}

      {currentPath.startsWith('#/services/video') && (
        <div 
          className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-sm flex justify-center p-4 items-start cursor-pointer"
          onClick={() => window.location.hash = '#/'}
        >
          <div 
            className="relative w-full max-w-4xl bg-brutalDark border-4 border-brutalDark shadow-brutal-amber rounded-none overflow-hidden my-8 cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            <VideoDetail />
          </div>
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <MainApp />
    </LanguageProvider>
  );
}

export default App;