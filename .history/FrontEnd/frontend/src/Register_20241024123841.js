import React, { useState } from 'react';

export function Register({ mail }){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setEmail(mail);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <h2>Register</h2>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        
        required
        style={inputStyle}
      />
      <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        style={inputStyle}
      />
      <button type="submit" style={buttonStyle}>Register</button>
    </form>
  );
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: '#fff',
  padding: '20px',
  borderRadius: '5px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
};

const inputStyle = {
  margin: '10px 0',
  padding: '10px',
  width: '200px',
  borderRadius: '5px',
  border: '1px solid #ccc',
};

const buttonStyle = {
  padding: '10px 20px',
  border: 'none',
  borderRadius: '5px',
  backgroundColor: '#007BFF',
  color: '#fff',
  cursor: 'pointer',
};