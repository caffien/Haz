import { StyleSheet } from 'react-native';

const commonStyles = StyleSheet.create({
    header: {
        marginTop: 20,
        fontWeight: '900',
        color: '#154c58',
        padding: 10,
        fontSize: 25,
        fontFamily: 'Cochin-Bold'
    },
    rootContainer: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 10,

    },
    cardStyle: {
        borderWidth: 0,
        borderRadius: 15,
        padding: 3,
        shadowOffset: { width: 0, height: 2, },
        shadowColor: '#466366',
        shadowOpacity: 0.1,
        shadowRadius: 10,
    },
    titleStyle: {
        fontSize: 14,
        alignSelf: 'flex-start',
        margin: 0
        // titleNumberOfLines: 0
    },
});

export default commonStyles;

