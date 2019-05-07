import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { Text } from 'react-native-elements';
import MyCarousel from './MyCarousel';
import Styles from '../styles/commonStyles';


export default class HomePage extends Component {
    render() {
        return (
            <View style={Styles.rootContainer}>
                <Text style={Styles.header}>For You</Text>
                <MyCarousel/>
            </View>
        );
    }
}
