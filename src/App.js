import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from "react-router-dom";

// import logo from './logo.svg';
import './App.css';

import Map from './views/Map/Map';
import Debug from './views/Debug/Debug';


class App extends Component {
  render() {
    return (
      <BrowserRouter basename={window.location.pathname || ''}>
        <Route exact path="/" component={Map} />
        <Route path="/debug" component={Debug} />
      </BrowserRouter>
    );
  }
}

export default App;
