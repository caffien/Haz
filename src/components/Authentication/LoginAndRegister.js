import React, { Component } from 'react';
import { Dimensions, View } from 'react-native';
import { Button } from 'react-native-elements';
import Login from './Login';
import Registerr from './Registerr';


const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

class LoginAndRegister extends Component {
state = {
    login: true
}
    onButtonPressLogin() {
        this.setState({
            login: true
        });
    }
    onButtonPressRegister() {
        this.setState({
            login: false
        });
    }
    screen() {
    if (this.state.login === true) {
        console.warn(this.state.login)
        return <Login/>;
    }
        console.warn(this.state.login)
        return <Registerr/>;
    }

    buttonsWhenLogin() {
    return (
        <View style={{ marginTop: 10, marginBottom: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
            <Button
                titleStyle={{ fontSize: 15, color: 'white' }}
                buttonStyle={styles.buttonStyleUnActive}
                type="Clear"
                title="تسجيل"
                onPress={() => this.onButtonPressRegister()}


            />
            <Button
                titleStyle={{ fontSize: 15 }}
                buttonStyle={styles.buttonStyle}
                title="تسجيل الدخول"
                onPress={() => this.onButtonPressLogin()}
            />
        </View>
    );
    }

    buttonsWhenRegister(){
    return (
        <View style={{ marginTop: 10, marginBottom: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
            <Button
                titleStyle={{ fontSize: 15 }}
                buttonStyle={styles.buttonStyle}
                title="تسجيل"
                onPress={() => this.onButtonPressRegister()}

            />
            <Button
                titleStyle={{ fontSize: 15, color: 'white' }}
                buttonStyle={styles.buttonStyleUnActive}
                type="Clear"
                title="تسجيل الدخول"
                onPress={() => this.onButtonPressLogin()}
            />
        </View>
    );
    }
    buttonChecker() {
    if (this.state.login) {
        return this.buttonsWhenLogin();
    }
    return this.buttonsWhenRegister();
    }

    render() {
        return (
            <View style={{
                marginTop: 50,
                backgroundColor: '#2a2e43',
                height: screenHeight,
                width: screenWidth
            }}>
                <View >
                    {this.buttonChecker()}
                </View>

                <View>
                    {this.screen()}

                </View>
            </View>
        );
    }
}

const styles = {
    button: {
        backgroundColor: '#fff',
    },
    button2: {
        margin: 5,
        padding: 5,
        borderRadius: 50,
        backgroundColor: '#e2e4e8',
        borderColor: '#665760'
    },
    twoButtonsHeader: {
        height: 50,
        flexDirection: 'row-reverse',
        alignSelf: 'flex-start',
        backgroundColor: '#fff',
        marginTop: 40,
        marginRight: 15,
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        alignSelf: 'stretch',
        margin: 10,
        padding: 15,
        height: 80,
        backgroundColor: '#fff',
        marginTop: 40,
    },
    containerStyle: {
        height: (screenHeight * 0.06),
        width: (screenWidth * 0.9),
        margin: 20,
        borderRadius: 15,
        borderWidth: 0,
        backgroundColor: '#454f63'
    },
    buttonStyle: {
        height: (screenHeight * 0.04),
        width: (screenWidth * 0.3),
        margin: 20,
        borderRadius: 15,
        borderWidth: 1,
        backgroundColor: '#44ccdf',
        padding: 4,



    },
    buttonStyleUnActive: {
        height: (screenHeight * 0.04),
        width: (screenWidth * 0.3),
        margin: 20,
        borderRadius: 15,
        padding: 4

    },
    divider: {
        margin: 14
    },
    username: {
        padding: 10,
        fontSize: 34,
        fontWeight: '900',
        color: '#154c58',
    },
    font: {
        fontSize: 15,

    }
};

export default LoginAndRegister;
