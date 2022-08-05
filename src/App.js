import React from 'react';
import { Route, Switch } from 'react-router-dom';
import logo from './trivia.png';
import './App.css';
import Login from './pages/Login';
import Play from './pages/Play';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={ logo } className="App-logo" alt="logo" />
        <p>SUA VEZ</p>
      </header>
      <Switch>
        <Route path="/" exact component={ Login } />
        <Route path="/play" component={ Play } />
      </Switch>

    </div>
  );
}
