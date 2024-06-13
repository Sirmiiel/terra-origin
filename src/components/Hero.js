// src/components/Hero.js
import React from 'react';
import './Hero.css';
import '../App.css';
import { Link } from 'react-router-dom';
import user from '../assets/user.svg';
import question from '../assets/question-sign-circle.svg';
import Pottery from '../assets/Pottery.jpeg';
import AfricanWomen from '../assets/african-women.jpeg';
import Elephant from '../assets/elephant.jpeg';

const linkStyle = {
    color: 'white',
    textDecoration: 'none'
  };

  const h1 = {
    color: 'black',
    textDecoration: 'none'
  };

const Hero = () => (
    
  <section id="hero">
    <header className="header">
  <nav className="nav">
    <h1 className="logo" style={h1}><span style={{ backgroundColor: 'black', color: 'var(--main-color)', borderRadius: '5px', padding: '6px'}}>Terra</span> Origin</h1>
    <ul className="nav-links">
      <li><a href="#hero">Terra View</a></li>
      <li><a href="#features">Experience Terra</a></li>
      <li><a href="#testimonials">Find Events</a></li>
    </ul>
    <div className="profile">
      <img src={ question } alt='' />
      <Link style={linkStyle} to="/signup"><img src={ user } alt='' /></Link>
    </div>
  </nav>
</header>

 <div className="hero">
    <div>
        <button className="cta button-white">Explore the world</button>
        
        <h1 style={h1}><i>From <span style={{color: "var(--main-color)"}}>Africa</span> <br /> to the World.</i></h1>
        <p>Escape the ordinary without breaking the bank. Unforgettable experiences start here.</p>
        <button className="cta-button">Get Started</button> <button className="cta button-white-border">Watch Demo </button>
    </div>
    <div className="postcards">
        <div className="images">
            <img src={ Pottery } alt='' />
            <img src={ Elephant } alt='' />
            <img src={ AfricanWomen } alt='' />
        </div>
    </div>
</div>
  </section>
);

export default Hero;
