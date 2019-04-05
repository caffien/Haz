import React, { Component } from 'react';
import { View } from 'react-native';
import AccountPage from './components/AccountPage.js';
import GeolocationExample from './components/GeolocationExample.js';
import GetLocationPage from './components/GetLocationPage.js';


class App extends Component {

    render() {
        return (
            <View>
                {/*<GeolocationExample/>*/}
                {/*<AccountPage />*/}
                <GetLocationPage />
            </View>
        );
    }
}

export default App;
