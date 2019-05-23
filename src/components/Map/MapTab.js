import React, { Component } from 'react';
import { Alert, Dimensions, StyleSheet, View } from 'react-native';
import MapView, { LatLng, Marker } from 'react-native-maps';
import { ENTRIES1 } from '../../static/entries';
import SliderComponent from '../common/SliderComponent';
import BottomDrawerComponent from '../common/BottomDrawer/BottomDrawerComponent';

const { width, height } = Dimensions.get('window');

const SCREEN_HEIGHT = height;
const SCREEN_WIDTH = width;
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;


const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const SPACE = 0.01;

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
            markers: [],
            marker1: true,
            marker2: false,
        };
    }


    componentDidMount() {
        navigator.geolocation.getCurrentPosition((position) => {
                const lat = parseFloat(position.coords.latitude);
                const long = parseFloat(position.coords.longitude);
                const initialRegion = {
                    latitude: lat,
                    longitude: long,
                    latitudeDelta: LATITUDE_DELTA,
                    longitudeDelta: LONGITUDE_DELTA,
                };

                this.setState({ initialPosition: initialRegion });
                this.setState({
                    markers: [
                        // {
                        //     latitude: this.state.initialPosition.latitude,
                        //     longitude: this.state.initialPosition.longitude,
                        //     title: 'Foo Place',
                        //     subtitle: '1234 Foo Drive'
                        // },
                        {
                            latitude: this.state.initialPosition.latitude - 0.20,
                            longitude: this.state.initialPosition.longitude,
                            title: 'Foo Place',
                            subtitle: '1234 Foo Drive'
                        },
                        // {
                        //     latitude: this.state.initialPosition.latitude + 0.020,
                        //     longitude: this.state.initialPosition.longitude,
                        //     title: 'Foo Place',
                        //     subtitle: '1234 Foo Drive'
                        // }
                    ]
                });
            },
            (error) => Alert.alert('Bad connection'),
            { enableHighAccuracy: true, timeout: 200000, maximumAge: 10000 });
    }


    getMarkers = () => {
        return this.state.markers.map((value, key) => {
            return (<Marker
                key={key}
                title={value.title}
                description={value.subtitle}
                coordinate={{
                    latitude: value.latitude,
                    longitude: value.longitude,
                }}
                centerOffset={{ x: -18, y: -60 }}
                anchor={{ x: 0.69, y: 1 }}
            />);
        });
    };

    changePosition = (index) => {
        this.setState({
            initialPosition: {
                latitude: this.state.markers[0].latitude,
                longitude: this.state.markers[0].longitude,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
            }
        });
        const { latitude, longitude, latitudeDelta, longitudeDelta } = this.state.initialPosition;
        this.map.animateToRegion({
            latitude,
            longitude,
            latitudeDelta,
            longitudeDelta
        });
    };

    renderScreen = () => {
        console.log(this.state.markers);
        return (
            <View style={[styles.container, this.props.style]}>
                {this.state.initialPosition.latitude !== 0 &&
                <MapView
                    ref={map => {
                        this.map = map;
                    }}
                    style={styles.map}
                    showsUserLocation
                    userLocationAnnotationTitle='موقعي الحالي'
                    initialRegion={this.state.initialPosition}
                >
                    {this.getMarkers()}

                </MapView>
                }
                <BottomDrawerComponent containerHeight={height * 0.32}>
                    <SliderComponent
                        onSnapToItem={(index) => this.changePosition(index)}
                        autoPlay={false}
                        enablePagination={false}
                        itemHeight={height * 0.20}
                        data={ENTRIES1}
                    />
                </BottomDrawerComponent>
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
