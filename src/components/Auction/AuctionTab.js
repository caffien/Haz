import React from 'react';
import { ScrollView } from 'react-native';
import SearchBarComponent from '../common/SearchBarComponent';
import Styles from '../../styles/commonStyles';
import ShowProducts from '../Product/ShowProducts';
import { ENTRIES1 } from '../../static/entries';


export default class AuctionTab extends React.Component {

    render() {
        return (
            <ScrollView style={Styles.rootContainer}>
                <SearchBarComponent/>
                <ShowProducts data={ENTRIES1}/>
            </ScrollView>
        );
    }
}

