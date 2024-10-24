import React from 'react';
import {Link} from 'react-router-dom';

export function Navbar(){
    return (
        <nav>
            <h1>Search Books</h1>
            <ul>
               <Link to = "/getallbooks">Get All Books </Link>
               <Link to = "/getbytitle">Get Books by Title </Link>
               <Link to = "/getbyname">Get Books by Author Name </Link>
               <Link to = "/getbyisbn">Get Books by ISBN </Link>
            </ul>
        </nav>
    );
}