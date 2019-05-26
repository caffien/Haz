import React from 'react';
import PropTypes from 'prop-types';
import { CachedImage } from 'react-native-cached-image';
import { Dimensions, ScrollView, StyleSheet, Text, View, } from 'react-native';

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
});

export default function MenuFunction({ onItemSelected }) {
    return (
        <ScrollView scrollsToTop={false} style={styles.menu}>
            <View style={styles.avatarContainer}>
                <CachedImage
                    style={styles.avatar}
                    source={{ uri }}
                />
                <Text style={styles.name}>Your name</Text>
            </View>

            <Text
                onPress={() => onItemSelected('HomeTab')}
                style={styles.item}
            >
                Home
            </Text>

            <Text
                onPress={() => onItemSelected('Login')}
                style={styles.item}
            >
                Login
            </Text>
            <Text
                onPress={() => onItemSelected('NotificationPage')
                }
                style={styles.item}
            >
                Notification
            </Text>
        </ScrollView>
    );
}

MenuFunction.propTypes = {
    onItemSelected: PropTypes.func.isRequired,
};
