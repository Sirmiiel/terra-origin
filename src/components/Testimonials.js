// src/components/Testimonials.js
import React from 'react';
import './Testimonials.css';

const Testimonials = () => (
  <section className="testimonials" id="testimonials">
    <h2>Testimonials</h2>
    <div className="testimonial-list">
      <div className="testimonial-item">
        <p>"This product changed my life!" - User 1</p>
      </div>
      <div className="testimonial-item">
        <p>"Amazing experience, highly recommend." - User 2</p>
      </div>
      <div className="testimonial-item">
        <p>"Best investment I've ever made." - User 3</p>
      </div>
    </div>
  </section>
);

export default Testimonials;
