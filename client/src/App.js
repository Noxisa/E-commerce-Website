import React from "react";

import './App.css';
import Navbar from './more/Navbar';
import Content from './more/Content';

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
      <Content />
      <header className="App-header">
       
         
      </header>
    </div>
  );
}

export default App;
