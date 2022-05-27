import React from 'react';
import logo from './logo.svg';
import './App.css';
import Characters from './components/Characters';
import Movies from './components/Movies';

function App() {
  return (
    <div className="App">
      <header>
        <h1>
          Movies
        </h1>
      </header>
      <Movies/>
    </div>
  );
}

export default App;
