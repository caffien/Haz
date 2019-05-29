import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import { Avatar, Button, Card, Divider, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { AccountCardSection } from '../common/AccountCardSection';
import NotificationPage from '../Notification/NotificationPage';
import commonStyles from '../../styles/commonStyles';
import { ENTRIES1 } from '../../static/entries';
import NavigationService from '../Services/NavigationService';


export default class AccountTab extends Component {

    SettingsPressed = () => {
        NavigationService.navigate('Settings');
    };

    render() {
        return (
            <ScrollView
                style={{ paddingTop: 40 }}
            >
                <View style={styles.twoButtonsHeader}>
                    <Button
                        containerViewStyle={{
                            alignSelf: 'stretch',
                            padding: 15,
                        }}
                        buttonStyle={styles.button}
                        icon={
                            <Icon
                                name='sign-out'
                                size={21}
                                color={'#ff8b8b'}
                            />
                        }
                    />
                    <Button
                        containerViewStyle={{
                            alignSelf: 'stretch',
                            padding: 15,
                        }}
                        buttonStyle={styles.button}
                        onPress={this.SettingsPressed}
                        icon={
                            <Icon
                                name='cog'
                                size={21}
                                color={'#8e96a2'}
                            />
                        }
                    />
                </View>

                <View style={styles.header}>
                    <Text style={styles.username}>Suliman </Text>
                    <Avatar
                        title={'s'}
                        size="large"
                        rounded
                        source={{
                            uri:
                                'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                        }}
                    />
                </View>

                <Card containerStyle={commonStyles.cardStyle}>

                    <AccountCardSection
                        whenPress={() => this.props.navigation.navigate('ShowProducts', {
                            data: ENTRIES1
                        })}
                        IconName={'bell-o'}
                        color={'#37c'}
                        size={15}
                        containerStyle={{ marginTop: 0, padding: 0 }}
                        text={'Your products'}
                        buttonStyle={styles.button2}

                    />
                    <Divider style={styles.divider}/>

                    <AccountCardSection
                        whenPress={() => this.props.navigation.navigate('NotificationPage')}
                        IconName={'bell-o'}
                        color={'#37c'}
                        size={15}
                        text={'Notifications'}
                        buttonStyle={styles.button2}
                    />
                    <Divider style={styles.divider}/>
                    <AccountCardSection
                        whenPress={() => this.props.navigation.navigate('Haz')}
                        IconName={'bell-o'}
                        color={'#37c'}
                        size={15}
                        text={'Haz'}
                        buttonStyle={styles.button2}
                    />
                    <Divider style={styles.divider}/>
                    <AccountCardSection
                        whenPress={() => this.props.navigation.navigate('Messages')}
                        IconName={'bell-o'}
                        color={'#37c'}
                        text={'Messages'}
                        size={15}
                        buttonStyle={styles.button2}
                    />
                    <Divider style={styles.divider}/>
                    <AccountCardSection
                        whenPress={() => this.props.navigation.navigate('Favorite')}
                        IconName={'bell-o'}
                        color={'#37c'}
                        size={15}
                        text={'Favorite'}
                        buttonStyle={styles.button2}
                    />

                </Card>

                <Card containerStyle={commonStyles.cardStyle}>
                    <AccountCardSection
                        whenPress={() => this.props.navigation.navigate('NotificationPage')}
                        text={'Help'}
                        buttonStyle={styles.button2}
                    />
                    <Divider style={styles.divider}/>
                    <AccountCardSection
                        whenPress={() => this.props.navigation.navigate('NotificationPage')}
                        text={'Suggestions'}
                        buttonStyle={styles.button2}
                    />

                </Card>

            </ScrollView>
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
        margin: 20,
        borderRadius: 15,
        padding: 5,
        paddingTop: 5,
        shadowOffset: { width: 0, height: 2, },
        shadowColor: '#bdb',
        shadowOpacity: 0.5,
        shadowRadius: 10,
    },
    divider: {
        margin: 14
    },
    username: {
        padding: 10,
        fontSize: 34,
        fontWeight: '900',
        color: '#154c58',
    }
};
