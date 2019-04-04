import React, { Component } from 'react';
import { View } from 'react-native';
import { Card } from './common';

export default class AddProduct extends Component {

    render() {
        return (
            <View>
                <Card>
                    {this.ShowList()}
                </Card>
                <View style={{ marginTop: 50 }}>
                    {this.Screen()}
                </View>
            </View>


        );
    }
}
