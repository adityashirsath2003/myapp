import React from 'react';
import './App.css';
import { Navbar } from './Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Search } from './Search';


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
          <Route path="/getbytitle" element={<Search />} />
          <Route path="/getbyname" element={<Search />} />
          <Route path="/getbyisbn" element={<Search />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
