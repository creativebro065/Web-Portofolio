import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import WhatsAppWidget from './components/WhatsAppWidget';
import SEO from './SEO';
import { LanguageProvider, useLanguage } from './context/LanguageContext';

function MainApp() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-brutalDark selection:bg-brutalAmber selection:text-brutalDark">
      <SEO title={t('seo.title')} description={t('seo.description')} keywords={t('seo.keywords')} />
      <Navbar />
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