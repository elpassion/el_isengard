import React from 'react';
import { DirectionalLight } from 'react-vr';

export class SceneLight extends React.Component {
  render(){
    return(
      <DirectionalLight
        intensity={10}
        style={{
          transform: [ {translate: [0, 0, 0]}]
        }}
      />
    )
  }
}