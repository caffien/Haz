import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    createAppContainer,
    createBottomTabNavigator,
    createStackNavigator
} from 'react-navigation';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import AccountTab from './components/Account/AccountTab.js';
import GeolocationExample from './components/Map/MapTab.js';
import NotificationPage from './components/Notification/NotificationPage';
import SliderComponent from './components/common/SliderComponent';
import LoginAndRegister from './components/Authentication/LoginAndRegister';
import ShowSingleProduct from './components/Product/ShowSingleProduct';
import HomeTab from './components/HomeTab';
import Login from './components/Authentication/Login';
import NavigationService from './NavigationService';
import AuctionTab from './components/Auction/AuctionTab';


const AppNavigator = createBottomTabNavigator({

        Home: {
            screen: HomeTab,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) =>
                    <Icon name="home" size={25} color={tintColor}/>
            }
        },
        Auction: {
            screen: AuctionTab,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) =>
                    <Icon name="gavel" size={25} color={tintColor}/>
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
            screen: AccountTab,
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
        screen: SliderComponent,
    },
    LoginAndRegister: {
        screen: LoginAndRegister,
    },
    ShowSingleProduct: {
        screen: ShowSingleProduct,
    },
    Login: {
        screen: Login,
    },
}, {
    headerMode: 'none'

});

const AppContainer = createAppContainer(RootStack);


class App extends Component {

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return (
            <Provider store={store}>
                <SafeAreaView
                    style={{
                        flex: 1,
                        backgroundColor: 'white',
                        shadowColor: 'transparent',
                    }}
                >
                    <AppContainer
                        ref={navigatorRef => {
                            NavigationService.setTopLevelNavigator(navigatorRef);
                        }}
                    />
                </SafeAreaView>
            </Provider>
        );
    }
}

export default App;
