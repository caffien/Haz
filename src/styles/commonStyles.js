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
        margin: 20,
        borderRadius: 15,
        padding: 5,
        paddingTop: 5,
        shadowOffset: { width: 0, height: 2, },
        shadowColor: '#bdb',
        shadowOpacity: 0.5,
        shadowRadius: 10,
    },
});

export default commonStyles;

