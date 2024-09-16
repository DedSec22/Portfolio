import React, { useState } from 'react';
import ScrollClass from './Components/ScrollClass.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './Components/Navbar';

import HomePage from './Components/Pages/HomePage';
import AboutPage from './Components/Pages/AboutPage';
import ServicesPage from './Components/Pages/ServicesPage';
import PortfolioPage from './Components/Pages/PortfolioPage';
import ContactPage from './Components/Pages/ContactPage';

const navigations = [
  { text: 'About', path: '/about' },
  { text: 'Services', path: '/services' },
  { text: 'Portfolio', path: '/portfolio' },
  { text: 'Contact', path: '/contact' },
];

function App() {
  return (
    <>
      <ScrollClass />
      <Router>
        <Navbar navigations={navigations} />

        <div className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>

      </Router>
    </>
  )
}

export default App
