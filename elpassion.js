import React from 'react';
import { Text } from 'react-vr';

export class ElPassion extends React.Component {
  render() {
    return (
      <Text
        style={{
          backgroundColor: '#777879',
          fontSize: 10,
          fontWeight: '400',
          layoutOrigin: [0.5, 0.5],
          paddingLeft: 0.2,
          paddingRight: 0.2,
          textAlign: 'center',
          textAlignVertical: 'center',
          transform: [{translate: [0, -135, 30]}, {rotateX: 90}, {rotateY: 180}, {rotateZ: 187}],
        }}>
        EL Passion - Hackathon 14.04.2018
      </Text>
    )
  }
}