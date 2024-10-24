import React from 'react';
import './App.css';
import { Navbar } from './Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Search } from './Search';


function GetBooksByTitle() {
  return <h2>Books by Title Page</h2>;
}

function GetBooksByAuthor() {
  return <h2>Books by Author Page</h2>;
}

function GetBooksByISBN() {
  return <h2>Books by ISBN Page</h2>;
}

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/getallbooks" component={<Search/>} />
          <Route path="/getbytitle" component={GetBooksByTitle} />
          <Route path="/getbyname" component={GetBooksByAuthor} />
          <Route path="/getbyisbn" component={GetBooksByISBN} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

