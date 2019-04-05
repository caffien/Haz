import React from 'react';
import { Icon } from 'react-native-elements';
import {
    View, Text
} from 'react-native';

import { Button } from './Button';


const CardSection = ({ children, whenPress, text, CustomStyle }) => {
    return (
        <View style={[styles.containerStyle]}>
            <Icon name='rowing'/>
            <Text>
                {text}
            </Text>
            <Button whenPress={whenPress} CustomStyle={CustomStyle}/>
        </View>
    );
};


const styles = {
    containerStyle: {
        borderBottomWidth: 1,
        padding: 7,
        marginTop: 8,
        // backgroundColor: '#E0F8F8',
        backgroundColor: '#e6f3ff',
        justifyContent: 'space-between',
        flexDirection: 'row-reverse',
        borderColor: '#ddd',
        postion: 'relative'
    }
};
export { CardSection };
