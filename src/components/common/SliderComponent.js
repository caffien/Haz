import React, { Component } from 'react';
import { View, Text, InteractionManager } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { withNavigation } from 'react-navigation';
import { ENTRIES1 } from '../../static/entries';
import { itemWidth, sliderWidth } from '../../styles/SliderEntry.style';
import SliderEntry from '../SliderEntry/SliderEntry';
import styles, { colors } from '../../styles/index.style';


class SliderComponent extends Component<any, any> {

    constructor(props) {
        super(props);
        this.state = {
            slider1ActiveSlide: 1,
            interactionsComplete: false,
        };
        this._renderItem = this._renderItem.bind(this);
    }

    componentDidMount() {
        InteractionManager.runAfterInteractions(() => {
            this.setState({ interactionsComplete: true });
        });
    }

    someFunc = () => {
        this.props.navigation.navigate('ShowSingleProduct');
    };


    _renderItem({ item, index }, props) {
        return (<SliderEntry
            slideInnerContainer={props.itemHeight && {
                height: props.itemHeight,

            }}
            onPress={() => this.someFunc}
            data={item} even={(index + 1) % 2 === 0}
        />);
    }

    render() {
        const { slider1ActiveSlide } = this.state;
        const enablePagination = this.props.enablePagination === false ? this.props.enablePagination : true;
        const autoPlay = this.props.autoPlay === false ? this.props.autoPlay : true;
        console.log(enablePagination, this.props.enablePagination);
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
            <View style={{ flex: 1 }}>
                <View style={styles.exampleContainer}>
                    <Carousel
                        ref={c => this._slider1Ref = c}
                        data={this.props.data}
                        renderItem={({ item, index }) => this._renderItem({
                            item,
                            index
                        }, this.props)}
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
                        autoplay={autoPlay}
                        autoplayDelay={1000}
                        autoplayInterval={30000}
                        onSnapToItem={(index, item) => {
                            this.setState({ slider1ActiveSlide: index });
                            this.props.onSnapToItem && this.props.onSnapToItem(index);
                        }}
                    />
                    {enablePagination && <Pagination
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
                    />}
                </View>
            </View>
        );
    }
}

export default withNavigation(SliderComponent);
