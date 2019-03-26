import React, { Component } from 'react';
import { View } from 'react-native';
import Login from './components/Login.js';
import AddProduct from './components/AddProduct.js';

class App extends Component {

render() {
   return (
     <View style={{ flex: 1, marginBottom: 10, marginTop: 200 }}>
        <AddProduct />
      </View>
  );
}
}

export default App;
