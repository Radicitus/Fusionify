import React from 'react';
import logo from './assets/fusion_logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <a
          className="App-link"
          href="https://www.facebook.com/fusionuci/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Fusion Facebook Page
        </a>
      </header>
    </div>
  );
}

export default App;
