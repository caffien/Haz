import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Dimensions, Alert
} from 'react-native';
import SideMenu from 'react-native-side-menu';
import Menu from './Menu';

const window = Dimensions.get('window');

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
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
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

export default class Basic extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);

        this.state = {
            isOpen: false,
            selectedItem: 'About',
        };
    }

    onMenuItemSelected = item => {
        console.warn(item);
        this.props.navigation.navigate('NotificationPage');
        return this.setState({
            selectedItem: item,
        });
    };

    updateMenuState(isOpen) {
        this.setState({ isOpen });
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen,
        });
    }

    render() {
        const menu = <Menu onItemSelected={this.onMenuItemSelected}/>;

        return (
            <View>
                <View
                    style={{
                        width: window.width,
                        height: window.height
                    }}
                />
                <SideMenu
                    menu={menu}
                    isOpen={this.state.isOpen}
                    onChange={isOpen => this.updateMenuState(isOpen)}
                >
                    <View style={styles.container}>
                        <Text style={styles.welcome}>
                            Welcome to React Native!
                        </Text>
                        <Text style={styles.instructions}>
                            To get started, edit index.ios.js
                        </Text>
                        <Text style={styles.instructions}>
                            Press Cmd+R to reload,{'\n'}
                            Cmd+Control+Z for dev menu
                        </Text>
                        <Text style={styles.instructions}>
                            Current selected menu item is: {this.state.selectedItem}
                        </Text>
                    </View>

                </SideMenu>
            </View>

        );
    }
}
