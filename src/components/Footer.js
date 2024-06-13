// src/components/Footer.js
import React from 'react';
import './Footer.css';
import '../App.css';

const h1 = {
  color: 'black',
  textDecoration: 'none',
};


const Footer = () => (
  <footer className="footer" id="footer">
    <div>
      <h1 className="logo" style={h1}><span style={{ backgroundColor: 'black', color: 'var(--main-color)', borderRadius: '5px', padding: '6px'}}>Terra</span> Origin</h1>
      <p>Africa: A tapestry of tradition,
        untamed beauty, and captivating
        tourism experiences.
      </p>
    </div>
    <div>
      <h3><u>Contact Info</u></h3>
      <p>Terra Origin<br />
      info@terraorigin.com <br />
      Mon - Fri 9am - 6pm
      </p>
    </div>
    <div>
      <h3>Subscribe to newsletter</h3>
    </div>
  </footer>
);

export default Footer;
