import React, { useState } from 'react';
import axios from 'axios';

export function Search(){
    const [books, setBooks] = useState([]);
    const [error, setError] = useState('');

    const fetchBooks = async () => {
        try {
            const response = await axios.get('http://localhost:3000/books'); 
            setBooks(response.data);
        } catch (error) {
            setError('Error fetching books');
            console.error(error.message);
        }
    };

    return (
        <div>
            <h1>Book List</h1>
            <button onClick={fetchBooks}>Get Books</button>
            {error && <p>{error}</p>}
            <ul>
                {books.length > 0 ? (
                    books.map((book, index) => (
                        <li key={index}>
                            <strong>Title:</strong> {book.title} <br />
                            <strong>Author:</strong> {book.author} <br />
                            <strong>ISBN:</strong> {book.isbn}
                        </li>
                    ))
                ) : (
                    <p>No books available. Click the button to fetch books.</p>
                )}
            </ul>
        </div>
    );
};


