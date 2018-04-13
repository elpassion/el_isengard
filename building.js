import React from 'react';
import { asset, Box, Plane, View, VrButton } from 'react-vr';

export class Building extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 1
    }
    this.startChangingHeight = this.startChangingHeight.bind(this);
    this.stopChangingHeight = this.stopChangingHeight.bind(this);
    this.refreshInvervalID = null;
  }

  style() {
    return {
      transform: [
        { translateX: this.props.data.position.x },
        { translateY: this.props.data.position.y + this.state.height / 2},
        { translateZ: this.props.data.position.z },
        { rotateY: this.props.data.position.rotateY }
      ]
    }
  }

  startChangingHeight() {
      this.refreshInvervalID = setInterval(() =>  {
        if (this.state.height >= this.props.data.dimensions.height) { this.stopChangingHeight(); return }
        this.setState({height: this.state.height + 1})
      }, 10)
  }

  stopChangingHeight() {
    clearInterval(this.refreshInvervalID);
  }

  render() {
    const dimensions = this.props.data.dimensions
    return (
      <VrButton onEnter={this.startChangingHeight} onExit={this.stopChangingHeight}>
        <Box
          style={this.style()}
          dimWidth={dimensions.width}
          dimHeight={this.state.height}
          dimDepth={dimensions.depth}
          lit={true}
        />
      </VrButton>
    )
  }
}