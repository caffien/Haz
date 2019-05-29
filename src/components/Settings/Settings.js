import React from 'react';
import { ListItem } from 'react-native-elements';
import { FlatList, ScrollView, View } from 'react-native';
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
                    key: 'Language',
                    name: 'Language',
                }, {
                    key: 'Language',
                    name: 'Language',
                }, {
                    key: 'Language',
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
            <ScrollView style={styles.rootViewStyle}>
                <FlatList
                    scrollEnabled={false}
                    keyExtractor={this.keyExtractor}
                    data={this.state.list}
                    renderItem={this.renderItem}
                />
            </ScrollView>
        );
    }
}
const styles = {
    rootViewStyle: {
        backgroundColor: 'white',
        shadowOffset: { width: 0, height: 2, },
        shadowColor: '#466366',
        shadowOpacity: 0.2,
        shadowRadius: 10,
        marginRight: 10,
        marginLeft: 10,
        alignSelf: 'stretch',
    },
};
