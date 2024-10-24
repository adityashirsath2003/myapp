import React, { useState } from 'react';
import './App.css';
import { Navbar } from './Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Search } from './Search';
import {Navbar2} from './Navbar2';
import { Login } from './Login';
import { Register } from './Register';
import { Navbar3 } from './Navbar3';
import  SearchTitle  from './SearchTitle';
import SearchName from './SearchName';
import SearchISBN from './SearchISBN';

const App = () => {
  const [mail, setMail] = useState('');

  const appStyle = {
    textAlign: 'center',
    backgroundColor: '#f4f4f4',
    minHeight: '100vh',
    padding: '20px',
  };

  return (
    <div style={appStyle}>
      {mail ? (
        <div>
          <Router>
          <Navbar />
          <Routes>
          <Route path="/getmyreviews" element={<Search />} />
          <Route path="/deletemyreviews" element={<Search />} />
          </Routes>
          </Router>
          {/* <h1>{mail}</h1> */}
          </div>
      ) : (     

        <Router>
        <Navbar3 />
        <Routes>
          <Route path="/getallbooks" element={<Search />} />
          <Route path="/getbytitle" element={<SearchTitle />} />
          <Route path="/getbyname" element={<SearchName />} />
          <Route path="/getbyisbn" element={<SearchISBN />} />
          <Route path="/login" element={<Login setMail={setMail} />} />
          <Route path="/register" element={<Register mail={mail} />} />
        </Routes>
      </Router>
      )}
    </div>
  );
};

export default App;
