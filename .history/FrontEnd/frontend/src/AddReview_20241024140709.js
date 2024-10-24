import React, { useState } from 'react';
import axios from 'axios';

export function AddReview({ mail }) {
    const [email, setEmail] = useState('');
    const [title, setTitle] = useState('');
    const [rate, setRate] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(''); 
        setEmail(mail);
        try {
            const response = await axios.post('http://localhost:5000/addreview', {
                email,
                title,
                rate
            });
            console.log('Review successful:', response.data);
            setMail(response.data.email);
            setEmail(''); 
            setPassword('');
            setMail(email);
        } catch (error) {
            setError(error.response?.data?.error || 'Error logging in');
            console.error(error.message);
            setMail(email);
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
                <label>Title :</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={inputStyle}
                />
            </div>
            <div>
                <label>Review :</label>
                <input
                    type="password"
                    value={title}
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
