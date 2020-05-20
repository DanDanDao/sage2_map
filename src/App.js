import React, { Component } from 'react';
import { Route, BrowserRouter } from "react-router-dom";
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
          zoom: 0,
        }}
      >
        <ZoomUsingState />
        <BrowserRouter basename={window.location.pathname || ''}>
          <Route exact path="/" component={() => <Map zoom={this.props.zoom} />} />
          <Route path="/debug" component={Debug} />
        </BrowserRouter>
      </SAGE2App>
    );
  }
}

function ZoomUsingState() {
  let [zoom, setCount] = useSAGE2AppStateValue("zoom");

  console.log("app state", zoom);
  // var styles = '#zoom-block { position: absolute }';

  return (
    <div id="zoom-block">
      Zoom: {zoom}
      <button onClick={() => setCount(zoom + 1)}>+</button>
      <button onClick={() => setCount(zoom - 1)}>-</button>
    </div>
  );
}

export default App;
