import React from 'react';
import PropTypes from 'prop-types';
import { Dimensions, ScrollView, StyleSheet, Text, View, } from 'react-native';
import { Avatar } from 'react-native-elements';

const window = Dimensions.get('window');
const uri = 'https://pickaface.net/gallery/avatar/Opi51c74d0125fd4.png';

const styles = StyleSheet.create({
    menu: {
        flex: 1,
        padding: 20,
        borderRightWidth: 1

    },
    avatarContainer: {
        margin: 20,
        marginBottom: 5,
        flexDirection: 'row',
        justifyContent: 'center',

    },
    item: {
        fontSize: 14,
        fontWeight: '400',
        padding: 5,
        color: '#a7aebf',

    },
    bottomBorder: {

        borderBottomWidth: 1,
        borderColor: '#a7aebf'

    },
    nameContiner: {

        marginBottom: 40,
        alignItems: 'center',
        borderBottomWidth: 1,
        padding: 5,
        borderColor: '#a7aebf'

    },
    name: {
        fontSize: 25
    },
    newSection: {
        fontSize: 20,
        color: '#a7aebf'
    },
    imageBorder: {
        borderWidth: 5,
        borderRadius: 50,
    }

});

export default function MenuFunction({ onItemSelected }) {
    return (
        <ScrollView style={styles.menu}>
            <View style={styles.avatarContainer}>
                <View style={styles.imageBorder}>
                <Avatar

                    title={'X'}
                    size="large"
                    rounded
                    source={{
                        uri:
                            'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                    }}
                />
                </View>

            </View>
            <View style={styles.nameContiner}>
                <Text style={styles.name}>user name</Text>

            </View>
            <View style={{ marginBottom: 10 }}>
                <Text style={styles.newSection}>
                    Sections
                </Text>
            </View>
            <View>

                <View style={styles.bottomBorder}>
                    <Text
                         onPress={() => onItemSelected('HomeTab')}
                         style={styles.item}
                    >
                         Home
                    </Text>
                </View>

                <View style={styles.bottomBorder}>
                    <Text
                        onPress={() => onItemSelected('LoginAndRegister')}
                        style={styles.item}
                    >
                        Login
                    </Text>
                </View>

                <View style={styles.bottomBorder}>

                    <Text
                        onPress={() => onItemSelected('NotificationPage')
                        }
                        style={styles.item}
                    >
                        Notification
                    </Text>
                </View>

            </View>
        </ScrollView>
    );
}

MenuFunction.propTypes = {
    onItemSelected: PropTypes.func.isRequired,
};
