import React from 'react';
import PropTypes from 'prop-types';

import { StyleSheet, View } from 'react-native';

const propTypes = {
    children: PropTypes.node.isRequired,
    style: PropTypes.object,
};

class CustomCallout extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.bubble, this.props.style]}>
                    <View style={styles.amount}>{this.props.children}</View>
                </View>
            </View>
        );
    }
}

CustomCallout.propTypes = propTypes;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignSelf: 'flex-start',
        backgroundColor: '#ffffff00'
    },
    bubble: {
        width: 140,
        flexDirection: 'row',
        alignSelf: 'flex-start',
        backgroundColor: '#4291ab',
        paddingHorizontal: 10,
        paddingVertical: 12,
        borderRadius: 6,
        borderColor: '#007a87',
        borderWidth: 0.5,
    },
    amount: {
        flex: 1,
    },
    arrow: {
        backgroundColor: 'transparent',
        borderWidth: 16,
        borderColor: 'transparent',
        borderTopColor: '#4da2ab',
        alignSelf: 'center',
        marginTop: -32,
    },
    arrowBorder: {
        backgroundColor: 'transparent',
        borderWidth: 16,
        borderColor: 'transparent',
        borderTopColor: '#007a87',
        alignSelf: 'center',
        marginTop: -0.5,
    },
    triangle: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: 50,
        borderRightWidth: 50,
        borderBottomWidth: 100,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: 'red'
    }
});

export default CustomCallout;
