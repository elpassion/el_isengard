import React from 'react';
import {
  AmbientLight,
  AppRegistry,
  asset,
  Box,
  Model,
  Pano,
  Plane,
  Text,
  View,
} from 'react-vr';
import { Building } from './building'
import data from './data.json'

const buildings = data["buildings"]

export default class HackathonRondoDaszynskiego extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset(data["pano"])}/>
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
        <AmbientLight intensity={ 2.6 } />
        
        <Building data={buildings["spinnaker"]}/>
        <Building data={buildings["generation"]}/>
        <Building data={buildings["skyliner"]} />
      </View>
    );
  }
};

AppRegistry.registerComponent('HackathonRondoDaszynskiego', () => HackathonRondoDaszynskiego);
