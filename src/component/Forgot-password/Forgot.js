import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Forgot.css";

const Forgot = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('', { email });
      setMessage('Password reset link sent!');
    } catch (error) {
      setMessage('Failed to send new password!');
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage('');
    }, 3000);

    return () => clearTimeout(timer);
  }, [message]);

  return (
    <div className="forgot-flex">
     <div className='all'>
       <header><h1>Mealy</h1></header>
      <div className="form-container">
        <div className='text'>
          <h4 className="form-title">Forgot your Password?</h4>
        <p className="form-description">
          Enter the email associated with your account, and we will send you a code to reset it.
        </p>
        </div>
        <div className='input'>
          <form onSubmit={handleSubmit}>
          <input
            type="email"
            className="input-field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            required
          />
          <button type="submit" className="submit-button">
            Get Code
          </button>
        </form>
        </div>
        {message && <p className="message">{message}</p>}
        <p className="forgot-password">
          Forgot your password? <a href="/reset-password">Click here</a> to create a new password.
        </p>
      </div>
     </div>
      <div className="image" />
    </div>
  );
};

export default Forgot;