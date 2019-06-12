import React, {Component} from 'react';
import {Text, NativeModules, ScrollView, TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux';
import SliderComponent from './common/SliderComponent';
import Styles from '../styles/commonStyles';
import {ENTRIES1} from '../static/entries';
import ShowProducts from './Product/ShowProducts';
import SearchBarComponent from './common/SearchBarComponent';
import BurgerMenu from './Menu/BurgerMenu';
import translate from './Services/TranslationService';
import Icon from 'react-native-vector-icons/FontAwesome';
import {changeBurgerMenuStatus} from '../actions';

class HomeTab extends Component {
    render() {
        return (
            <BurgerMenu>
                <ScrollView style={Styles.rootContainer}>
                    <Text
                        style={[Styles.header, {
                            fontSize: 35,
                            paddingTop: 15,
                            paddingBottom: 0,
                            marginBottom: 0,
                            alignSelf: 'center',
                            justifyContent: 'center',
                            alignItems: 'center',

                        }]}
                    >HAZ</Text>
                    <View style={{ margin: 10,marginLeft: 25,  }}>
                        <TouchableOpacity  onPress={() => this.props.changeBurgerMenuStatus()}>
                            <Icon
                                name="bars"
                                size={25}
                                color="#454f63"
                            />
                        </TouchableOpacity>
                    </View>
                    <SearchBarComponent/>
                    <Text style={[Styles.header]}>{translate('ForYou')}</Text>
                    <SliderComponent data={ENTRIES1}/>

                    <Text style={[Styles.header]}>{translate('LastAddedProducts')}</Text>
                    <ShowProducts data={ENTRIES1}/>

                </ScrollView>
            </BurgerMenu>
        );
    }
}

const mapStateToProps = () => {
    return {};
};
export default connect(mapStateToProps, {changeBurgerMenuStatus})(HomeTab);
