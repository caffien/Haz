import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    createAppContainer,
    createBottomTabNavigator,
    createStackNavigator
} from 'react-navigation';
import AccountPage from './components/AccountPage.js';
import GeolocationExample from './components/GeolocationExample.js';
import NotificationPage from './components/NotificationPage';
import MyCarousel from './components/MyCarousel';
import LoginAndRegister from './components/LoginAndRegister';
import ShowSingleProduct from './components/ShowSingleProduct';
import HomePage from './components/HomePage';


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
    LoginAndRegister: {
        screen: LoginAndRegister,
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
const AppContainer = createAppContainer(RootStack);

class App extends Component {

    render() {
        return (
            <AppContainer/>
        );
    }
}

// { /*<ShowSingleProduct />*/
// }

export default App;
