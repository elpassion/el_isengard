import React from 'react';
import { asset, Box, Plane, VrButton } from 'react-vr';

export class Building extends React.Component {
  constructor(props) {
    super(props);
    this.state = { height: 1 }
    this.changeHeight = this.changeHeight.bind(this);
  }

  style() {
    const transform = this.props.data.transform
    return {
      transform: [
        { translateX: transform.translateX },
        { translateY: transform.translateY + this.state.height / 2},
        { translateZ: transform.translateZ },
        { rotateY: transform.rotateY }
      ]
    }
  }

  changeHeight() {
    this.setState({
      height: this.props.data.dimensions.height
    })
  }

  render() {
    const dimensions = this.props.data.dimensions
    return (
      <VrButton onClick={this.changeHeight}>
        <Box
          style={this.style()}
          dimWidth={dimensions.width}
          dimHeight={this.state.height}
          dimDepth={dimensions.depth}
          texture={asset('test_texture.png')}
        />
      </VrButton>
    )
  }
}