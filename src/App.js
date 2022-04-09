import React, { useState } from 'react';

import styles from './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import Home from './pages/Home'
import About from './pages/About'
import Hobbies from './pages/Hobbies'
import Welcome from './pages/Welcome';

function App() {

  const [theme, setTheme] = useState('light');

  return (
    <>
      <BrowserRouter>
        <div className='container'>
          <Header theme={theme} setTheme={setTheme} />
          <Routes>
            <Route path='/' element={<Welcome />} />
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/hobbies' element={<Hobbies />} />
          </Routes>
          <Footer theme={theme} />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
