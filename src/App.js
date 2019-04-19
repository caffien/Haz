import React, { Component } from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    createBottomTabNavigator,
    createAppContainer
} from 'react-navigation';
import AccountPage from './components/AccountPage.js';
import GeolocationExample from './components/GeolocationExample.js';
import ShowProduct from './components/ShowProduct.js';
import GetLocationPage from './components/GetLocationPage.js';
import Swiper2 from './components/common/Swiper';


const AppNavigator = createBottomTabNavigator({
        Home: {
            screen: AccountPage,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) =>
                    <Icon name="home" size={25} color={tintColor}/>
            }
        },
        HighScores: {
            screen: ShowProduct,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) =>
                    <Icon name="qrcode" size={25} color={tintColor}/>
            }
        },
        cc: {
            screen: AccountPage,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) =>
                    <Icon name="user-o" size={25} color={tintColor}/>
            }
        }
    },
    {
        tabBarOptions: {
            activeTintColor: 'orange',
            inactiveTintColor: 'gray'
        }
    });
const Csss = createAppContainer(AppNavigator);

class App extends Component {

    render() {
        return (
            <Csss/>
        );
    }
}

// { /*<ShowProduct />*/
// }

export default App;
