import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';
import MapView from 'react-native-maps';

const { width, height } = Dimensions.get('window')

const SCREEN_HEIGHT = height;
const SCREEN_WIDTH = width;
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

class GeolocationExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      initialPosition: {
          latitude: 0,
          longitude: 0,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }
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
    (error) => alert('Bad connction'),
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
