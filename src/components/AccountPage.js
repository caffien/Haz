import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card, CardSection, Button } from './common';

export default class AccountPage extends Component {

    render() {
        return (
            <View>
                <View>
                    <CardSection
                        CustomStyle={{
                            height: 20,
                            flex: 0,
                            alignSelf: 'stretch',
                            backgroundColor: '#fff',
                            borderRadius: 5,
                            borderWidth: 1.5,
                            borderColor: '#007aff',
                            marginLeft: 20,
                            marginRight: 20
                        }}
                    />
                </View>

                {/*<View>*/}
                {/*</View>*/}

                {/*<View>*/}
                {/*</View>*/}

                {/*<View>*/}
                {/*</View>*/}

            </View>
        );
    }
}
