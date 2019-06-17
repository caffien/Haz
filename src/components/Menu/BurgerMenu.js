import React, { Component } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { withNavigation } from 'react-navigation';
import SideMenu from 'react-native-side-menu';
import { connect } from 'react-redux';
import MenuFunction from './MenuFunction';
import {
    changeBurgerMenuStatus,
    navBurgerMenuItem,
    setBurgerMenuItem,
    setBurgerMenuStatus
} from '../../actions';


const window = Dimensions.get('window');


class BurgerMenu extends Component {
    constructor(props) {
        super(props);
        this.onMenuItemSelected = this.onMenuItemSelected.bind(this);
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.isOpen !== this.props.isOpen;
    }

    onMenuItemSelected = (item) => {
        this.props.setBurgerMenuItem(item);
        this.props.navBurgerMenuItem(item);
    };


    render() {
        const menu = <MenuFunction onItemSelected={this.onMenuItemSelected}/>;

        return (
            <View style={{ flex: 1 }}>
                <View
                    style={{
                        width: window.width,
                        height: window.height
                    }}
                />
                <SideMenu
                    menu={menu}
                    isOpen={this.props.isOpen}
                    onChange={isOpen => this.props.setBurgerMenuStatus(isOpen)}
                >
                    <View style={styles.container}>
                        {this.props.children}
                    </View>

                </SideMenu>
            </View>

        );
    }
}

const mapStateToProps = (state) => {
    const { isOpen } = state.burgerMenu;
    console.log(state.burgerMenu.selectedItem);
    // const language = state.language.Language;

    return { isOpen };
};

const styles = StyleSheet.create({
    button: {
        position: 'absolute',
        top: 20,
        padding: 10,
    },
    caption: {
        fontSize: 20,
        fontWeight: 'bold',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        overflow: 'hidden'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

export default connect(
    mapStateToProps,
    {
        changeBurgerMenuStatus, setBurgerMenuStatus, setBurgerMenuItem, navBurgerMenuItem
    }
)(withNavigation(BurgerMenu));
