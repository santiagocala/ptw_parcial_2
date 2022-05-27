import React from 'react';
import logo from './logo.svg';
import './App.css';
import Characters from './components/Characters';
import Movies from './components/Movies';
import {FormattedMessage} from 'react-intl';

function App() {
  return (
    <div className="App">
      <header>
        <h1>
          <FormattedMessage id='Title'/>
        </h1>
      </header>
      <Movies/>
    </div>
  );
}

export default App;
