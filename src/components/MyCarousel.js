import React, { Component } from 'react';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { ScrollView, View, Text, StatusBar, SafeAreaView } from 'react-native';
import { ENTRIES1 } from '../static/entries';
import { sliderWidth, itemWidth } from '../styles/SliderEntry.style';
import SliderEntry from './SliderEntry/SliderEntry';
import styles, { colors } from '../styles/index.style';

export default class MyCarousel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            slider1ActiveSlide: 1
        };
        this._renderItem = this._renderItem.bind(this);
    }

    someFunc() {
        this.props.navigation.navigate('ShowProduct');
    }

    _renderItem({ item, index }) {
        return (<SliderEntry
            onPress={this.someFunc.bind(this)}
            data={item} even={(index + 1) % 2 === 0}
        />);
    }

    render() {
        const { slider1ActiveSlide } = this.state;
        return (
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.container}>
                    <StatusBar
                        translucent
                        backgroundColor={'rgba(0, 0, 0, 0.3)'}
                        barStyle={'light-content'}
                    />
                    {this.gradient}
                    <ScrollView
                        style={styles.scrollview}
                        scrollEventThrottle={200}
                        directionalLockEnabled
                    >
                        <View style={styles.exampleContainer}>
                            <Carousel
                                ref={c => this._slider1Ref = c}
                                data={ENTRIES1}
                                renderItem={this._renderItem}
                                sliderWidth={sliderWidth}
                                itemWidth={itemWidth}
                                hasParallaxImages
                                firstItem={1}
                                inactiveSlideScale={0.94}
                                inactiveSlideOpacity={0.7}
                                inactiveSlideShift={20}
                                containerCustomStyle={styles.slider}
                                contentContainerCustomStyle={styles.sliderContentContainer}
                                loop
                                loopClonesPerSide={2}
                                autoplay
                                autoplayDelay={1000}
                                autoplayInterval={30000}
                                onSnapToItem={(index) => this.setState({ slider1ActiveSlide: index })}
                            />
                            <Pagination
                                dotsLength={ENTRIES1.length}
                                activeDotIndex={slider1ActiveSlide}
                                containerStyle={styles.paginationContainer}
                                dotColor={'rgba(255, 255, 255, 0.92)'}
                                dotStyle={styles.paginationDot}
                                inactiveDotColor={colors.black}
                                inactiveDotOpacity={0.4}
                                inactiveDotScale={0.6}
                                carouselRef={this._slider1Ref}
                                tappableDots={!!this._slider1Ref}
                            />
                        </View>
                    </ScrollView>
                </View>
            </SafeAreaView>
        );
    }
}
