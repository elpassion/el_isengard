import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  View,
} from 'react-vr';
import { Building } from './building';
import { Counter } from './counter';
import { ElPassion } from './elpassion';
import { SceneLight } from './scene_light';
import data from './data.json';

const buildings = data["buildings"]

export default class HackathonRondoDaszynskiego extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spinnaker: {
        height: 1
      },
      generation: {
        height: 1
      },
      skyliner: {
        height: 1
      }
    }
    this.startChangingHeight = this.startChangingHeight.bind(this);
    this.stopChangingHeight = this.stopChangingHeight.bind(this);
  }

  startChangingHeight(buildingName) {
    this.refreshInvervalID = setInterval(() =>  {
      if (this.state[buildingName].height >= buildings[buildingName].dimensions.height) { this.stopChangingHeight(); return }
      var newState = {};
      newState[buildingName] = {}
      newState[buildingName].height = this.state[buildingName].height + 1
      this.setState(newState);
    }, 10)
}

  stopChangingHeight() {
    clearInterval(this.refreshInvervalID);
  }

  changeHeight(building, newHeight) {
    const newState = {};
    newState[building] = newHeight
    this.setState(newState);
  }
  
  render() {
    return (
      <View>
        <Pano source={asset(data["pano"])}/>
        <ElPassion />
        <SceneLight />
        <Building
          data={buildings["spinnaker"]}
          height={this.state["spinnaker"].height}
          onEnter={() => { this.startChangingHeight('spinnaker')}}
          onExit={() =>{ this.stopChangingHeight() }}/>

        <Building 
          data={buildings["generation"]}
          height={this.state["generation"].height}
          onEnter={() => { this.startChangingHeight('generation')}}
          onExit={() =>{ this.stopChangingHeight() }}/>

        <Building data={buildings["skyliner"]}
          height={this.state["skyliner"].height}
          onEnter={() => { this.startChangingHeight('skyliner')}}
          onExit={() =>{ this.stopChangingHeight() }}/>

        <Counter data={buildings["spinnaker"]} height={this.state["spinnaker"].height}/>
        <Counter data={buildings["generation"]} height={this.state["generation"].height} />
        <Counter data={buildings["skyliner"]} height={this.state["skyliner"].height} />

      </View>
    );
  }
};

AppRegistry.registerComponent('HackathonRondoDaszynskiego', () => HackathonRondoDaszynskiego);
