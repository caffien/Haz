import React from 'react';
import {
    View, Text
} from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


const AccountCardSection = ({
                                children, whenPress, text, buttonStyle,
                                containerStyle, IconName, color, size
                            }) => {
    return (
        <View style={[styles.containerStyle, { containerStyle }]}>
            <Button
                onPress={whenPress}
                buttonStyle={buttonStyle}
                rounded
                icon={<Icon
                    name={'chevron-left'} size={10}
                    color={'#747d8f'}
                />}
            />
            <View
                style={{
                    flexDirection: 'row',
                    alignSelf: 'center',
                    margin: 10
                }}
            >
                <Text style={{ marginRight: 10, }}>
                    {text}
                </Text>

                <Icon
                    name={IconName} size={size}
                    color={color}
                />

            </View>

        </View>
    );
};


const styles = {
    containerStyle: {
        // borderBottomWidth: 1,
        flex: 1,
        paddingLeft: 12,
        flexDirection: 'row',
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        borderColor: '#ddd',
        alignItems: 'center'
    }
};
export { AccountCardSection };
