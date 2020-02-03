import React from 'react';
import './App.css';
import Home from './pages/Home'
import WeatherGraphic from './pages/WeatherGraphic'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path='/:id'>
          <WeatherGraphic />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
