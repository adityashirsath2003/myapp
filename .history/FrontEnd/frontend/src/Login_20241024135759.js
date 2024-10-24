import React, { useState } from 'react';
import axios from 'axios';

export function Login({ setMail }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(''); 
        try {
            const response = await axios.post('http://localhost:5000/login', {
                email,
                password
            });
            console.log('Login successful:', response.data);
            setMail(response.data.email);
            setEmail(''); 
            setPassword('');
            setMail(email);
        } catch (error) {
            setError(error.response?.data?.error || 'Error logging in');
            console.error(error.message);
        }
    };

    const formStyle = {
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        width: '300px',
        margin: '0 auto',
    };

    const inputStyle = {
        width: '100%',
        padding: '10px',
        border: '1px solid #ddd',
        borderRadius: '4px',
        boxSizing: 'border-box',
        marginBottom: '15px',
    };

    const buttonStyle = {
        width: '100%',
        padding: '10px',
        backgroundColor: '#28a745',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '16px',
    };

    return (
        <form onSubmit={handleSubmit} style={formStyle}>
            <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Login</h1>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={inputStyle}
                />
            </div>
            <div>
                <label>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    style={inputStyle}
                />
            </div>
            <button type="submit" style={buttonStyle}>
                Login
            </button>
            {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
        </form>
    );
}
