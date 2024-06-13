// src/components/Features.js
import React from 'react';
import './Features.css';
import '../App.css';

const Features = () => (
  <section className="features" id="features">
    <h2>Our Itinerary</h2>
    <p>We craft itineries that cater to your specific interests abd desires</p>
    <div className="feature-list">
      <div className="feature-item">
        <h3>Culsine Expenditure</h3>
        <button className="cta-button">Explore</button>
      </div>

      <div className="feature-item">
        <h3>Cultural Blend</h3>
        <button className="cta-button">Explore</button>
      </div>
      
      <div className="feature-item">
        <h3>Culsine Expenditure</h3>
        <button className="cta-button">Explore</button>
      </div>
    </div>
  </section>
);

export default Features;
