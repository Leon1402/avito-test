import React from 'react';
import './App.css';
import Gallery from './Gallery/Gallery';

const App = (props) => {
  return (
    <div className="App">
      <header className="header">
        <h1>Test APP</h1>
      </header>
        <Gallery />
    </div>
  );
}

export default App;
