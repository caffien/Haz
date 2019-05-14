import React, { Component } from 'react';

import {
    View,
    StyleSheet,
    Dimensions,
    Text,
    TouchableOpacity,
    Image,
    Alert
} from 'react-native';
import MapView from 'react-native-maps';
import { CardSection, Input, Card } from './common';

const { width, height } = Dimensions.get('window');

const SCREEN_HEIGHT = height;
const SCREEN_WIDTH = width;
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

class MapComponent extends Component {

    constructor() {
        super();
        this.state = {
            initialPosition: {
                latitude: 0,
                longitude: 0,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
            },
            Markers: [{
                coordinate: {
                    latitude: 0,
                    longitude: 46.76889,
                }
            }, {
                coordinate: {
                    latitude: 254.774265,
                    longitude: 46.738586,
                }
            }
            ]
        };
    }


    componentDidMount() {
        navigator.geolocation.getCurrentPosition((position) => {
                var lat = parseFloat(position.coords.latitude);
                var long = parseFloat(position.coords.longitude);

                var initialRegion = {
                    latitude: lat,
                    longitude: long,
                    latitudeDelta: LATITUDE_DELTA,
                    longitudeDelta: LONGITUDE_DELTA,
                };

                this.setState({ initialPosition: initialRegion });
            },
            (error) => Alert.alert('Bad connction'),
            { enableHighAccuracy: true, timeout: 200000, maximumAge: 10000 });
    }

    renderScreen = () => {
        return (
            <View style={[styles.container, this.props.style]}>
                {this.state.initialPosition.latitude !== 0 &&
                <MapView
                    style={styles.map}
                    showsUserLocation
                    userLocationAnnotationTitle='موقعي الحالي'
                    initialRegion={this.state.initialPosition}
                />

                }
            </View>
        );
    };

    render() {
        return (
            this.renderScreen()
        );
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        height: SCREEN_HEIGHT,
        width: SCREEN_WIDTH,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
});

export default MapComponent;

// followsUserLocation will keep following the user locatoin
// renderScreen = () => {
//
//         return (
//       <View style={Styles.container}>
//       { this.state.initialPosition.latitude &&
//         <MapView
//           style={Styles.map}
//           showsUserLocation
//           followsUserLocation
//           userLocationAnnotationTitle='موقعي الحالي'
//           initialRegion={this.state.initialPosition}
//         >
//
//
//         {this.props.Markers.map((marker) => (
//         this.renderMarker(marker)
//
//         ))}
//
//           </ MapView>
//         }
//       </View>
//     );
// }

// import React, { Component } from 'react';
// import { View, Text, Dimensions } from 'react-native';
// import MapView from 'react-native-maps';
//
// const { width, height } = Dimensions.getBackButton('window')
//
// const SCREEN_HEIGHT = height;
// const SCREEN_WIDTH = width;
// const ASPECT_RATIO = width / height;
// const LATITUDE_DELTA = 0.0922;
// const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
//
// class GeolocationExample extends Component {
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       initialPosition: {
//           latitude: 0,
//           longitude: 0,
//           latitudeDelta: 0.01,
//           longitudeDelta: 0.01,
//         }
//     };
//   }
//
//   componentDidMount() {
//     console.log('this.props.Marker');
//     console.log(this.props.Markers);
//     console.log('this.props.Marker');
//
//     navigator.geolocation.getCurrentPosition((position) => {
//       var lat = parseFloat(position.coords.latitude)
//       var long = parseFloat(position.coords.longitude)
//
//       var initialRegion = {
//         latitude: lat,
//         longitude: long,
//         latitudeDelta: LATITUDE_DELTA,
//         longitudeDelta: LONGITUDE_DELTA,
//       }
//
//       this.setState({ initialPosition: initialRegion })
//     },
//     (error) => alert("Bad connction"),
//     { enableHighAccuracy: true, timeout: 200000, maximumAge: 10000 });
//   }
//
//   componentDidmount() {
//     navigator.geolocation.clearWatch(this.watchId);
//   }
//
//
//   render() {
//     return (
//       <View>
//       { true && <MapView
//       initialRegion={{
//         latitude: this.state.latitude,
//         longitude: this.state.longitude,
//         latitudeDelta: 0.0922,
//         longitudeDelta: 0.0421,
//       }}
//       />
//     }
//     </View>
//
//
//     );
//   }
// }
//
// export default GeolocationExample;
