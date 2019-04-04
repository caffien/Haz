import React, { Component } from 'react';
import { View, Text } from 'react-native';
import MapView from 'react-native-maps';

class GeolocationExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: 40.7536853999999,
      longitude: 0,
      error: null,
    };
  }

  componentDidMount() {
    console.log('this.props.Marker');
    console.log(this.props.Markers);
    console.log('this.props.Marker');

    navigator.geolocation.getCurrentPosition((position) => {
      var lat = parseFloat(position.coords.latitude)
      var long = parseFloat(position.coords.longitude)

      var initialRegion = {
        latitude: lat,
        longitude: long,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      }

      this.setState({ initialPosition: initialRegion })
    },
    (error) => alert("Bad connction"),
    { enableHighAccuracy: true, timeout: 200000, maximumAge: 10000 });
  }

  componentDidmount() {
    navigator.geolocation.clearWatch(this.watchId);
  }


  render() {
    return (
      <View>
      { true && <MapView
      initialRegion={{
        latitude: this.state.latitude,
        longitude: this.state.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      />
    }
    </View>


    );
  }
}

export default GeolocationExample;
