import React from 'react';
import { ScrollView, Text } from 'react-native';
import SearchBarComponent from '../common/SearchBarComponent';
import Styles from '../../styles/commonStyles';
import ShowProducts from '../Product/ShowProducts';
import { ENTRIES1 } from '../../static/entries';


export default class AuctionTab extends React.Component {

    render() {
        return (
            <ScrollView style={Styles.rootContainer}>
                <Text
                    style={[Styles.header, {
                        fontSize: 35,
                        paddingTop: 15,
                        alignSelf: 'center',
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingBottom: 20,
                    }]}
                >AUCTION</Text>
                <SearchBarComponent/>
                <ShowProducts data={ENTRIES1}/>
            </ScrollView>
        );
    }
}

