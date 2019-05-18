import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Text } from 'react-native-elements';
import MyCarousel from './MyCarousel';
import Styles from '../styles/commonStyles';
import { ENTRIES1 } from '../static/entries';
import ShowProducts from './ShowProducts';
import SearchBarComponent from './common/SearchBarComponent';


export default class HomePage extends Component {
    render() {
        return (

            <ScrollView style={Styles.rootContainer}>
                <SearchBarComponent/>
                <Text style={[Styles.header]}>For You</Text>
                <MyCarousel data={ENTRIES1}/>

                <Text style={[Styles.header]}>Last Added Products</Text>
                <ShowProducts data={ENTRIES1}/>

            </ScrollView>
        );
    }
}
