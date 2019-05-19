import React from 'react';
import { SearchBar } from 'react-native-elements';
import { View, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class SearchBarComponent extends React.Component {

    constructor(props, ctx) {
        super(props, ctx);

        this.state = {
            search: '',
            visible: false,
            picked: null,
        };
    }

    onShow = () => {
        this.setState({ visible: true });
    };

    onSelect = (picked) => {
        this.setState({
            picked,
            visible: false
        });
    };

    onCancel = () => {
        this.setState({
            visible: false
        });
    };


    updateSearch = search => {
        this.setState({ search });
    };


    render() {
        const { search, visible, picked } = this.state;
        const options = [
            {
                key: 'kenya',
                label: 'Kenya',
            },
            {
                key: 'uganda',
                label: 'Uganda',
            },
            {
                key: 'libya',
                label: 'Libya',
            }
        ];

        return (
            <View style={styles.rootViewStyle}>
                <SearchBar
                    containerStyle={styles.containerStyle}
                    inputContainerStyle={styles.inputContainerStyle}
                    placeholder="Type Here..."
                    onChangeText={this.updateSearch}
                    value={search}
                    onClear={() => this.setState({ search: '' })}
                />
                <TouchableOpacity style={styles.filter} onPress={this.onShow}>
                    <Icon
                        name="filter"
                        size={20}
                        color="#454f63"
                    />
                    <Modal
                        isVisible={visible}
                        onShow={this.onSelect}
                        onDismess={this.onCancel}
                    />
                </TouchableOpacity>
            </View>
        );
    }
}
const commonBorderRadius = 25;
const styles = {
    containerStyle: {
        flex: 1,
        borderRadius: commonBorderRadius,
        padding: 0,
        overflow: 'hidden',
        borderBottomWidth: 0,
        borderTopWidth: 0,
        backgroundColor: 'white',

    },
    inputContainerStyle: {
        flex: 1,
        backgroundColor: 'white',
        borderRadius: commonBorderRadius,
    },
    rootViewStyle: {
        borderRadius: commonBorderRadius,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        shadowOffset: { width: 0, height: 2, },
        shadowColor: '#466366',
        shadowOpacity: 0.2,
        shadowRadius: 10,
        marginRight: 10,
        marginLeft: 10,
        padding: 0,
        alignSelf: 'stretch',
    },
    filter: {
        marginRight: 10,
        padding: 10,
        alignSelf: 'center',
        justifyContent: 'center'
    },
    overlayStyle: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.85)',
        justifyContent: 'center',
        alignItems: 'center'
    }
};
