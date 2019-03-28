import React, { Component } from 'react';
import MapView from 'react-native-maps';
import { View } from 'react-native';

export default class Mapz extends Component {

render() {
  return (
    <MapView
    initialRegion={{
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
    />
  );
}
}
