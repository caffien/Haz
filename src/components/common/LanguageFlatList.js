import React from 'react';
import { ListItem, SearchBar } from 'react-native-elements';
import { FlatList, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Overlay from 'react-native-modal-overlay';


export default class Settings extends React.Component {

    constructor(props, ctx) {
        super(props, ctx);

        this.state = {
            search: '',
            visible: false,
            picked: null,
            list: [
                {
                    key: 'en',
                    name: 'English',
                    selected: false,
                },
                {
                    key: 'ar',
                    name: 'Arabic',
                    selected: false,
                }
            ]
        };
    }


    handlePressedItem = (index, item) => {
        const temp = item;
        temp.selected = !temp.selected;
        this.state.list[index] = temp;
        this.setState(({ list }) => ({
            list: [
                ...list.slice(0, index),
                {
                    ...list[index],
                    selected: temp.selected,
                },
                ...list.slice(index + 1)
            ]
        }));
    };


    keyExtractor = (item, index) => index.toString();

    renderItem = ({ item, index }) => (
        <ListItem
            title={item.name}
            bottomDivider
            subtitle={item.subtitle}
            onPress={() => this.handlePressedItem(index, item)}
            rightIcon={item.selected && <Icon
                name="check"
                size={20}
                color="#454f63"
            />}
        />

    );


    render() {
        const { search, visible, picked } = this.state;

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
