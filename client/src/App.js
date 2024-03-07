import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './more/Navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Services from './pages/services';
import Contact from './pages/contact';
import SignUp from './pages/signup';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api")
      .then(res => res.json())
      .then(data => setData(data.message))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return ( 
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/contact-us' element={<Contact />} />
          <Route path='/sign-up' element={<SignUp />} />
        </Routes>
      </Router>
      
      <div>
        <header className="App-header">
          <p>{data !== null ? data : "Loading..."}</p>
        </header>
      </div>
    </>
  );
}

export default App;
