import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import ServicePage from './pages/ServicePage';
import GalleryPage from './pages/GalleryPage';
import ClinicsPage from './pages/ClinicsPage';
import FaqPage from './pages/FaqPage';

import { LanguageProvider } from './contexts/LanguageContext';

export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="services/clinics" element={<ClinicsPage />} />
            <Route path="services/:id" element={<ServicePage />} />
            <Route path="gallery" element={<GalleryPage />} />
            <Route path="faq" element={<FaqPage />} />
          </Route>
        </Routes>
      </Router>
    </LanguageProvider>
  );
}
