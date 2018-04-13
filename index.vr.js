import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  View,
} from 'react-vr';
import { Building } from './building';
import { ElPassion } from './elpassion';
import { SceneLight } from './scene_light';
import data from './data.json';

const buildings = data["buildings"]

export default class HackathonRondoDaszynskiego extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset(data["pano"])}/>
        <ElPassion />
        <SceneLight />
        <Building data={buildings["spinnaker"]}/>
        <Building data={buildings["generation"]}/>
        <Building data={buildings["skyliner"]} />
      </View>
    );
  }
};

AppRegistry.registerComponent('HackathonRondoDaszynskiego', () => HackathonRondoDaszynskiego);
