import React, { Component } from 'react';
import { View } from 'react-native';
import AccountPage from './components/AccountPage.js';


class App extends Component {

render() {
   return (
     <View style={{ flex: 1, marginBottom: 10, marginTop: 200 }}>
        {/*<GeolocationExample />*/}
         <AccountPage />
      </View>
  );
}
}

export default App;
