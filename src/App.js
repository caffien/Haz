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
import Login from './components/Login';
import Registerr from './components/Registerr';
import LoginAndRegister from './components/LoginAndRegister';



const AppNavigator = createBottomTabNavigator({

        Home: {
            screen: LoginAndRegister,
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
    ShowSingleProduct: {
        screen: ShowSingleProduct,
    },
    // Login: {
    //     screen: Login,
    // },
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

// { /*<ShowSingleProduct />*/
// }

export default App;
