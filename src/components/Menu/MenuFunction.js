import React from 'react';
import PropTypes from 'prop-types';
import { Dimensions, ScrollView, StyleSheet, Text, View, } from 'react-native';
import { Avatar } from 'react-native-elements';

const window = Dimensions.get('window');
const uri = 'https://pickaface.net/gallery/avatar/Opi51c74d0125fd4.png';

const styles = StyleSheet.create({
    menu: {
        flex: 1,
        // width: window.width,
        // height: window.height,
        backgroundColor: 'white',
        borderRightWidth: 0.2,
        borderColor: '#bbb',
        padding: 20,
    },
    avatarContainer: {
        marginBottom: 20,
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    avatar: {
        width: 48,
        height: 48,
        borderRadius: 24,
    },
    name: {
        fontSize: 22,
        fontWeight: '900',
        color: '#154c58',

    },
    item: {
        fontSize: 18,
        fontWeight: '600',
        paddingTop: 5,
        color: '#94ccc1',
    },
    bottomBorder: {
        // width: window.width,
        borderBottomWidth: 1,
        borderColor: '#a7aebf',
        padding: 5,

    },
    nameContainer: {
        // width: window.width,
        marginBottom: 40,
        alignItems: 'center',
        borderBottomWidth: 1,
        padding: 5,
        borderColor: '#a7aebf'

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
            <View style={styles.nameContainer}>
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
                        onPress={() => onItemSelected('HomePage')}
                        style={styles.item}
                    >
                        Home
                    </Text>
                </View>

                <View style={styles.bottomBorder}>
                    <Text
                        onPress={() => onItemSelected('Login')}
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
