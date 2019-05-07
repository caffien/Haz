import React, { Component } from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    createBottomTabNavigator,
    createAppContainer,
    createStackNavigator
} from 'react-navigation';
import AccountPage from './components/AccountPage.js';
import GeolocationExample from './components/GeolocationExample.js';
import ShowProduct from './components/ShowProduct.js';
import GetLocationPage from './components/GetLocationPage.js';
import Swiper2 from './components/common/Swiper';
import NotificationPage from './components/NotificationPage';
import MyCarousel from './components/MyCarousel';
import HomePage from './components/HomePage';
import Basic from './components/Basic';


const AppNavigator = createBottomTabNavigator({

        Home: {
            screen: HomePage,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) =>
                    <Icon name="home" size={25} color={tintColor}/>
            }
        },
        Map: {
            screen: GeolocationExample,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) =>
                    <Icon name="map-marker" size={25} color={tintColor}/>
            }
        },
        Account: {
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
        },
        headerMode: 'none'
    });

const RootStack = createStackNavigator({
    TabBar: {
        screen: AppNavigator,
    },
    NotificationPage: {
        screen: NotificationPage,
    },
    ShowProducts: {
        screen: MyCarousel,
    },
    ShowProduct: {
        screen: ShowProduct,
    },
}, {
    headerMode: 'none'

});
const Csss = createAppContainer(RootStack);

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
