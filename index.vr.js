import React from 'react';
import {
  AmbientLight,
  AppRegistry,
  asset,
  Pano,
  View,
} from 'react-vr';
import { Building } from './building';
import { ElPassion } from './elpassion';
import data from './data.json'

const buildings = data["buildings"]

export default class HackathonRondoDaszynskiego extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset(data["pano"])}/>
        <ElPassion />
        <AmbientLight intensity={ 2.6 } />
        
        <Building data={buildings["spinnaker"]}/>
        <Building data={buildings["generation"]}/>
        <Building data={buildings["skyliner"]} />
      </View>
    );
  }
};

AppRegistry.registerComponent('HackathonRondoDaszynskiego', () => HackathonRondoDaszynskiego);
