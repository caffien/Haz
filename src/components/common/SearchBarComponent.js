import React from 'react';
import { SearchBar } from 'react-native-elements';
import { View, Alert } from 'react-native';
import { colors } from '../../styles/index.style';

export default class App extends React.Component {
    state = {
        search: '',
    };

    updateSearch = search => {
        this.setState({ search });
    };


    render() {
        const { search } = this.state;

        return (
            <View style={styles.shadow}>
                <SearchBar
                    containerStyle={styles.containerStyle}
                    inputContainerStyle={styles.inputContainerStyle}
                    placeholder="Type Here..."
                    onChangeText={this.updateSearch}
                    value={search}
                    onClear={() => this.setState({ search: '' })}
                />
            </View>
        );
    }
}

const styles = {
    containerStyle: {
        backgroundColor: 'white',
        borderRadius: 25,
        padding: 0,
        margin: 10,
        overflow: 'hidden',
        borderBottomWidth: 0,
        borderTopWidth: 0,
    },
    inputContainerStyle: {
        backgroundColor: 'white',
        borderRadius: 15,
    },
    shadow: {
        shadowOffset: { width: 0, height: 2, },
        shadowColor: '#466366',
        shadowOpacity: 0.2,
        shadowRadius: 10
    }
};
