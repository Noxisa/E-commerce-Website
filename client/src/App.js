import React from 'react';
import './App.css';
import Navbar from './more/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Services from './pages/services';
import Contact from './pages/contact';
import SignUp from './pages/signup';

function App() {
  const [data, setData] = React.useState(null);

  React.useState(() =>{
    fetch("/api")
      .then(res => res.json())
      .then(data => setData(data.message));
  }, []);

  return (
    <Router>
    <Navbar />
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/about' component={About} />
      <Route path='/services' component={Services} />
      <Route path='/contact-us' component={Contact} />
      <Route path='/sign-up' component={SignUp} />
    </Switch>
  </Router>
  );
}

export default App;
