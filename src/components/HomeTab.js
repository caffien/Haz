import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Text } from 'react-native-elements';
import SliderComponent from './common/SliderComponent';
import Styles from '../styles/commonStyles';
import { ENTRIES1 } from '../static/entries';
import ShowProducts from './Product/ShowProducts';
import SearchBarComponent from './common/SearchBarComponent';
import BurgerMenu from './Menu/BurgerMenu';


export default class HomeTab extends Component {
    render() {
        return (
            <BurgerMenu>
                <ScrollView style={Styles.rootContainer}>
                    <SearchBarComponent/>
                    <Text style={[Styles.header]}>For You</Text>
                    <SliderComponent data={ENTRIES1}/>

                    <Text style={[Styles.header]}>Last Added Products</Text>
                    <ShowProducts data={ENTRIES1}/>

                </ScrollView>
            </BurgerMenu>
        );
    }
}
