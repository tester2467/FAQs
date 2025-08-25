import React, { useState } from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import FAQPage from './pages/FAQPage';
import CapabilitiesPage from './pages/CapabilitiesPage';
import ArtworkGuidelinesPage from './pages/ArtworkGuidelinesPage';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/capabilities" element={<CapabilitiesPage />} />
            <Route path="/artwork-guidelines" element={<ArtworkGuidelinesPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;