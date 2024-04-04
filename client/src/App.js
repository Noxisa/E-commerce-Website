import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './more/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Products from './pages/products';
import Contact from './pages/contact';
import SignUp from './pages/signup';
import Card from './pages/card';
import Footer from './more/Footer/Footer';


function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("/api")
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
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
          <Route path='/products' element={<Products />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/card' element={<Card />} />
          <Route path='/sign-up' element={<SignUp />} />
        </Routes>
        <Footer />
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
