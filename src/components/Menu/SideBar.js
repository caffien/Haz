import React from 'react';
import { CachedImage } from 'react-native-cached-image';

import { Container, Content, List, ListItem, Text } from 'native-base';

const routes = ['Home', 'Chat', 'Profile'];
export default class SideBar extends React.Component {
    render() {
        return (
            <Container>
                <Content>
                    <CachedImage
                        source={{
                            uri: 'https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/react-navigation/img/drawer-cover.png'
                        }}
                        style={{
                            height: 120,
                            alignSelf: 'stretch',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <CachedImage
                            square
                            style={{ height: 80, width: 70 }}
                            source={{
                                uri: 'https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/react-navigation/img/logo.png'
                            }}
                        />
                    </CachedImage>
                    <List
                        dataArray={routes}
                        renderRow={data => {
                            return (
                                <ListItem
                                    button
                                    onPress={() => this.props.navigation.navigate(data)}
                                >
                                    <Text>{data}</Text>
                                </ListItem>
                            );
                        }}
                    />
                </Content>
            </Container>
        );
    }
}
