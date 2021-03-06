import React from 'react';
import { ListItem } from 'react-native-elements';
import { FlatList, View, AsyncStorage } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { changeSystemLanguage, getCurrentLanguage } from '../Services/TranslationService';


export default class LanguageFlatList extends React.Component {

    constructor(props, ctx) {
        super(props, ctx);

        this.state = {
            currentLanguage: getCurrentLanguage(),
            list: [
                {
                    key: 'en',
                    name: 'English',
                    selected: false,
                }, {
                    key: 'ar',
                    name: 'Arabic',
                    selected: false,

                }
            ]
        };
    }

    componentDidMount() {
        AsyncStorage.getAllKeys()
            .then(key => console.log(key));
    }

    changeListState(item, index) {
        const temp = item;
        if (!temp.selected) {
            temp.selected = !temp.selected;
        }
        this.state.list[index] = temp;
        this.setState(({ list }) => ({
            list: [
                ...list.slice(0, index),
                {
                    ...list[index],
                    selected: false,
                },
                ...list.slice(index + 1)
            ]
        }));
        this.setState({
            currentLanguage: item.key
        });
    }


    handlePressedItem = (index, item) => {
        this.changeListState(item, index);
        changeSystemLanguage(item.key);
    };

    keyExtractor = (item, index) => index.toString();


    checkPassing(item) {
        return this.state.currentLanguage === item.key;
    }

    renderItem = ({ item, index }) => (
        <ListItem
            title={item.name}
            titleStyle={this.checkPassing(item) ? { color: '#0E8CE4' } : {}}
            containerStyle={{ padding: 5 }}
            contentContainerStyle={{ padding: 10 }}
            subtitle={item.subtitle}
            onPress={() => this.handlePressedItem(index, item)}
            rightIcon={this.checkPassing(item) ? <Icon
                name="check-circle"
                size={24}
                color="#0E8CE4"
            /> : null}
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
        // borderRadius: commonBorderRadius,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        shadowOffset: { width: 0, height: 2, },
        shadowColor: '#466366',
        shadowOpacity: 0.2,
        shadowRadius: 10,
        marginRight: 10,
        marginLeft: 10,
        padding: 5,
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
