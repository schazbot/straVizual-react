import React, { Component } from "react";
import { Map, TileLayer, Rectangle } from "react-leaflet";

const outer = [
  [50.505, -29.09],
  [52.505, 29.09]
];

const inner = [
  [49.505, -2.09],
  [53.505, 2.09]
];

// type State = {
//   bounds: Array<[number, number]>,
// }

export default class BoundsExample extends Component {
  state = {
    bounds: [
      [50.505, -29.09],
      [52.505, 29.09]
    ]
  };

  onClickInner = () => {
    this.setState({
      bounds: [
        [49.505, -2.09],
        [53.505, 2.09]
      ]
    });
  };

  onClickOuter = () => {
    this.setState({
      bounds: [
        [50.505, -29.09],
        [52.505, 29.09]
      ]
    });
  };

  render() {
    return (
      <Map bounds={this.state.bounds}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Rectangle
          bounds={outer}
          color={this.state.bounds === outer ? "red" : "white"}
          onClick={this.onClickOuter}
        />
        <Rectangle
          bounds={inner}
          color={this.state.bounds === inner ? "red" : "white"}
          onClick={this.onClickInner}
        />
      </Map>
    );
  }
}
