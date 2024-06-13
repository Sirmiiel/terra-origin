// src/components/SignUp.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign-up logic here
    console.log(`Full Name: ${fullName}, Email: ${email}, Password: ${password}`);
    navigate('/'); // Redirect to home after sign-up
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1>Start your journey here.</h1>
      <p>We don't just take you home, we get you up and running.</p>
      <input
        className="input"
        type="text"
        placeholder="Full Name"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        required
      />
      <input
        className="input"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        className="input"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button className="button" type="submit">Sign Up</button>
    </form>
  );
};

export default SignUp;
