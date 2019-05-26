import React, { Component } from 'react';
import { Animated, Dimensions, StyleSheet, View } from 'react-native';
import { Button, ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { notificationList } from './notificationList';

export default class AccountPage extends Component {

    constructor(props) {
        super(props);

        this.offset = 0;

        this.state = {
            scrollOffset: new Animated.Value(0),
            titleWidth: 0,
        };
    }

    componentDidMount() {
        this.state.scrollOffset.addListener(({ value }) => (this.offset = value));
    }

    onScroll = e => {
        const scrollSensitivity = 4 / 3;
        const offset = e.nativeEvent.contentOffset.y / scrollSensitivity;
        this.state.scrollOffset.setValue(offset);
    };


    render() {
        const { scrollOffset } = this.state;
        const screenWidth = Dimensions.get('window').width;
        return (
            <View style={styles2.container}>

                <Animated.View
                    style={[
                        styles2.header,
                        {
                            // paddingTop: 50,
                            paddingHorizontal: screenWidth * 0.05,
                            width: screenWidth,
                            height: scrollOffset.interpolate({
                                inputRange: [0, 200],
                                outputRange: [120, 80],
                                extrapolate: 'clamp',
                            }),
                        },
                    ]}
                >

                    <Animated.Text
                        onLayout={e => {
                            if (this.offset === 0 && this.state.titleWidth === 0) {
                                const titleWidth = e.nativeEvent.layout.width;
                                this.setState({ titleWidth });
                            }
                        }}
                        style={[styles.header, {
                            // paddingTop: 50,
                            fontSize: scrollOffset.interpolate({
                                useNativeDriver: true,
                                inputRange: [0, 200],
                                outputRange: [26, 26],
                                extrapolate: 'clamp'
                            }),
                        }]}
                    >Notification</Animated.Text>

                    <Animated.View
                        style={{
                            paddingTop: 50,
                            width: scrollOffset.interpolate({
                                inputRange: [0, 200],
                                outputRange: [screenWidth * 0.9 - this.state.titleWidth, 0],
                                extrapolate: 'clamp',
                                useNativeDriver: true
                            }),
                        }}
                    />
                </Animated.View>

                <Animated.ScrollView
                    style={{ flex: 1, width: '100%', paddingTop: 20 }}
                    contentContainerStyle={{ width: '100%' }}
                    onScroll={this.onScroll}
                    scrollEventThrottle={15}
                    useNativeDriver
                >
                    {
                        notificationList.map((l, i) => (
                            <ListItem
                                // borderRadius={20}
                                bottomDivider
                                containerStyle={styles.containerStyle}
                                key={i}
                                leftAvatar={{ source: { uri: l.avatar_url } }}
                                title={l.name}
                                subtitle={l.subtitle}
                            />
                        ))
                    }

                </Animated.ScrollView>

                <View style={styles.backButtonStyle}>
                    <Button
                        onPress={() => this.props.navigation.pop()}
                        containerViewStyle={{ alignSelf: 'stretch' }}
                        buttonStyle={styles.button}
                        icon={
                            <Icon
                                allowFontScaling
                                name="chevron-left"
                                size={20}
                                color="#ccc"
                            />}
                    />
                </View>

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
        paddingTop: 10,
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
