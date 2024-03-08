import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './more/Navbar/Navbar';
import { BrowserRouter as Router, Route, BrowserRouter} from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Products from './pages/products';
import Contact from './pages/contact';
import SignUp from './pages/signup';
import Card from './pages/card';

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
    <BrowserRouter>
        <Navbar />
      <Router>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/products' element={<Products />} />
          <Route path='/contact' element={<Contact />} />`
          
      <Route path='/card' element={<Card />}/>
        <Route path='/sign-up' element={<SignUp />} />
      </Router>
      </BrowserRouter>
      <div>
        <header className="App-header">
          <p>{data !== null ? data : "Loading..."}</p>
        </header>
      </div>
    </>
  );
}

export default App;
