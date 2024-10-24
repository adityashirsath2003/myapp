import React, { useState } from 'react';
import axios from 'axios';

export function Delete({mail,title}) {
    const [error, setError] = useState('');

    const fetchBooks = async () => {
        try {
            const response = await axios.get('http://localhost:5000/delete',{
                mail,
                title
            });
        } catch (error) {
            setError('Error fetching books');
            console.error(error.message);
        }
    };

    const listStyle = {
        listStyleType: 'none',
        padding: 0,
    };

    const listItemStyle = {
        border: '1px solid #ccc',
        borderRadius: '5px',
        padding: '10px',
        margin: '10px 0',
        backgroundColor: '#f9f9f9',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    };

    return (
        <div>
            <button onClick={fetchBooks}>Delete</button>
        </div>
    );
}