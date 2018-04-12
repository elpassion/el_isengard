import React from 'react';
import { Plane } from 'react-vr';

export class Building extends React.Component {
  constructor(props) {
    super(props);
    this.state = { scale: 1 }
  }

  render() {
    return (
      <Plane
        style={this.props.data.style}
        dimWidth={this.props.data.plane.width}
        dimHeight={this.props.data.plane.height}
      />
    )
  }
}