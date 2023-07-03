import React from 'react';
import logo from './logo.svg';
import './App.css';
import nasaImage from './nasa.jpg';
import NasaComponent from './NasaComponent';
import ClickCount from "./ClickCount";
import Component1 from "./Component1";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <NasaComponent/>
        </p>
        <p>
          <ClickCount/>
        </p>
        <p>
          Exercise 3
          <Component1/>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
