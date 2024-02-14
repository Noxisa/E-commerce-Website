import React from "react";
import './App.css';
import Navbar from './more/Navbar';
import { BrowserRouter } from "react-router-dom";

function App() {
  const [data, setData] = React.useState(null);

  React.useState(() =>{
    fetch("/api")
      .then(res => res.json())
      .then(data => setData(data.message));
  }, []);

  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
       
         
      </header>
    </div>
  );
}

export default App;
