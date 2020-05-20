import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { SAGE2App, useSAGE2AppStateValue } from "./useSAGE2AppState";

// import logo from './logo.svg';
import './App.css';

import Map from './views/Map/Map';
import Debug from './views/Debug/Debug';


class App extends Component {
  render() {
    return (
      <SAGE2App
        initialState={{
          count: 0,
        }}
      >
        {/* <ComponentUsingState /> */}
        <BrowserRouter basename={window.location.pathname || ''}>
          <Route exact path="/" component={Map} />
          <Route path="/debug" component={Debug} />
        </BrowserRouter>
      </SAGE2App>
    );
  }
}

function ComponentUsingState() {
  let [count, setCount] = useSAGE2AppStateValue("count");

  console.log("app state", count);

  return (
    <div>
      Count: {count} <button onClick={() => setCount(count + 1)}>++</button>
    </div>
  );
}

export default App;
