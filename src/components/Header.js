// src/components/Header.js
import React from 'react';
import './Header.css';
import user from '../assets/user.svg';
import question from '../assets/question-sign-circle.svg';

const Header = () => (
  <header className="header">
    <nav className="nav">
      <h1 className="logo"><span style={{ backgroundColor: 'black', color: 'var(--main-color)', borderRadius: '5px', padding: '6px'}}>Terra</span> Origin</h1>
      <ul className="nav-links">
        <li><a href="#hero">Terra View</a></li>
        <li><a href="#features">Experience Terra</a></li>
        <li><a href="#testimonials">Find Events</a></li>
      </ul>
      <div className="profile">
        <img src={ question } alt='' />
        <img src={ user } alt='' />
      </div>
    </nav>
  </header>
);

export default Header;
