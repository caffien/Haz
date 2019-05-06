import React from 'react';
import {
    View, Text
} from 'react-native';

import { Button } from './Button';


const CardSection = ({ children, whenPress, text, CustomStyle, containerStyle }) => {
    return (
        <View style={[styles.containerStyle, { containerStyle }]}>
            <Text>
                {text}
            </Text>
            <Button whenPress={whenPress} CustomStyle={CustomStyle}/>
        </View>
    );
};


const styles = {
    containerStyle: {
        // borderBottomWidth: 1,
        padding: 7,
        marginTop: 8,
        // backgroundColor: '#E0F8F8',
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        flexDirection: 'row-reverse',
        borderColor: '#ddd',
        position: 'relative'
    }
};
export { CardSection };
