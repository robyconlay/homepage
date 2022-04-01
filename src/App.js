import React from 'react';

import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header'
import Footer from './components/Footer'

import Home from './routes/Home'
import Works from './routes/Works'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/works' element={<Works />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
