import React, { Component } from 'react';
import { View } from 'react-native';
import AccountPage from './components/AccountPage.js';
import GeolocationExample from './components/GeolocationExample.js';
import Basic from './components/Basic.js';
import RouterComponent from './Router';

class App extends Component {

    render() {
        return (
          <View style={{ flex: 1, marginBottom: 10 }}>

                <RouterComponent />
            </View>
        );
    }
}

export default App;
