import React from 'react';
import logo from './logo.svg';
import './App.css';
import nasaImage from './nasa.jpg';
import NasaComponent from './NasaComponent';
import ClickCount from "./ClickCount";
import Component1 from "./Component1";
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <Router>
            <Switch>
              <Route path = '/nasa'>
                <NasaComponent/>
                <ClickCount/>
              </Route>

              <Route path = '/counter'>
                <Component1/>
              </Route>
            </Switch>
          </Router>
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
