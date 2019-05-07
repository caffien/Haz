import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Scene, Router, ActionConst, Tabs, Action } from 'react-native-router-flux';

import Mapz from './components/Mapz';
import AddProduct from './components/AddProduct';
import Basic from './components/Basic';

export default class RouterComponent extends Component {

render() {
  return (
    <Router>
    <Scene key='Auth' >
      <Scene key='Basic' component={Basic} backTitle="" title=' ' />
      <Scene key='AddProduct' component={AddProduct} backTitle="" title=' ' />

      <Scene key='Mapz' component={Mapz} title='' />
     </Scene>

     </Router>
   );
   }
 }
