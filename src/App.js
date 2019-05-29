import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    createAppContainer,
    createBottomTabNavigator,
    createStackNavigator
} from 'react-navigation';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import AccountTab from './components/Account/AccountTab.js';
import MapTab from './components/Map/MapTab.js';
import NotificationPage from './components/Notification/NotificationPage';
import LoginAndRegister from './components/Authentication/LoginAndRegister';
import ShowSingleProduct from './components/Product/ShowSingleProduct';
import HomeTab from './components/HomeTab';
import Login from './components/Authentication/Login';
import NavigationService from './components/Services/NavigationService';
import AuctionTab from './components/Auction/AuctionTab';
import { ENTRIES1 } from './static/entries';
import ShowProducts from './components/Product/ShowProducts';
import Settings from './components/Settings/Settings';
import LanguageFlatList from './components/Language/LanguageFlatList';
import ChatPage from './components/Chat/ChatPage';
import HazGuaranteePage from './components/Guarantee/HazGuaranteePage';
import FavoritePage from './components/Favorite/FavoritePage';


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
            screen: props => <MapTab {...props} data={ENTRIES1}/>,
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

const navigationOptions = ({ navigation }) => ({
    header: null,
});

const RootStack = createStackNavigator({
    TabBar: {
        screen: AppNavigator,
        navigationOptions
    },
    NotificationPage: {
        screen: NotificationPage,
        navigationOptions: ({ navigation }) => ({
            title: `${navigation.state.routeName}`,
            headerStyle: {
                backgroundColor: '#fafafa',
            },
            headerTintColor: '#5b6266',
            headerTitleStyle: {
                fontWeight: '500',
                alignSelf: 'center',
            },
            headerBackTitleVisible: false,

        })
    },
    ShowProducts: {
        screen: ShowProducts,
        navigationOptions
    },
    LoginAndRegister: {
        screen: LoginAndRegister,
        navigationOptions
    },
    ShowSingleProduct: {
        screen: ShowSingleProduct,
        navigationOptions
    },
    Login: {
        screen: Login,
        navigationOptions,
    },
    Haz: {
        screen: HazGuaranteePage,
        navigationOptions: ({ navigation }) => ({
            title: `${navigation.state.routeName}`,
            headerStyle: {
                backgroundColor: '#fafafa',
            },
            headerTintColor: '#5b6266',
            headerTitleStyle: {
                fontWeight: '500',
                alignSelf: 'center',
            },
            headerBackTitleVisible: false,

        })
    },
    Messages: {
        screen: ChatPage,
        navigationOptions: ({ navigation }) => ({
            title: `${navigation.state.routeName}`,
            headerStyle: {
                backgroundColor: '#fafafa',
            },
            headerTintColor: '#5b6266',
            headerTitleStyle: {
                fontWeight: '500',
                alignSelf: 'center',
            },
            headerBackTitleVisible: false,

        })
    },
    Favorite: {
        screen: FavoritePage,
        navigationOptions: ({ navigation }) => ({
            title: `${navigation.state.routeName}`,
            headerStyle: {
                backgroundColor: '#fafafa',
            },
            headerTintColor: '#5b6266',
            headerTitleStyle: {
                fontWeight: '500',
                alignSelf: 'center',
            },
            headerBackTitleVisible: false,

        })

    },
    Settings: {
        screen: Settings,
        navigationOptions: ({ navigation }) => ({
            title: `${navigation.state.routeName}`,
            headerStyle: {
                backgroundColor: '#fafafa',
            },
            headerTintColor: '#5b6266',
            headerTitleStyle: {
                fontWeight: '500',
                alignSelf: 'center',
            },
            headerBackTitleVisible: false,

        })
    },
    Language: {
        screen: LanguageFlatList,
        navigationOptions: ({ navigation }) => ({
            title: `${navigation.state.routeName}`,
            headerStyle: {
                backgroundColor: '#fafafa',
            },
            headerTintColor: '#5b6266',
            headerTitleStyle: {
                fontWeight: '500',
                alignSelf: 'center',
            },
            headerBackTitleVisible: false,

        })
    }
}, {
    headerMode: 'float',

});

const AppContainer = createAppContainer(RootStack);


class App extends Component {

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return (
            <Provider store={store}>
                <AppContainer
                    ref={navigatorRef => {
                        NavigationService.setTopLevelNavigator(navigatorRef);
                    }}
                />
            </Provider>
        );
    }
}

export default App;
