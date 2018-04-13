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
    // console.log([
    //   this.props.data.position.x - (this.props.data.dimensions.width / 2) + 5,
    //   this.props.data.position.y + (this.props.data.dimensions.height) + 20,
    //   this.props.data.position.z + (this.props.data.dimensions.depth / 2) + 5
    // ]);
    return (
      <View
        style={{
          width: 30
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 10,
            backgroundColor: 'black',
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
      </View>
    )
  }
}