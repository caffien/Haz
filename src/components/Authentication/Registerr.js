import React, { Component } from 'react';
import { Dimensions, View } from 'react-native';
// import { View as x }  from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button, Card, Input } from 'react-native-elements';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

class Registerr extends Component {

    render() {
        return (
            <View style={{
                marginTop: 50,
                backgroundColor: '#2a2e43',
                height: screenHeight,
                width: screenWidth
            }}>
                <Card containerStyle={styles.containerStyle}>
                    <View style={{ marginTop: 10, marginBottom: 10 }}>
                        <Input
                            inputStyle={styles.font}
                            textAlign={'right'}
                            inputContainerStyle={{ borderBottomWidth: 0 }}
                            placeholderTextColor={'#959dad'}
                            placeholderTextSize={{ fontSize: 10 }}
                            placeholder='الاسم الكامل'
                            rightIcon={
                                <Icon
                                    name='user'
                                    size={20}
                                    color='white'
                                />
                            }
                        />
                    </View>

                </Card>
                <Card containerStyle={styles.containerStyle}>
                    <View style={{ marginTop: 10, marginBottom: 10 }}>
                        <Input
                            inputStyle={styles.font}
                            textAlign={'right'}
                            inputContainerStyle={{ borderBottomWidth: 0 }}
                            placeholderTextColor={'#959dad'}
                            placeholderTextSize={{ fontSize: 10 }}
                            placeholder='البريد الالكتروني '
                            rightIcon={
                                <Icon
                                    name='at'
                                    size={20}
                                    color='white'
                                />
                            }
                        />
                    </View>

                </Card>
                <Card containerStyle={styles.containerStyle}>
                    <View style={{ marginTop: 10, marginBottom: 10 }}>
                        <Input
                            inputStyle={styles.font}
                            textAlign={'right'}
                            inputContainerStyle={{ borderBottomWidth: 0 }}
                            placeholderTextColor={'#959dad'}
                            placeholderTextSize={{ fontSize: 10 }}
                            placeholder='كلمةالمرور '
                            secureTextEntry
                            rightIcon={
                                <Icon
                                    name='lock'
                                    size={20}
                                    color='white'
                                />
                            }
                        />
                    </View>

                </Card>
                <Card containerStyle={styles.containerStyle}>
                    <View style={{ marginTop: 10, marginBottom: 10 }}>
                        <Input
                            inputStyle={styles.font}
                            textAlign={'right'}
                            inputContainerStyle={{ borderBottomWidth: 0 }}
                            placeholderTextColor={'#959dad'}
                            placeholderTextSize={{ fontSize: 10 }}
                            placeholder='اعادة كلمة المرور '
                            secureTextEntry
                            rightIcon={
                                <Icon
                                    name='lock'
                                    size={20}
                                    color='white'
                                />
                            }
                        />
                    </View>

                </Card>
                <Card containerStyle={styles.containerStyle}>
                    <View style={{ marginTop: 10, marginBottom: 10 }}>
                        <Input
                            inputStyle={styles.font}
                            textAlign={'right'}
                            inputContainerStyle={{ borderBottomWidth: 0 }}
                            placeholderTextColor={'#959dad'}
                            placeholderTextSize={{ fontSize: 10 }}
                            placeholder='رقم الجوال '
                            rightIcon={
                                <Icon
                                    name='phone'
                                    size={20}
                                    color='white'
                                />
                            }
                        />
                    </View>

                </Card>
                <View style={{ marginTop: 10, marginBottom: 10 }}>
                    <Button
                        titleStyle={{ fontSize: 20 }}
                        buttonStyle={styles.buttonStyle}
                        title="تابع !"
                    />
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
        height: (screenHeight * 0.06),
        width: (screenWidth * 0.9),
        margin: 20,
        borderRadius: 15,
        borderWidth: 1,
        backgroundColor: '#44ccdf',

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
        color: 'white'

    }
};

export default Registerr;
