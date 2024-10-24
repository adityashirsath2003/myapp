import React, { useState } from 'react';
import './App.css';
import { Navbar } from './Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Search } from './Search';

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
        <Router>
          <Navbar />
          <Routes>
            <Route path="/getallbooks" element={<Search mail={mail} />} />
            <Route path="/getbytitle" element={<Search />} />
            <Route path="/getbyname" element={<Search />} />
            <Route path="/getbyisbn" element={<Search />} />
          </Routes>
        </Router>
      ) : (
        <div>
          <h2>Please log in to access the app.</h2>
          {/* Here you can add a form or button to set the mail state */}
          <input
            type="email"
            placeholder="Enter your email"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
          />
          <button onClick={() => setMail(mail)}>Login</button>
        </div>
      )}
    </div>
  );
};

export default App;
