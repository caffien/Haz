import React, { Component } from 'react';
import { View } from 'react-native';
import AccountPage from './components/AccountPage.js';
import GeolocationExample from './components/GeolocationExample.js';
import ShowProduct from './components/ShowProduct.js';
import GetLocationPage from './components/GetLocationPage.js';
import Swiper2 from './components/common/Swiper';


class App extends Component {

    render() {
        return (
            <View>
                <ShowProduct/>
                {/*<Swiper2 />*/}
            </View>
        );
    }
}

// { /*<ShowProduct />*/
// }

export default App;
