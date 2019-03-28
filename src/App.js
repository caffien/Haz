import React, { Component } from 'react';
import { View } from 'react-native';
import Login from './components/Login.js';
import AddProduct from './components/AddProduct.js';
import Mapz from './components/Mapz.js';


class App extends Component {

render() {
   return (
     <View style={{ flex: 1, marginBottom: 10, marginTop: 200 }}>
        <Mapz />
      </View>
  );
}
}

export default App;
