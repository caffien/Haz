import React, { Component } from 'react';
import { Dimensions, Image, InteractionManager, StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Button } from 'react-native-elements';
import { ENTRIES1 } from '../../static/entries';
import SliderComponent from '../common/SliderComponent';
import BottomDrawerComponent from '../common/BottomDrawer/BottomDrawerComponent';
import CustomCallout from './CustomCallout';
import Icon from 'react-native-vector-icons/FontAwesome';
import commonStyles from '../../styles/commonStyles';

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
            data: [],
            interactionsComplete: false

        };
    }


    componentDidMount() {
        InteractionManager.runAfterInteractions(() => {
            this.setState({ interactionsComplete: true });
        });
        navigator.geolocation.getCurrentPosition((position) => {
                const lat = parseFloat(position.coords.latitude);
                const long = parseFloat(position.coords.longitude);
                const initialPosition = {
                    latitude: lat,
                    longitude: long,
                    latitudeDelta: LATITUDE_DELTA,
                    longitudeDelta: LONGITUDE_DELTA,
                };

                this.setState({
                    initialPosition,
                    data: this.props.data
                });
            },
            (error) => console.log('Bad connection', error),
            { enableHighAccuracy: true, timeout: 200000, maximumAge: 10000 });
    }


    getMarkers = () => {
        return this.state.data.map((value, key) => {
            return (<Marker
                cacheEnabled
                key={key}
                coordinate={{
                    latitude: value.latitude,
                    longitude: value.longitude,
                }}
                centerOffset={{ x: -18, y: -60 }}
                anchor={{ x: 0.69, y: 1 }}
            >
                <Image
                    source={{
                        uri: value.illustration
                    }}
                    style={styles.markerImageStyle}
                />
                <MapView.Callout
                    onPress={() => {
                        console.log('callout pressed');
                    }}
                    tooltip
                    style={styles.calloutStyle}
                >
                    <CustomCallout style={{ flexDirection: 'column' }}>
                        <Text style={styles.font}>{value.title}</Text>
                        <Text style={styles.font}>{value.title}</Text>
                        <Button
                            icon={
                                value.price && <Icon
                                    name="arrow-right"
                                    size={15}
                                    color="#255766"
                                />
                            }
                            title={value.price}
                            buttonStyle={{
                                marginTop: 10,
                                borderRadius: 15,
                                padding: 5,
                                backgroundColor: '#4fb8d7'
                            }}
                            titleStyle={[commonStyles.titleStyle, { color: '#2c6779' }]}
                        />
                    </CustomCallout>

                </MapView.Callout>
            </Marker>);
        });
    };

    changePosition = (index) => {
        const { latitude, longitude, latitudeDelta, longitudeDelta } = this.state.data[index];

        this.map.animateToRegion({
            latitude,
            longitude,
            latitudeDelta,
            longitudeDelta
        });
        this.setState({
            initialPosition: {
                latitude: this.state.data[index].latitude,
                longitude: this.state.data[index].longitude,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
            }
        });
    };

    renderScreen = () => {
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
        if (!this.state.interactionsComplete) {
            return (<Text
                style={{
                    flex: 1,
                    alignSelf: 'center',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >loading...</Text>);
        }
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
    markerImageStyle: {
        height: 25,
        width: 25,
        borderRadius: 12
    },
    calloutStyle: {
        backgroundColor: 'white',
        // width: 140,
        // height: 60,
    },
    font: { color: 'white' }

});

export default MapComponent;
