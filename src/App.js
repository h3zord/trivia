import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
// import Feedback from './pages/Feedback';
// import Ranking from './pages/Ranking';
import Game from './pages/Game';
import Login from './pages/Login';
import Settings from './pages/Settings';
import logo from './trivia.png';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={ logo } className="App-logo" alt="logo" />
        <p>SUA VEZ</p>
      </header>
      <Switch>
        <Route path="/" exact component={ Login } />
        <Route path="/game" component={ Game } />
        <Route path="/settings" component={ Settings } />
        {/* <Route path="/feedback" component={ Feedback } /> */}
        {/* <Route path="/ranking" component={ Ranking } /> */}
      </Switch>
    </div>
  );
}
