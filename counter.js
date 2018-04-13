import React from 'react';
import { Text, View } from 'react-vr';

export class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 100
    }
  }
  render() {
    return (
      <View
        style={{
          width: 50
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 10,
            transform: [
              {
                translate: [
                  this.props.data.counter_position.x - (this.props.data.dimensions.width / 2) + 5,
                  this.props.data.counter_position.y + (this.props.height) + 10,
                  this.props.data.counter_position.z + (this.props.data.dimensions.depth / 2) + 5
                ]
              },
              {
                rotateY: this.props.data.counter_position.rotateY
              }
            ]
          }}
        >
        {this.props.height}m
        </Text>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 10,
            transform: [
              {
                translate: [
                  this.props.data.counter_position.x - (this.props.data.dimensions.width / 2) + 5,
                  this.props.data.counter_position.y + (this.props.height) + 10,
                  this.props.data.counter_position.z + (this.props.data.dimensions.depth / 2) + 5
                ]
              },
              {
                rotateY: this.props.data.counter_position.rotateY
              }
            ]
          }}
        >
        {this.props.data.building_name}
        </Text>
      </View>
    )
  }
}