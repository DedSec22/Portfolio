import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import HomePage from './Components/Pages/HomePage';
import AboutPage from './Components/Pages/AboutPage';
import ServicesPage from './Components/Pages/ServicesPage';
import PortfolioPage from './Components/Pages/PortfolioPage';
import ContactPage from './Components/Pages/ContactPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const navigations = [
    { text: 'About', path: '/about' },
    { text: 'Services', path: '/services' },
    { text: 'Portfolio', path: '/portfolio' },
    { text: 'Contact', path: '/contact' },
];

function App() {
  return (
    <>
        <Router>
            <Navbar navigations={navigations} />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/portfolio" element={<PortfolioPage />} />
                <Route path="/contact" element={<ContactPage />} />
            </Routes>
        </Router>
    </>
  )
}

export default App
