import React from 'react';
import { ListItem } from 'react-native-elements';
import { FlatList, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import NavigationService from '../Services/NavigationService';


export default class Settings extends React.Component {

    constructor(props, ctx) {
        super(props, ctx);

        this.state = {
            search: '',
            visible: false,
            picked: null,
            list: [
                {
                    key: 'LanguageFlatList',
                    name: 'Language',
                }, {
                    key: 'LanguageFlatList',
                    name: 'Language',
                }, {
                    key: 'LanguageFlatList',
                    name: 'Language',
                },
            ]
        };
    }


    handlePressedItem = (index, item) => {
        NavigationService.navigate(item.key);
    };


    keyExtractor = (item, index) => index.toString();

    renderItem = ({ item, index }) => (
        <ListItem
            title={item.name}
            subtitle={item.subtitle}
            onPress={() => this.handlePressedItem(index, item)}
            rightIcon={<Icon
                name="keyboard-arrow-right"
                size={24}
                color="#454f6380"
            />}
        />

    );


    render() {
        return (
            <View style={styles.rootViewStyle}>
                <FlatList
                    scrollEnabled={false}
                    keyExtractor={this.keyExtractor}
                    data={this.state.list}
                    renderItem={this.renderItem}
                />
            </View>
        );
    }
}
const commonBorderRadius = 25;
const styles = {
    containerStyle: {
        flex: 1,
        borderRadius: commonBorderRadius,
        padding: 0,
        overflow: 'hidden',
        borderBottomWidth: 0,
        borderTopWidth: 0,
        backgroundColor: 'white',

    },
    inputContainerStyle: {
        flex: 1,
        backgroundColor: 'white',
        borderRadius: commonBorderRadius,
    },
    rootViewStyle: {
        borderRadius: commonBorderRadius,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        shadowOffset: { width: 0, height: 2, },
        shadowColor: '#466366',
        shadowOpacity: 0.2,
        shadowRadius: 10,
        marginRight: 10,
        marginLeft: 10,
        padding: 0,
        alignSelf: 'stretch',
        overflow: 'hidden'
    },
    filter: {
        marginRight: 10,
        padding: 10,
        alignSelf: 'center',
        justifyContent: 'center'
    },
    overlayStyle: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.85)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalOverlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0,0,0,0.0)'
    },
    childrenWrapperStyle: {
        alignItems: 'stretch',
        backgroundColor: 'white',
        padding: 0,
        justifyContent: 'center',
        margin: 10,
        borderRadius: 10,
        overflow: 'hidden'
    },
    wrapperStyle: {
        flex: 1,
        justifyContent: 'center',
        padding: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.69)',
    }
};
