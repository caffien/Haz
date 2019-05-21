import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { Card, Button } from '../common';
import GeolocationExample from './MapTab.js';


export default class GetLocation extends Component {

    getBackButton() {
        return (
            <View style={styles.backButtonStyle}>
                <Text style={{ fontSize: 20 }}>
                    >
                </Text>
            </View>);
    }

    render() {
        return (
            <View>
                <View style={styles.mainView}>
                    {this.getBackButton()}
                </View>
                <Card
                    style={{
                        padding: 10,
                        borderRadius: 15,
                        borderLeftWidth: 1,
                        borderTopWidth: 1,
                        borderRightWidth: 1,
                        borderColor: '#000',
                        alignSelf: 'stretch',


                    }}
                >

                    <View>
                        <View style={styles.mapStyle}>
                            <GeolocationExample
                                style={{
                                    // borderRadius: 15,
                                    overflow: 'hidden',
                                    position: 'relative',
                                    alignSelf: 'stretch',
                                    height: heightS,
                                    width: widthS
                                }}
                            />
                        </View>
                    </View>
                    <View>
                        <Text style={styles.text}>
                            Here is the text
                        </Text>
                    </View>

                    <View>
                        <Button
                            CustomStyle={styles.buttonStyle} textStyle={{
                            fontSize: 10,
                            marginBottom: 10,
                        }}
                        >
                            next
                        </Button>
                    </View>
                </Card>
            </View>
        );
    }
}
const { height, width } = Dimensions.get('window');

const heightS = height * 0.4;
const widthS = width * 0.89;
const styles = {
    backButtonStyle: {
        paddingRight: 5,
        paddingLeft: 6,
        paddingBottom: 3,
        alignSelf: 'center'
    },
    mainView: {
        marginTop: height * 0.24,
        marginRight: 20,
        borderRadius: 50,
        backgroundColor: 'rgba(187,187,187,0.47)',
        alignSelf: 'flex-end',
        justifyContent: 'center',
        alignItems: 'center',
    },
    mapStyle: {
        borderRadius: 15,
        overflow: 'hidden',
        height: heightS,
        width: widthS,
    },
    text: {
        marginTop: 15,
        alignSelf: 'flex-end'
    },
    buttonStyle: {
        // borderRadius: 10,
        height: 20,
        width: 50,
        // padding:10,
        // alignSelf: 'flex-start',
        flex: 0
    }


};
