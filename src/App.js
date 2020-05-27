import React, { Component } from 'react';
import { SAGE2App, useSAGE2AppStateValue } from "./useSAGE2AppState";

// import logo from './logo.svg';
import './App.css';

import Map from './views/Map/Map';
// import Debug from './views/Debug/Debug';


class App extends Component {
  render() {
    return (
      <SAGE2App
        initialState={{
          mapZoom: 12,
          // mapCenter: [[-37.814, 144.96332], [-66.79849, -63.39783], [-26.80319, 149.31359], [-29.82822, 146.76462]]
          mapCenter: [[-37.80815648152641, 144.95541572570804]]
        }}
      >
        <ZoomUsingState />
      </SAGE2App>
    );
  }
}

function ZoomUsingState() {
  let [mapZoom, setCount] = useSAGE2AppStateValue("mapZoom");
  let [mapCenter, setCenter] = useSAGE2AppStateValue("mapCenter");
  var position = [-37.80815648152641, 144.95541572570804]

  return (
    <div>
      <div id="control-block">
        <button onClick={() => { mapZoom < 17 ? setCount(mapZoom + 1): setCount(mapZoom) }}>+</button>
        <button onClick={() => { mapZoom > 0 ? setCount(mapZoom - 1): setCount(mapZoom) }}>-</button>
      </div>
      <Map zoom={mapZoom} center={position} ></Map>
    </div>
  );
}

export default App;
