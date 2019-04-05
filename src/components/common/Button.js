import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ whenPress, children, CustomStyle, textStyle }) => {
    return (
        <TouchableOpacity onPress={whenPress} style={[styles.buttonStyle, CustomStyle]}>
            <Text style={[styles.textStyle, textStyle]}> {children} </Text>
        </TouchableOpacity>
    );
};

const styles = {
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 14,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10,

    },
    buttonStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1.5,
        borderColor: '#007aff',
        marginLeft: 20,
        marginRight: 20

    }
};

export { Button };
