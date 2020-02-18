import React, { Component } from "react";
import { Map, Polyline } from "react-leaflet";
import MapboxLayer from "../components/MapboxLayer";
const MAPBOX_ACCESS_TOKEN =
  "pk.eyJ1IjoiY2hhcmx5ZmxhdGlyb24iLCJhIjoiY2s1bW9lbnQ3MGducjNycWl5b3cxNnpnayJ9.xCGIYxp4_LVQTo6ALIqI8A";

export default class ActivityMap extends Component {
  state = {
    lat: 51.505,
    lng: -0.09,
    zoom: 13
  };

  render() {
   

    return (
      <Map
        center={[this.state.lat, this.state.lng]}
        zoom={this.state.zoom}
        style={{ width: "80%", height: "600px" }}
      >
        {this.props.selectedActivity && (
          <Polyline
            color="red"
            positions={[this.props.selectedActivityPolyline]}
          />
        )}
        <MapboxLayer
          accessToken={MAPBOX_ACCESS_TOKEN}
          style="mapbox://styles/mapbox/streets-v9"
        />
      </Map>
    );
  }
}
