import React, { Component } from "react";
import { Map, TileLayer, Polyline } from "react-leaflet";
// import Decode from "../components/Decode";
const polyline = require("@mapbox/polyline");

export default class ActivityMap extends Component {
  state = {
    lat: 51.505,
    lng: -0.09,
    zoom: 13
  };

  render() {
    const positionsArray = [
      [-120.2, 38.5],
      [-120.95, 40.7],
      [-126.453, 43.252]
    ];
    //
    return (
      <Map
        center={[this.state.lat, this.state.lng]}
        zoom={this.state.zoom}
        style={{ width: "80%", height: "600px" }}
      >
        {this.props.selectedActivity ? (
          <Polyline color="red" positions={[this.props.selectedActivity]} />
        ) : (
          <Polyline color="red" positions={positionsArray} />
        )}
        <TileLayer
          attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </Map>
    );
  }
}
