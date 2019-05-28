import React, { Component } from 'react';
import { FlatList, Image, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { CachedImage } from 'react-native-cached-image';
import { Button, Card, Text } from 'react-native-elements';
import commonStyles from '../../styles/commonStyles';
import styles2 from '../../styles/SliderEntry.style';
import getNavigationParams from '../Services/NavigationDataService';


export default class ShowProducts extends Component {

    static renderItem({ item }) {
        return (

            <Card
                dividerStyle={{ height: 0 }}
                containerStyle={[styles.gridItem, commonStyles.cardStyle]}
            >
                <View style={styles.upperSideCardStyle}>
                    <CachedImage
                        source={{
                            uri: item.illustration
                        }}
                        style={[styles2.image, styles.imageStyle]}

                    />

                    <View style={styles.upperLeftSideCardStyle}>
                        <Text style={{ fontWeight: '900', fontSize: 15 }}>{item.title.toString()
                            .substring(0, 3)}</Text>
                        <Text>{item.title.toString()
                            .substring(0, 7)}</Text>
                    </View>
                </View>

                <View style={styles.bottomSideCardStyle}>
                    <Text>{item.subtitle}</Text>
                    <Button
                        title={item.price || ' 10$'}
                        icon={
                            <Icon
                                name="arrow-left"
                                size={15}
                                color="white"
                            />
                        }
                        buttonStyle={{ borderRadius: 15, padding: 5 }}
                        titleStyle={commonStyles.titleStyle}
                    />
                </View>
            </Card>

        );
    }


    keyExtractor = (item, index) => index.toString();

    render() {
        console.log(this);
        return (

            <FlatList
                columnWrapperStyle={{
                    margin: 10,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignSelf: 'center',

                }}
                contentContainerStyle={styles.cardStyle}
                initialNumToRender={3}
                keyExtractor={this.keyExtractor}
                maxToRenderPerBatch={1}
                data={this.props.data || getNavigationParams(this).data}
                renderItem={ShowProducts.renderItem}
                numColumns={2}
            />
        );
    }

}

const scale = 155;

const styles = StyleSheet.create({
    cardStyle: {
        flex: 1,
        width: '100%',
    },
    gridItem: {
        margin: 5,
        marginBottom: 10,
        width: scale,
        height: scale * 1.3,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    upperSideCardStyle: {
        flex: 1,
        flexDirection: 'row',
        margin: 5,
        justifyContent: 'space-between'
    },
    upperLeftSideCardStyle: {
        flex: 1,
        flexDirection: 'column',
        margin: 5,
        marginLeft: 10,
    },

    bottomSideCardStyle: {
        flex: 1,
        flexDirection: 'column',
        margin: 5,
        marginTop: 10,
        marginBottom: 10,
        justifyContent: 'space-between',
    },
    imageStyle: {
        alignSelf: 'stretch',
        width: scale * 0.45,
        height: '100%',
        position: 'relative'
    }

});
