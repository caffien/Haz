import React, { Component } from 'react';
import { Text, InteractionManager, Animated, ScrollView, StyleSheet, View } from 'react-native';
import { ListItem, } from 'react-native-elements';
import { notificationList } from '../Notification/notificationList';


export default class FavoritePage extends Component {

    constructor(props) {
        super(props);

        this.offset = 0;

        this.state = {
            scrollOffset: new Animated.Value(0),
            titleWidth: 0,
            interactionsComplete: false
        };
    }

    componentDidMount() {
        InteractionManager.runAfterInteractions(() => {
            this.setState({ interactionsComplete: true });
        });
    }


    getView = () => {
        return notificationList.map((l, i) => (
            <ListItem
                // borderRadius={20}
                bottomDivider
                containerStyle={styles.containerStyle}
                key={i}
                leftAvatar={{ source: { uri: l.avatar_url } }}
                title={l.name}
                subtitle={l.subtitle}
            />
        ));
    };

    render() {
        if (!this.state.interactionsComplete) {
            return (<Text
                style={{
                    flex: 1,
                    alignSelf: 'center',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >loading...</Text>);
        }
        return (
            <View style={styles2.container}>


                <ScrollView
                    style={{ flex: 1, width: '100%' }}
                    contentContainerStyle={{ width: '100%' }}
                >
                    {this.getView()}
                </ScrollView>
            </View>
        );
    }
}

const styles = {
    header: {
        // paddingTop: 15,
        fontWeight: '900',
        color: '#154c58',
    },
    containerStyle: {
        paddingLeft: 25,

    },
    backButtonStyle: {
        position: 'absolute',
        top: 40,
        right: '85%',
        flexDirection: 'row-reverse',
        alignSelf: 'flex-start',
        backgroundColor: 'white',
        marginRight: 10,
    },
    button: {
        padding: 10,
        backgroundColor: 'white',
    }
};


const styles2 = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingBottom: 8,
    },
    listItem: {
        height: '20%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
