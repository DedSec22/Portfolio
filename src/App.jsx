import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './jsx/Components/Navbar';
import Footer from './jsx/Components/Footer';

import HomePage from './jsx/Pages/HomePage';
import AboutPage from './jsx/Pages/AboutPage';
import ContactPage from './jsx/Pages/ContactPage';

const navigations = [
  { text: 'About', path: '/about' },
  { text: 'Contact', path: '/contact' },
];

function App() {
  return (
    <>
      <Router>
        <Navbar navigations={navigations} />

        <div className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>

        <Footer />
      </Router>
    </>
  )
}

export default App
