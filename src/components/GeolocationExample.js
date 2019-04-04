import React, { Component } from 'react';
import { View, Text } from 'react-native';
import MapView from 'react-native-maps';

class GeolocationExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      longitude: null,
      error: null,
    };
  }

  componentDidMount() {
    this.watchId = navigator.geolocation.watchPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000, distanceFilter: 10 },
    );
  }

  componentDidmount() {
    navigator.geolocation.clearWatch(this.watchId);
  }


  render() {
    return (
      <MapView
      initialRegion={{
        latitude: this.state.latitude,
        longitude: this.state.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      />

    );
  }
}

export default GeolocationExample;
