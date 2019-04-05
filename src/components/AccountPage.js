import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card, CardSection, Button } from './common';
import { Icon } from 'react-native-elements';


export default class AccountPage extends Component {

    render() {
        return (
            <View>
                <View style={styles.twoButtonsHeader}>
                    <Button CustomStyle={styles.button}/>
                    <Button CustomStyle={styles.button}/>
                    {/*<Button></Button>*/}
                </View>

                <View style={styles.header}>
                    <Icon name='rowing' size={50}/>
                    <Text>
                        Username
                    </Text>
                </View>

                <View>
                    <CardSection
                        text={'Good stuff'}
                        CustomStyle={styles.button}
                    />
                    <CardSection
                        text={'Good stuff'}
                        CustomStyle={styles.button}
                    />
                    <CardSection
                        text={'Good stuff'}
                        CustomStyle={styles.button}
                    />
                    <CardSection
                        text={'Good stuff'}
                        CustomStyle={styles.button}
                    />
                    <CardSection
                        text={'Good stuff'}
                        CustomStyle={styles.button}
                    />

                </View>

                <View style={{ marginTop: 40 }}>
                    <CardSection
                        text={'Good stuff'}
                        CustomStyle={styles.button}
                    />
                    <CardSection
                        text={'Good stuff'}
                        CustomStyle={styles.button}
                    />

                </View>

            </View>
        );
    }

}
const styles = {
    button: {
        height: 20,
        flex: 0,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1.5,
        borderColor: '#007aff',
        marginLeft: 20,
        marginRight: 20,
        justifyContent: 'center'
    },
    twoButtonsHeader: {
        height: 50,
        borderWidth: 1.5,
        flexDirection: 'row-reverse',
        alignSelf: 'flex-start',
        backgroundColor: '#fff',
        marginTop: 40,
    },
    header: {
        height: 80,
        borderWidth: 1.5,
        flexDirection: 'row-reverse',
        // alignSelf: 'stretch',
        // alignSelf: 'flex-end',
        backgroundColor: '#fff',
        marginTop: 40,

    }
};
