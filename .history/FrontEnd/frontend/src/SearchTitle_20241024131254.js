import React, { useState } from 'react';
import axios from 'axios';

const SearchTitle = () => {
    const [books, setBooks] = useState([]);
    const [error, setError] = useState('');
    const [title,setTitle] = useStat('');


    const fetchBooks = async () => {
        try {
            const response = await axios.get('http://localhost:5000/getallbooks');
            const final = response.data.filter((book) => book.title === title);
            setBooks(final);
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
            <input type = "text" onChange={()=>{setTitle(e.target.value)}}/>
            <button onClick={fetchBooks}>Get Books</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <ul style={listStyle}>
                {books.length > 0 ? (
                    books.map((book, index) => (
                        <li key={index} style={listItemStyle}>
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
}

export default SearchTitle;
