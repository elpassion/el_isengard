import React from 'react';
import { asset, Box, Plane } from 'react-vr';

export class Building extends React.Component {
  constructor(props) {
    super(props);
  }

  style() {
    const transform = this.props.data.transform
    return {
      transform: [
        { translateX: transform.translateX },
        { translateY: transform.translateY + this.props.data.dimensions.height / 2},
        { translateZ: transform.translateZ },
        { rotateY: transform.rotateY }
      ]
    }
  }

  render() {
    const dimensions = this.props.data.dimensions
    return (
      <Box
        style={this.style()}
        dimWidth={dimensions.width}
        dimHeight={dimensions.height}
        dimDepth={dimensions.depth}
        texture={asset('test_texture.png')}
      />
    )
  }
}