import React from 'react';
import { asset, Box, VrButton } from 'react-vr';

export class Building extends React.Component {
  constructor(props) {
    super(props);
    this.refreshInvervalID = null;
    this.handleEnter = this.handleEnter.bind(this);
    this.handleExit = this.handleExit.bind(this);
  }

  style() {
    return {
      color: this.props.data.color,
      transform: [
        { translateX: this.props.data.building_position.x },
        { translateY: this.props.data.building_position.y + this.props.height / 2},
        { translateZ: this.props.data.building_position.z },
        { rotateY: this.props.data.building_position.rotateY }
      ]
    }
  }

  handleEnter() {
    this.props.onEnter()
  }

  handleExit() {
    this.props.onExit()
  }

  render() {
    return (
      <VrButton onEnter={this.handleEnter} onExit={this.handleExit}>
        <Box
          style={this.style()}
          dimWidth={this.props.data.dimensions.width}
          dimHeight={this.props.height}
          dimDepth={this.props.data.dimensions.depth}
          lit={true}
        />
      </VrButton>
    )
  }
}