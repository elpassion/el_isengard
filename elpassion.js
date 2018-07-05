import React from 'react';
import { Text, Plane } from 'react-vr';

export class ElPassion extends React.Component {
  render() {
    return (
      <Plane
        style={{transform: [{translate: [0, -135, 30]}, {rotateX: 90}, {rotateY: 180}, {rotateZ: 187}]}}
      />
    )
  }
}