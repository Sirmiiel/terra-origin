// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import './App.css';

const App = () => (
  <Router>
    <div className="App">
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Features />
            <Testimonials />
          </>
        } />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    <Footer />
    </div>
  </Router>
);

export default App;
