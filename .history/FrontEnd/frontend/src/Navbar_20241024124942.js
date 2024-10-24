import React from 'react';
import { Link } from 'react-router-dom';

export function Navbar() {
    const navStyle = {
        backgroundColor: '#333',
        padding: '1rem',
        textAlign: 'center',
    };

    const headingStyle = {
        color: '#fff',
        marginBottom: '1rem',
    };

    const ulStyle = {
        listStyleType: 'none',
        padding: '0',
        display: 'flex',
        justifyContent: 'center',
        gap: '1.5rem',
    };

    const linkStyle = {
        color: '#fff',
        textDecoration: 'none',
        fontSize: '18px',
        marginLeft: '50px',
        marginRight: '50px',
    };

    const linkHoverStyle = {
        color: '#ffeb3b',
    };

    return (
        <nav style={navStyle}>
            <h1 style={headingStyle}>Search Books</h1>
            <ul style={ulStyle}>
                <li><Link to="/getmyreview" style={linkStyle}>Get my reviews</Link></li>
                <li><Link to="/deletemyreview" style={linkStyle}>Delete my reviews</Link></li>
                
            </ul>
        </nav>
    );
}
