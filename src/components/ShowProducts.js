import React, { Component } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';
import commonStyles from '../styles/commonStyles';


export default class ShowProducts extends Component {


    keyExtractor = (item, index) => index.toString();

    renderItem({ item }) {
        return (
            <Card
                containerStyle={[styles.gridItem]}
                title={item.title}
                subtitle={item.subtitle}
            />);
    }

    render() {
        return (
            <FlatList
                contentContainerStyle={styles.cardStyle}
                initialNumToRender={3}
                keyExtractor={this.keyExtractor}
                maxToRenderPerBatch={1}
                data={this.props.data}
                renderItem={this.renderItem}
            />
        );
    }

}

const scale = '40%';

const styles = StyleSheet.create({
    cardStyle: {
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        flex: 1,
    },
    gridItem: {
        margin: 5,
        width: scale,
        height: scale,
        justifyContent: 'center',
        alignItems: 'center',
    }

});
