import React, { useState } from 'react';

import styles from './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/Home'
import About from './pages/About'
import Hobbies from './pages/Hobbies'
import Welcome from './pages/Welcome';

import { ThemeProvider } from './ThemeContext';

export default function App() {
  

  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className='container' >
          <Header />
          <Routes>
            <Route path='/' element={<Welcome />} />
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/hobbies' element={<Hobbies />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}


