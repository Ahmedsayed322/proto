import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Loader } from './components/common/Loader';
import { ScrollToTop } from './components/common/ScrollToTop';

import { HomePage } from './pages/HomePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { EcommerceCaseStudy } from './pages/EcommerceCaseStudy';
import { SocialMediaCaseStudy } from './pages/SocialMediaCaseStudy';
import { SarahaCaseStudy } from './pages/SarahaCaseStudy';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';

export const AppContent: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);

  React.useEffect(() => {
    const handleReplay = () => setLoading(true);
    window.addEventListener('replay-loader', handleReplay);
    return () => window.removeEventListener('replay-loader', handleReplay);
  }, []);

  const handleLoaderComplete = () => {
    setLoading(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-editorial-dark text-zinc-100 font-sans selection:bg-crimson-600 selection:text-white relative">
      {/* Subtle organic analog grain layer */}
      <div className="fixed inset-0 pointer-events-none bg-grain-texture z-0 opacity-80" />
      {loading && <Loader onComplete={handleLoaderComplete} />}
      <ScrollToTop />
      <div className="relative z-10 flex flex-col flex-1">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/ecommerce-backend" element={<EcommerceCaseStudy />} />
            <Route path="/projects/social-media-backend" element={<SocialMediaCaseStudy />} />
            <Route path="/projects/saraha" element={<SarahaCaseStudy />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;
