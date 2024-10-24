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
                <li><Link to="/getallbooks" style={linkStyle}>Get All Books</Link></li>
                <li><Link to="/getbytitle" style={linkStyle}>Get Books by Title</Link></li>
                <li><Link to="/getbyname" style={linkStyle}>Get Books by Author Name</Link></li>
                <li><Link to="/getbyisbn" style={linkStyle}>Get Books by ISBN</Link></li>
                <li><Link to="/getreview" style={linkStyle}>Get all reviews</Link></li>
                
            </ul>
        </nav>
    );
}
