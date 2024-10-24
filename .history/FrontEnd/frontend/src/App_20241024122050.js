import React from 'react';
import './App.css';
import { Navbar } from './Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Search } from './Search';

function GetBooksByTitle() {
  return <h2 style={headingStyle}>Books by Title Page</h2>;
}

function GetBooksByAuthor() {
  return <h2 style={headingStyle}>Books by Author Page</h2>;
}

function GetBooksByISBN() {
  return <h2 style={headingStyle}>Books by ISBN Page</h2>;
}

const App = () => {
  const appStyle = {
    textAlign: 'center',
    backgroundColor: '#f4f4f4',
    minHeight: '100vh',
    padding: '20px',
  };


  return (
    <Router>
      <div style={appStyle}>
        <Navbar />
        <Routes>
          <Route path="/getallbooks" element={<Search />} />
          <Route path="/getbytitle" element={<GetBooksByTitle />} />
          <Route path="/getbyname" element={<GetBooksByAuthor />} />
          <Route path="/getbyisbn" element={<GetBooksByISBN />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
