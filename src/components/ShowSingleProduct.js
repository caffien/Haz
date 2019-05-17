import React, { Component } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Button, Card, Divider, Text, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { Swiper2 } from './common';
import commonStyles from '../styles/commonStyles';


export default class ShowSingleProduct extends Component {

    state = { price: 1200, timeLeft: '5d, 2h', text: '' };

    // TODO: add favorite button
    render() {
        return (
            <ScrollView style={styles.wrapper}>

                <View>

                    <Text
                        style={{
                            marginTop: 35,
                            fontSize: 25,
                            fontWeight: '900',
                            alignSelf: 'center'
                        }}
                    >
                        TITLE
                    </Text>
                </View>

                <Swiper2/>

                <Divider style={{ margin: 10 }}/>

                <Card
                    dividerStyle={{ height: 0 }}
                    titleStyle={styles.titleStyle}
                    title='The Highest Bid Price:'
                >
                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                        <Text style={styles.textStyle}>
                            {this.state.price} {' '}
                        </Text>
                        <Icon name="tags" size={12} color="#517fa4"/>
                    </View>
                </Card>

                <Card
                    dividerStyle={{ height: 0 }}
                    titleStyle={styles.titleStyle}
                    title='Time Left To End Auction:'
                >
                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                        <Text style={styles.textStyle}>
                            {this.state.timeLeft} {' '}
                        </Text>
                        <Icon name="clock-o" size={12} color="#517fa4"/>
                    </View>
                </Card>

                <Divider style={{ marginTop: 20, marginBottom: 50, height: 0 }}/>

                <Card
                    dividerStyle={{ height: 0, marginBottom: 0 }}
                    titleStyle={styles.titleStyle}
                    title='Enter Your Bid:'
                >
                    <Text
                        style={[styles.textStyle, {
                            alignSelf: 'flex-start'
                        }]}
                    >
                        The Auction Reached: {this.state.price}
                    </Text>

                    <View
                        style={{
                            alignSelf: 'stretch',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            borderWidth: 0.5,
                            borderRadius: 10,
                            overflow: 'hidden',
                            margin: 10

                        }}
                    >
                        <View style={{ flex: 1, }}>
                            <Button
                                wrapperStyle={{ alignSelf: 'flex-start' }}
                                title={' SEND'}
                                icon={
                                    <Icon
                                        name="arrow-left"
                                        size={15}
                                        color="white"
                                    />
                                }
                                titleStyle={commonStyles.titleStyle}
                            />
                        </View>
                        <Input
                            rightIcon={<Icon name="tags" size={12} color="#517fa4"/>}
                            placeholder='Enter Your Bid'
                            containerStyle={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: 35
                            }}
                            onChangeText={text => this.setState({
                                text: text.replace(/[^0-9]/g, ''),
                            })}
                            inputStyle={styles.textStyle}
                            keyboardType={'numeric'}
                            value={this.state.text}
                        />
                    </View>
                    <Text>{this.state.text}</Text>
                </Card>

                <Card
                    dividerStyle={{ height: 0, marginBottom: 0 }}
                    titleStyle={styles.titleStyle}
                    title='Product Details:'
                />

                <Divider style={{ marginBottom: 50, height: 0 }}/>

            </ScrollView>
        );
    }

}

const styles = StyleSheet.create({
    wrapper: {
        // marginBottom: 40,
    },
    textStyle: {
        color: '#29a',
        fontSize: 10,
        alignSelf: 'center'
    },
    line: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#aaa',
        borderLeftWidth: 0,
        borderTopWidth: 0,
        borderRightWidth: 0,
        // borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
    }
});
