import React, { Component } from 'react';
import { ScrollView, View, StyleSheet, Dimensions, Animated } from 'react-native';
import { Button, ListItem, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

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

        const list = [
            {
                name: 'Amy Farha',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                subtitle: 'Vice President'
            },
            {
                name: 'Chris Jackson',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                subtitle: 'Vice Chairman'
            }, {
                name: 'Amy Farha',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                subtitle: 'Vice President'
            },
            {
                name: 'Chris Jackson',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                subtitle: 'Vice Chairman'
            }, {
                name: 'Amy Farha',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                subtitle: 'Vice President'
            },
            {
                name: 'Chris Jackson',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                subtitle: 'Vice Chairman'
            }, {
                name: 'Chris Jackson',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                subtitle: 'Vice Chairman'
            }, {
                name: 'Amy Farha',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                subtitle: 'Vice President'
            },
            {
                name: 'Chris Jackson',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                subtitle: 'Vice Chairman'
            }, {
                name: 'Amy Farha',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                subtitle: 'Vice President'
            },
            {
                name: 'Chris Jackson',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                subtitle: 'Vice Chairman'
            }, {
                name: 'Chris Jackson',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                subtitle: 'Vice Chairman'
            }, {
                name: 'Amy Farha',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                subtitle: 'Vice President'
            },
            {
                name: 'Chris Jackson',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                subtitle: 'Vice Chairman'
            }, {
                name: 'Amy Farha',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                subtitle: 'Vice President'
            },
            {
                name: 'Chris Jackson',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                subtitle: 'Vice Chairman'
            }, {
                name: 'Chris Jackson',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                subtitle: 'Vice Chairman'
            }, {
                name: 'Amy Farha',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                subtitle: 'Vice President'
            },
            {
                name: 'Chris Jackson',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                subtitle: 'Vice Chairman'
            }, {
                name: 'Amy Farha',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                subtitle: 'Vice President'
            },
            {
                name: 'Chris Jackson',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                subtitle: 'Vice Chairman'
            }, {
                name: 'Chris Jackson',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                subtitle: 'Vice Chairman'
            }, {
                name: 'Amy Farha',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                subtitle: 'Vice President'
            },
            {
                name: 'Chris Jackson',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                subtitle: 'Vice Chairman'
            }, {
                name: 'Amy Farha',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                subtitle: 'Vice President'
            },
            {
                name: 'Chris Jackson',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                subtitle: 'Vice Chairman'
            },
        ];

        return (
            <View style={styles2.container}>

                <View style={styles.backButtonStyle}>
                    <Button
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
                                inputRange: [0, 200],
                                outputRange: [26, 20],
                                extrapolate: 'clamp',
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
                            }),
                        }}
                    />
                </Animated.View>

                <ScrollView
                    style={{ flex: 1, width: '100%', paddingTop: 20 }}
                    contentContainerStyle={{ width: '100%' }}
                    onScroll={this.onScroll}
                    scrollEventThrottle={20}
                >
                    {
                        list.map((l, i) => (
                            <ListItem
                                // borderRadius={20}
                                bottomDivider
                                containerStyle={styles.containerStyle}
                                key={i}
                                leftAvatar={{ source: { uri: l.avatar_url } }}
                                title={l.name}
                                subtitle={l.subtitle}
                                onPress={() => console.log(this)}
                            />
                        ))
                    }
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
        paddingTop: 10,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingBottom: 8,
    },
    listItem: {
        height: 200,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
});