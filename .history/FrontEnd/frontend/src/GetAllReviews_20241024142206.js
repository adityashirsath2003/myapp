import React, { useState } from 'react';
import axios from 'axios';

export function GetAllReviews() {
    const [books, setBooks] = useState([]);
    const [error, setError] = useState('');

    const fetchBooks = async () => {
        try {
            const response = await axios.get('http://localhost:5000/getallreviews');
            setBooks(response.data);
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
            <h1>Book List</h1>
            <button onClick={fetchBooks}>Get Reviews</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <ul style={listStyle}>
                {books.length > 0 ? (
                    books.map((book, index) => (
                        <li key={index} style={listItemStyle}>
                            <strong>Title :</strong> {book.title} <br />
                            <strong>Rating :</strong> {book.rate} <br />
                        </li>
                    ))
                ) : (
                    <p>No books available. Click the button to fetch books.</p>
                )}
            </ul>
        </div>
    );
}
